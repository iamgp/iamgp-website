# Complete article change record

This record compares the original Markdown drafts with the MDX files in this pull request. Each diff includes every removed and added line. A minus sign marks an original line; a plus sign marks its replacement. The line numbers refer to the compared files.

The changes cover the Humanizer revisions, Rex product spelling, MDX diagram component and article navigation. The series guide now addresses readers and keeps editorial reports outside the published pages. Unchanged code examples are omitted from the diff. Historical removed lines retain their original spelling. `MAC_REX_TS_IP` remains an uppercase placeholder.

Final article scores are **92, 100, 100, 100, 100, 100, 100**, in series order. [The score report](HUMANIZER-REVIEW.md) explains the deductions.

## 01-architecture.mdx

````diff
--- original/01-architecture.md
+++ src/content/blog/private-vps/01-architecture.mdx
@@ -0,0 +1,2 @@
+import { MermaidDiagram } from '@/components/MermaidDiagram'
+
@@ -3 +5 @@
-*Part 1 of 7. [Series index](README.md) · [Next: private access](02-private-access-and-ssh.md)*
+*Part 1 of 7. [Series index](README.mdx) · [Next: private access](02-private-access-and-ssh.mdx)*
@@ -7 +9 @@
-The tools were already familiar: a VPS, Tailscale, 1Password, REX and Cloudflare. The useful work was deciding how they should fit together.
+The tools were already familiar: a VPS, Tailscale, 1Password, Rex and Cloudflare. The useful work was deciding how they should fit together.
@@ -15 +17 @@
-That gives the machine a fairly narrow job. It runs the development tools and applications. My Mac and iPhone are clients. The laptop can have its own local projects and its own REX server, but the VPS workspace should not depend on either of those being available.
+That gives the machine a fairly narrow job. It runs the development tools and applications. My Mac and iPhone are clients. The laptop can have its own local projects and its own Rex server, but the VPS workspace should not depend on either of those being available.
@@ -26 +28 @@
-| REX | Provide persistent terminal sessions that clients can reconnect to |
+| Rex | Provide persistent terminal sessions that clients can reconnect to |
@@ -31 +33 @@
-REX's Linux server and its Mac client are separate components. A remote terminal is only useful while the laptop is closed if the shell and its work are running on the remote machine. REX supports a Linux server with private Tailscale access; the client connects to that server's address. [REX remote-access documentation](https://www.superlogical.com/rex/docs/linux/remote-access)
+Rex's Linux server and its Mac client are separate components. A remote terminal is only useful while the laptop is closed if the shell and its work are running on the remote machine. Rex supports a Linux server with private Tailscale access; the client connects to that server's address. [Rex remote-access documentation](https://www.superlogical.com/rex/docs/linux/remote-access)
@@ -37 +39 @@
-The operating system runs Tailscale for SSH and application previews. REX also has a built-in Tailscale integration, which joins the network as a separate device. In the examples, those devices are called `workbench` and `workbench-rex`.
+The operating system runs Tailscale for SSH and application previews. Rex also has a built-in Tailscale integration, which joins the network as a separate device. In the examples, those devices are called `workbench` and `workbench-rex`.
@@ -42 +44 @@
-- `workbench-rex` handles REX control connections.
+- `workbench-rex` handles Rex control connections.
@@ -44 +46 @@
-The addresses should be recorded separately. A preview URL is not automatically the REX endpoint, and a successful SSH connection does not prove that the REX client is authorised.
+The addresses should be recorded separately. A preview URL is not automatically the Rex endpoint, and a successful SSH connection does not prove that the Rex client is authorised.
@@ -46 +48 @@
-~~~mermaid
+<MermaidDiagram source={`
@@ -49 +51 @@
-    mac -->|Private HTTPS| rex[REX node]
+    mac -->|Private HTTPS| rex[Rex node]
@@ -59 +61 @@
-~~~
+`} />
@@ -67 +69 @@
-The administrator can maintain the operating system with password-protected sudo. The development account owns projects, rootless Docker, the personal REX service and the Amp runner. It has no general sudo permission.
+The administrator can maintain the operating system with password-protected sudo. The development account owns projects, rootless Docker, the personal Rex service and the Amp runner. It has no general sudo permission.
@@ -87 +89 @@
-3. REX opens the VPS workspace from the Mac and phone.
+3. Rex opens the VPS workspace from the Mac and phone.
````

## 02-private-access-and-ssh.mdx

````diff
--- original/02-private-access-and-ssh.md
+++ src/content/blog/private-vps/02-private-access-and-ssh.mdx
@@ -3 +3 @@
-*Part 2 of 7. [Previous: architecture](01-architecture.md) · [Series index](README.md) · [Next: rootless Docker](03-rootless-docker.md)*
+*Part 2 of 7. [Previous: architecture](01-architecture.mdx) · [Series index](README.mdx) · [Next: rootless Docker](03-rootless-docker.mdx)*
@@ -27 +27 @@
-Before enrolling the server, prepare its access policy. I used separate tags for the operating-system node and the later REX node. Tags represent service devices rather than personal ownership; define who may apply them. [Tailscale tags](https://tailscale.com/docs/features/tags)
+Before enrolling the server, prepare its access policy. I used separate tags for the operating-system node and the later Rex node. Tags represent service devices rather than personal ownership; define who may apply them. [Tailscale tags](https://tailscale.com/docs/features/tags)
@@ -86 +86 @@
-Look up each device's address and owner in the admin console. The Mac REX address, when present, is its embedded Tailscale node, which can be a different source from the Mac operating system. If you do not use that integration, omit its placeholder rather than guessing an address.
+Look up each device's address and owner in the admin console. The Mac Rex address, when present, is its embedded Tailscale node, which can be a different source from the Mac operating system. If you do not use that integration, omit its placeholder rather than guessing an address.
@@ -199 +199 @@
-Inspect existing rules before enabling this. A broad pre-existing `22/tcp` allow would still matter. The Tailscale policy controls the private network path as well; the host firewall does not replace it, particularly for REX's embedded integration.
+Inspect existing rules before enabling this. A broad pre-existing `22/tcp` allow would still matter. The Tailscale policy controls the private network path as well; the host firewall does not replace it, particularly for Rex's embedded integration.
````

## 03-rootless-docker.mdx

````diff
--- original/03-rootless-docker.md
+++ src/content/blog/private-vps/03-rootless-docker.mdx
@@ -3 +3 @@
-*Part 3 of 7. [Previous: private access](02-private-access-and-ssh.md) · [Series index](README.md) · [Next: REX and previews](04-rex-and-private-previews.md)*
+*Part 3 of 7. [Previous: private access](02-private-access-and-ssh.mdx) · [Series index](README.mdx) · [Next: Rex and previews](04-rex-and-private-previews.mdx)*
````

## 04-rex-and-private-previews.mdx

````diff
--- original/04-rex-and-private-previews.md
+++ src/content/blog/private-vps/04-rex-and-private-previews.mdx
@@ -1,9 +1,9 @@
-# REX, private previews and an iPhone connection
-
-*Part 4 of 7. [Previous: rootless Docker](03-rootless-docker.md) · [Series index](README.md) · [Next: project secrets](05-secrets-with-1password.md)*
-
-With private SSH and rootless Docker working, I added the interfaces I would actually use: a persistent REX workspace and an HTTPS preview that opens on another device.
-
-These are two different services. The REX endpoint controls terminals. The preview endpoint reaches an application. Keeping their addresses and permissions separate made the phone setup much easier to understand.
-
-## Install the intended REX package
+# Rex, private previews and an iPhone connection
+
+*Part 4 of 7. [Previous: rootless Docker](03-rootless-docker.mdx) · [Series index](README.mdx) · [Next: project secrets](05-secrets-with-1password.mdx)*
+
+With private SSH and rootless Docker working, I added the interfaces I would actually use: a persistent Rex workspace and an HTTPS preview that opens on another device.
+
+These are two different services. The Rex endpoint controls terminals. The preview endpoint reaches an application. Keeping their addresses and permissions separate made the phone setup much easier to understand.
+
+## Install the intended Rex package
@@ -27 +27 @@
-I used a personal REX service under `builder`, rather than a root login server. Check that unused package-level shared or login-server units are not active alongside it.
+I used a personal Rex service under `builder`, rather than a root login server. Check that unused package-level shared or login-server units are not active alongside it.
@@ -33 +33 @@
-Description=Personal development REX server
+Description=Personal development Rex server
@@ -57 +57 @@
-The membership flag is appropriate here only with the restrictive network policy already in place. A tagged node has no personal owner, and REX admits the tailnet callers that the policy permits. A connection can exercise the server account's authority. This is why I did not put an anonymous listener on a public address. [REX's listener and authorisation documentation](https://www.superlogical.com/rex/docs/linux/remote-access)
+The membership flag is appropriate here only with the restrictive network policy already in place. A tagged node has no personal owner, and Rex admits the tailnet callers that the policy permits. A connection can exercise the server account's authority. This is why I did not put an anonymous listener on a public address. [Rex's listener and authorisation documentation](https://www.superlogical.com/rex/docs/linux/remote-access)
@@ -183 +183 @@
-First connect the phone to the same Tailscale network. To allow REX, add the verified `PHONE_TS_IP` to the REX grant from part 2:
+First connect the phone to the same Tailscale network. To allow Rex, add the verified `PHONE_TS_IP` to the Rex grant from part 2:
@@ -205,5 +205,5 @@
-In REX iOS, add the VPS address, `https://workbench-rex.YOUR_TAILNET.ts.net:443`, and open the server's workspace. If the Mac is already paired, keep that entry. It represents a different server.
-
-The Mac's pairing QR code in our build advertised the Mac's own REX server, even while a VPS connection existed. Checking the address avoided pairing the wrong host again. I entered the VPS address separately on the phone.
-
-Finally, inspect `rex client ls` on the VPS. I checked the native iPhone client's presence and authenticated principal as well as the Mac's connection. A successful preview in Safari had proved browser access; this separate check proved REX control access.
+In Rex iOS, add the VPS address, `https://workbench-rex.YOUR_TAILNET.ts.net:443`, and open the server's workspace. If the Mac is already paired, keep that entry. It represents a different server.
+
+The Mac's pairing QR code in our build advertised the Mac's own Rex server, even while a VPS connection existed. Checking the address avoided pairing the wrong host again. I entered the VPS address separately on the phone.
+
+Finally, inspect `rex client ls` on the VPS. I checked the native iPhone client's presence and authenticated principal as well as the Mac's connection. A successful preview in Safari had proved browser access; this separate check proved Rex control access.
````

## 05-secrets-with-1password.mdx

````diff
--- original/05-secrets-with-1password.md
+++ src/content/blog/private-vps/05-secrets-with-1password.mdx
@@ -3 +3 @@
-*Part 5 of 7. [Previous: REX and previews](04-rex-and-private-previews.md) · [Series index](README.md) · [Next: the Amp runner](06-amp-runner-and-deployments.md)*
+*Part 5 of 7. [Previous: Rex and previews](04-rex-and-private-previews.mdx) · [Series index](README.mdx) · [Next: the Amp runner](06-amp-runner-and-deployments.mdx)*
@@ -37 +37 @@
-Here is a small, deliberately limited version that a reader can reproduce without the private launcher. It runs one transport-check job, accepts one named value and offers no general command or image parameter.
+The example below runs a fixed transport check with one value, `DEMO_TOKEN`. It does not accept a command or an image name from the request.
@@ -121 +121 @@
-The useful constraint here is narrow and testable: retrieve specific fields locally, send only the named values needed for a job, and leave the general vault credential off the VPS.
+The Mac remains responsible for reading the vault. The VPS job receives only the selected values.
````

## 06-amp-runner-and-deployments.mdx

````diff
--- original/06-amp-runner-and-deployments.md
+++ src/content/blog/private-vps/06-amp-runner-and-deployments.mdx
@@ -3 +3 @@
-*Part 6 of 7. [Previous: project secrets](05-secrets-with-1password.md) · [Series index](README.md) · [Next: verification and recovery](07-verification-and-recovery.md)*
+*Part 6 of 7. [Previous: project secrets](05-secrets-with-1password.mdx) · [Series index](README.mdx) · [Next: verification and recovery](07-verification-and-recovery.mdx)*
@@ -5 +5 @@
-At this point, the VPS had private access, rootless Docker, REX and a controlled way to publish a preview. I could now give Amp a deployment target with a defined account, project location and verification procedure.
+The Amp runner uses `builder` and `/home/builder/projects`. Its deployment tasks build applications with rootless Docker and publish private URLs through the preview helper.
@@ -129 +129 @@
-Publish with sudo -n /usr/local/sbin/workbench-preview set HTTPS_PORT LOCAL_PORT, choosing an unused HTTPS port from 8443 to 8499. The private URL uses the operating-system node's Tailscale hostname, not the REX hostname. Verify it from an authorised client.
+Publish with sudo -n /usr/local/sbin/workbench-preview set HTTPS_PORT LOCAL_PORT, choosing an unused HTTPS port from 8443 to 8499. The private URL uses the operating-system node's Tailscale hostname, not the Rex hostname. Verify it from an authorised client.
````

## 07-verification-and-recovery.mdx

````diff
--- original/07-verification-and-recovery.md
+++ src/content/blog/private-vps/07-verification-and-recovery.mdx
@@ -3 +3 @@
-*Part 7 of 7. [Previous: Amp deployments](06-amp-runner-and-deployments.md) · [Series index](README.md)*
+*Part 7 of 7. [Previous: Amp deployments](06-amp-runner-and-deployments.mdx) · [Series index](README.mdx)*
@@ -33 +33 @@
-Open the VPS workspace in the Mac REX app and in REX iOS. Verify the account and hostname inside the terminal. On the VPS, inspect `rex client ls` for the expected clients and their authenticated identities. An app showing a connected host is useful; a shell on the intended machine is stronger evidence.
+Open the VPS workspace in the Mac Rex app and in Rex iOS. Verify the account and hostname inside the terminal. On the VPS, inspect `rex client ls` for the expected clients and their authenticated identities. An app showing a connected host is useful; a shell on the intended machine is stronger evidence.
@@ -75 +75 @@
-I tested a detached job after its originating client had exited, then inspected the result from a later connection. I tested the persistent foundation after a VPS reboot. That covered private SSH, REX, rootless Docker, the user resource limits and the original preview.
+I tested a detached job after its originating client had exited, then inspected the result from a later connection. I tested the persistent foundation after a VPS reboot. That covered private SSH, Rex, rootless Docker, the user resource limits and the original preview.
@@ -101 +101 @@
-For maintenance, keep the operating system's security updates enabled, review the deliberate REX version pin, and checkpoint active agent work before restarting its service. An application should have a recorded source revision and a way to return to its previous working version. If a private-repository credential or application secret has not been supplied yet, say so instead of treating the machine's readiness as that project's readiness.
+For maintenance, keep the operating system's security updates enabled, review the deliberate Rex version pin, and checkpoint active agent work before restarting its service. An application should have a recorded source revision and a way to return to its previous working version. If a private-repository credential or application secret has not been supplied yet, say so instead of treating the machine's readiness as that project's readiness.
@@ -109 +109 @@
-| How do I enter the machine? | Development and administrator SSH aliases, REX endpoint and workspace |
+| How do I enter the machine? | Development and administrator SSH aliases, Rex endpoint and workspace |
````

## README.mdx

````diff
--- original/README.md
+++ src/content/blog/private-vps/README.mdx
@@ -3 +3 @@
-Seven Markdown drafts about building a development machine that I can use through REX on my Mac and iPhone, with private previews and an Amp runner that can deploy applications.
+A seven-part guide to building a development machine that I can use through Rex on my Mac and iPhone, with private previews and an Amp runner that can deploy applications.
@@ -9,7 +9,7 @@
-| 1 | [Deciding what each tool is responsible for](01-architecture.md) | The architecture, trust boundaries and the role of Cloudflare |
-| 2 | [Private access before convenience](02-private-access-and-ssh.md) | Tailscale policy, host verification, account separation and 1Password SSH |
-| 3 | [Rootless Docker with limits that actually apply](03-rootless-docker.md) | User services, cgroups, constrained jobs and writable project mounts |
-| 4 | [REX, private previews and an iPhone connection](04-rex-and-private-previews.md) | The REX server, HTTPS previews, a narrow privileged helper and mobile access |
-| 5 | [Giving a job one secret](05-secrets-with-1password.md) | Secret references, SSH stdin, validation and the limits of environment variables |
-| 6 | [An Amp runner that can deploy](06-amp-runner-and-deployments.md) | Persistent execution, account selection, global instructions and a real deployment |
-| 7 | [Checking the whole system](07-verification-and-recovery.md) | Client checks, restart tests, provider-console recovery and an honest handover |
+| 1 | [Deciding what each tool is responsible for](01-architecture.mdx) | The architecture, trust boundaries and the role of Cloudflare |
+| 2 | [Private access before convenience](02-private-access-and-ssh.mdx) | Tailscale policy, host verification, account separation and 1Password SSH |
+| 3 | [Rootless Docker with limits that actually apply](03-rootless-docker.mdx) | User services, cgroups, constrained jobs and writable project mounts |
+| 4 | [Rex, private previews and an iPhone connection](04-rex-and-private-previews.mdx) | The Rex server, HTTPS previews, a narrow privileged helper and mobile access |
+| 5 | [Giving a job one secret](05-secrets-with-1password.mdx) | Secret references, SSH stdin, validation and the limits of environment variables |
+| 6 | [An Amp runner that can deploy](06-amp-runner-and-deployments.mdx) | Persistent execution, account selection, global instructions and a real deployment |
+| 7 | [Checking the whole system](07-verification-and-recovery.mdx) | Client checks, restart tests, provider-console recovery and an honest handover |
@@ -24 +24 @@
-| `workbench-rex` | The separate Tailscale node used by REX |
+| `workbench-rex` | The separate Tailscale node used by Rex |
@@ -37,3 +37 @@
-The drafts reflect the setup and product documentation checked on 31 October 2026. Check the linked vendor documentation when following them, particularly for REX installation and Amp CLI options.
-
-For editorial scope and the publication privacy review, see [Draft notes](DRAFT-NOTES.md).
+The articles reflect the setup and product documentation checked on 31 October 2026. Check the linked vendor documentation when following them, particularly for Rex installation and Amp CLI options.
````

## Website implementation

The pull request diff contains every implementation change, including MDX compilation, article routes and theme styling. The new authoring instructions and editorial records appear there in full. They were not part of the original article drafts.
