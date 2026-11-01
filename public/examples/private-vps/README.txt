Private development VPS examples

These files accompany the seven-part guide. Names and infrastructure identifiers are examples. Replace uppercase placeholders before using them.

tailscale-policy.json
    Access grants and tests for the Mac, iPhone and two tagged VPS nodes.
    Adapt it to your existing Tailscale policy. If the Mac Rex client does not use
    an embedded Tailscale node, remove MAC_REX_TS_IP from the Rex grant.

workbench-preview.py
    The restricted Tailscale Serve helper used in part 4.
    Install it as /usr/local/sbin/workbench-preview with root ownership and
    mode 0755. Configure its sudoers permission as described in the post.

receive-demo-job.py and send-demo-job.py
    A fixed, non-secret transport check used in part 5.
    The receiver runs under builder on the VPS. The sender runs on the Mac.
    Set its 1Password reference to a field containing transport-check-only.
    These scripts demonstrate one-job transport, not unattended secret renewal.

DEPLOYMENT.md
    The deployment procedure used in part 6. Adapt it to your projects and
    install it as /home/builder/.config/workbench/DEPLOYMENT.md, owned by builder
    with mode 0600.

Read the corresponding post for prerequisites, permissions and verification.
