#!/usr/bin/python3 -I
import json
import os
import subprocess
import sys

raw = sys.stdin.buffer.read(65537)
if len(raw) > 65536:
    raise SystemExit("request too large")
payload = json.loads(raw)
if not isinstance(payload, dict) or set(payload) != {"DEMO_TOKEN"}:
    raise SystemExit("unsupported request")
value = payload["DEMO_TOKEN"]
if not isinstance(value, str) or not value or "\u0000" in value:
    raise SystemExit("invalid named value")

environment = os.environ.copy()
environment["DEMO_TOKEN"] = value
command = [
    "/usr/bin/docker", "--context", "rootless", "run", "--rm", "--init",
    "--cap-drop=ALL", "--security-opt=no-new-privileges",
    "--cpus=0.25", "--memory=128m", "--pids-limit=64",
    "--env", "DEMO_TOKEN", "python:3.12-slim", "python", "-c",
    "import os; assert os.environ['DEMO_TOKEN'] == 'transport-check-only'; print('transport check passed')",
]
subprocess.run(command, env=environment, check=True)
