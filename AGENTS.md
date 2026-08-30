# Repository agent rules

These instructions apply to every automated agent working anywhere in this repository.

## Commits and remote repository actions

- Never run `git commit` unless Alexandra explicitly asks for that commit in the current conversation.
- A request to edit, fix, build, test, push, or "finish" work is not permission to create a commit.
- Never infer commit permission from an earlier commit request or from a previous workflow.
- Keep completed changes uncommitted by default and report which files remain modified.

- Never run `git push` unless Alexandra explicitly asks for that push in the current conversation.
- A request to edit, fix, build, test, commit, or "finish" work is not permission to push.
- Never infer push permission from an earlier push approval or from a previously approved command prefix.
- Before every push, state the exact remote and branch and obtain Alexandra's explicit confirmation.
- After an explicitly requested local commit, always tell Alexandra that the commit exists. Do not push it unless she separately and explicitly requests the push.
- Never create or update a pull request, release, tag, GitHub issue, repository setting, branch protection rule, deployment, or remote without Alexandra's explicit instruction in the current conversation.
- Never change, add, rename, or remove Git remotes without Alexandra's explicit instruction in the current conversation.

Agents may inspect repository state, edit files, and run local checks when those actions are within the user's request. By default, all completed work must remain uncommitted and local, with a clear handoff listing the modified files. Commits and pushes are always separate manual actions initiated by Alexandra.

## Local verification

- Never skip a verification hook. Do not pass `--no-verify` or `-n` to
  `git commit`, do not set `HUSKY=0`, and do not disable, edit, or delete the
  hooks in `.husky/` to get a command to pass.
- A failing hook is a real failure. Fix what it reports, then run the command
  again unchanged. Skipping the check does not remove the failure, it moves it
  to CI or to production.
- If the check itself is wrong, fix the check and say so. Never route around it.
- The same applies to the checks in `.github/workflows/`: never disable a job,
  add `continue-on-error`, or narrow what it runs so a red build turns green.
- Do not add `ignoreBuildErrors` or `ignoreDuringBuilds` to `next.config.ts`.
  Both hide real failures from the deploy.

A `PreToolUse` hook in `.claude/settings.json` blocks the bypass flags for
agents running in Claude Code. It is a backstop for one tool, not the rule —
the rule is the paragraph above, and it binds every agent.
