---
name: Dependency registry block
description: Security policy currently blocks installing the imported framework dependency.
---

The package firewall rejected installation of the imported app's pinned framework dependency with a critical vulnerability notice.

**Why:** the registry applied a security block during dependency setup; this is not caused by the portfolio content changes.

**How to apply:** before installing or running this project again, check for a current safe compatible framework release and update the dependency lockfile. Do not retry the blocked pin or bypass the security policy.
