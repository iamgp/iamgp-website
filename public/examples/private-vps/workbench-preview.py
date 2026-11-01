#!/usr/bin/python3 -I
import subprocess
import sys


def port(value, first, last):
    if not value.isascii() or not value.isdigit():
        raise SystemExit("expected an integer port")
    number = int(value)
    if not first <= number <= last:
        raise SystemExit("port outside the preview range")
    return number


def main():
    args = sys.argv[1:]
    if args == ["status"]:
        return subprocess.call(["/usr/bin/tailscale", "serve", "status", "--json"])
    if len(args) not in (2, 3) or args[0] not in ("set", "remove"):
        raise SystemExit("usage: set HTTPS_PORT LOCAL_PORT | remove HTTPS_PORT | status")
    https = port(args[1], 8443, 8499)
    command = ["/usr/bin/tailscale", "serve", "--bg", f"--https={https}"]
    if args[0] == "set" and len(args) == 3:
        local = port(args[2], 3000, 3999)
        command.append(f"http://127.0.0.1:{local}")
    elif args[0] == "remove" and len(args) == 2:
        command.append("off")
    else:
        raise SystemExit("invalid arguments")
    return subprocess.call(command)


if __name__ == "__main__":
    raise SystemExit(main())
