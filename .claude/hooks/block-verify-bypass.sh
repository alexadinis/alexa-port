#!/usr/bin/env bash
# Denies Bash commands that skip the pre-push and pre-commit checks.
#
# `git push --no-verify`, `git commit -n` and `HUSKY=0` all silence the hook
# that runs lint and types. Skipping it does not make the failure go away — it
# moves it to CI, or to production. The fix is to fix what the hook reported.
#
# Note `git push -n` is NOT matched: on push, -n means --dry-run, which is safe.
set -euo pipefail

command=$(jq -r '.tool_input.command // ""')

skips_verification() {
  grep -qE -- '(^|[^-])--no-verify' <<<"$command" && return 0
  grep -qE -- '(^|[;&|[:space:]])HUSKY=0' <<<"$command" && return 0
  grep -qE -- '(^|[;&|[:space:]])git[[:space:]]+commit([[:space:]]+[^;&|]*)?[[:space:]]-[A-Za-z]*n([[:space:]]|$)' <<<"$command" && return 0
  return 1
}

if skips_verification; then
  cat <<'JSON'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "This command skips the lint and type checks that run before a commit or push. Do not bypass them: run `pnpm lint` and `pnpm check-types`, fix what they report, and retry without the bypass flag. If the check itself is wrong, fix the check."
  }
}
JSON
fi
