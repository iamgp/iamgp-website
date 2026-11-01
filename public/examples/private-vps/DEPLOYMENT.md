# Private VPS deployment procedure

Read this procedure for deployments, private previews and application restarts on this development VPS.

## Prepare the project

Work as builder in a named project beneath /home/builder/projects. Confirm the requested repository and revision, or the source supplied for the task. Obtain repository-scoped credentials when needed. Keep secrets and local dependency directories out of source transfers.

Inspect the project's existing deployment files and running containers before changing them. Preserve other projects. Record the current source revision and retain the previous working image under a project-specific rollback tag, or retain the build inputs needed to recreate it. Keep that image until the new deployment has been accepted. If an existing deployment has no recoverable previous version, establish one before replacing it.

## Build and check locally

Use the rootless Docker context and Docker Compose. Build the Linux image on the VPS. Set explicit CPU, memory and process limits, along with a restart policy for persistent services.

Reuse an existing application's assigned ports when updating it. For a new application, choose an unused host port from 3000 to 3999. Publish the container port only on host 127.0.0.1. Inside the container, make the application listen on an interface Docker's port forwarding can reach, usually 0.0.0.0.

Define an application health check in Compose. Run docker compose up -d --build --wait --wait-timeout 60 from the project directory, adjusting the timeout if the application's startup needs longer. Check container status and logs, then make a local HTTP health request. Resolve local failures before publishing the preview.

## Publish and verify the preview

Check sudo -n /usr/local/sbin/workbench-preview status before allocating an unused HTTPS port from 8443 to 8499. Configure it with sudo -n /usr/local/sbin/workbench-preview set HTTPS_PORT LOCAL_PORT, replacing both port placeholders.

The private URL uses workbench's Tailscale hostname, not workbench-rex. Verify the requested application behaviour from an authorised client with normal certificate verification. If no client is available, report that the external client check is outstanding.

Use only the preview helper for this privileged operation. Leave broader administration to operator. Public exposure and production releases need their existing separate approval.

## Finish or roll back

Keep credentials in the project's approved secret-delivery mechanism. Keep values out of source files, command arguments and logs.

If the deployment fails, return to the recorded working version and check health again. Report the source revision, deployment result and private URL, with the checks performed and any failure. This Compose procedure can interrupt the application during a replacement; it does not provide a zero-downtime release.
