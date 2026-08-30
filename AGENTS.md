# Repository agent rules

These instructions apply to every automated agent working anywhere in this repository.

## Remote repository actions

- Never run `git push` unless Alexandra explicitly asks for that push in the current conversation.
- A request to edit, fix, build, test, commit, or "finish" work is not permission to push.
- Never infer push permission from an earlier push approval or from a previously approved command prefix.
- Before every push, state the exact remote and branch and obtain Alexandra's explicit confirmation.
- After creating any local commit, always tell Alexandra that the commit exists and explicitly ask whether she wants it pushed. Do not push until she answers yes.
- Never create or update a pull request, release, tag, GitHub issue, repository setting, branch protection rule, deployment, or remote without Alexandra's explicit instruction in the current conversation.
- Never change, add, rename, or remove Git remotes without Alexandra's explicit instruction in the current conversation.

Agents may inspect repository state, edit files, run local checks, and prepare local commits when those actions are within the user's request. By default, all completed work must remain local and be handed back with a clear note that it has not been pushed.
