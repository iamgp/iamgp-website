import json
import subprocess

reference = "op://Engineering/Transport check/value"
result = subprocess.run(
    ["op", "read", reference, "--no-newline"],
    capture_output=True,
    text=True,
)
if result.returncode:
    raise SystemExit("1Password could not supply the test value; no job started")

request = json.dumps({"DEMO_TOKEN": result.stdout}).encode()
subprocess.run(
    [
        "ssh", "-T", "-o", "ForwardAgent=no",
        "-o", "StrictHostKeyChecking=yes", "workbench",
        "/home/builder/.local/bin/receive-demo-job",
    ],
    input=request,
    check=True,
)
