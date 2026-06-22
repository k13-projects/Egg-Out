# Egg & Out — Working Conventions

This file is the source of truth for how we work on **Egg & Out** (E&O), a
Tiger Hospitality Group brand site. Keep it tight and current. It's loaded into
Claude Code every session via the `@CONVENTIONS.md` entry in `CLAUDE.md`.

These are the K13 house rules (see `K13-WarRoom/starter-kit/CONVENTIONS.md`)
adapted for this project. The project shortcode is **`ego`** — it's *only* the
branch/port shortcode; the brand is always written **"Egg & Out"** or **"E&O"**.

---

## Branch naming

Format:

```
ego_{mon}{dd}_v{N}
```

- `ego` — the project shortcode (shell-safe; chosen over `e&o` because `&` is a
  shell control character).
- `mon` — three-letter lowercase month (`jan`, `feb`, …, `dec`).
- `dd` — two-digit day of the month (zero-padded).
- `N` — integer version for that day, starting at `1`.

Examples:

- `ego_jun22_v1`
- `ego_jun22_v2`
- `ego_jun23_v1`

One branch per iteration/attempt. If a branch with the same date+version already
exists, increment `N`. Use `scripts/new-branch.sh` to create the next one
automatically.

**Standing rule:** every `ego_*` branch is preserved on `origin`. Do not delete
after merge — keep the historical trail intact.

---

## Commit messages

Every non-trivial commit follows the **Hail Mary grouped-bullet** format. Tiny
one-line fixes can stay one-line, but anything that implements a feature, ships
a refactor, or changes user-visible behavior gets the full treatment.

Structure:

1. **Subject line** — imperative, one sentence, **no emoji**, ≤ 72 chars. It
   should read like a headline a non-technical reader can grok.
2. **Overview paragraph** — 2–5 sentences in plain language. What changed, why
   it mattered, what the visitor will notice. Avoid code identifiers here.
3. **Grouped bullets** — the meat. Use a horizontal rule (`---`) +
   `Technical details` heading, then bullets **grouped by file, area, or
   concern**. Don't label sections "non-technical" / "technical" — the structure
   speaks for itself.
4. **Footer** — `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
   when Claude assisted.

The commit is a **living historical record** — capture decisions made, paths
considered and rejected, hidden constraints discovered. Future-you (and
future-Claude reading `git log`) will thank present-you.

**Emoji:** the subject line stays emoji-free. A tasteful 🥚 (or other) marker is
fine inside the body as a group header — don't overuse it, and never put one on
the subject.

---

## Run locally

Egg & Out owns **dev port `9149`** for life (K13 block `9130–9199`). Pin it so a
collision fails loudly instead of silently drifting:

- **Next.js:** `"dev": "next dev -p 9149"`

Check it's free before starting: `lsof -nP -iTCP:9149 -sTCP:LISTEN` (silent
output = free). Record the port here and in `CLAUDE.md` so it's one glance away.

---

## The Hail Mary

Triggers (case-insensitive, any of):

- `hail mary`
- `hail mary that shit`
- `hail mary pls` / `hail mary please`
- `hm`
- `hm pls` / `hm please`

When triggered, run these steps in order:

1. **Create a new branch** following the branch-naming convention above
   (`scripts/new-branch.sh`), then check out to it.
2. **Stage and commit** with a message that documents all the work in this
   session: changes implemented, things thought through, decisions made. Use the
   commit-message format above (overview at top, grouped bullets, technical
   detail at the bottom).
3. **Push** the branch with `git push -u origin HEAD` so it tracks the remote.

Plain hail mary **stops after push.** Do NOT open or merge a PR unless `hm++` is
used.

### Variant: `hm-1`

Same as Hail Mary, but **skip step 1**. Use this when we are already on the
branch we want the work to land on.

### Variant: `hm++`

Full end-to-end ship. Same as Hail Mary, plus two more steps:

4. **Open a pull request** against `main` using `gh pr create` with a tight
   summary + test plan. The PR title and body mirror the commit message's
   overview — the deeper technical detail stays in the commit body.
5. **Merge the PR** with `gh pr merge <num> --merge` — a **real merge commit**.
   No squash, no rebase, no `--delete-branch` — keep every `ego_*` branch on
   origin per the standing rule.

Helper: `scripts/hm.sh` does the mechanical branch + commit + push (and
`--ship` for `hm++`). The agent still composes the commit message.

---

## Identity

- **Author / owner:** Kazim — aka **K13** (Kazim Anil Korkmaz).
- Git identity: name `K13`, email
  `223161079+k13-projects@users.noreply.github.com` (run
  `scripts/setup-identity.sh` if unset).

---

## Notes for future conventions

Add new conventions as new top-level sections in this file. Keep examples and
"why" lines so they survive context resets.
