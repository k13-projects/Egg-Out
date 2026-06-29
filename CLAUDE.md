# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This repository is at the **pre-build stage**. There is no application code, build system, or tests yet — only brand assets and a website brief. The intended deliverable is the **EGG & OUT** marketing website (an all-day, egg-forward restaurant by Tiger Hospitality Group, located in San Clemente). When asked to "build the site," scaffold it from scratch using the brand identity and content brief below.

## Working conventions

Read `@CONVENTIONS.md` — it is the source of truth for how we work here (branch naming, commit format, the Hail Mary ship command). In short:

- **Project shortcode:** `ego` (branch/port only; the brand is always "Egg & Out" / "E&O").
- **Branches:** `ego_<monDD>_v<N>` (e.g. `ego_jun22_v1`); every `ego_*` branch is kept on origin. Create the next one with `scripts/new-branch.sh`.
- **Commits:** Hail Mary grouped-bullet — no-emoji imperative subject ≤72 chars → plain overview → `---` + technical bullets grouped by file/area → `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- **Hail Mary:** `hail mary` / `hm` → new branch + documented commit + push; `hm-1` skips the branch; `hm++` also opens + merges a PR (`gh pr merge --merge`, keep branches). Helper: `scripts/hm.sh`.
- **Run locally:** dev port **9149** (pin via `next dev -p 9149`).

## Source materials

- `EGG & OUT Assets/EGG & OUT STRUCTURE.docx` — the website content brief: page sections, copy, navigation, and forms. **Read this first** before building any page; it is the source of truth for site structure and microcopy.
- `EGG & OUT Assets/Fonts and colors- Brand Identity.pdf` — the brand standards (typography + color, summarized below).
- `EGG & OUT Assets/Fonts/` — `capo-light.otf`, `capo-medium.otf`, `capo-bold.otf` (the actual font files to self-host).
- `EGG & OUT Assets/Logo/`, `Patterns/`, `Graphic elements/` — PNG logos, background patterns, and decorative elements (checkerboard, circles, arrows, icon).

## Brand identity (from the standards PDF)

**Typeface — Capo** is the primary typeface, used everywhere. Working weights: Light, Medium, Bold (these are the only `.otf` files present). Notes from the standards:
- Capo Light suits headlines and contrasts well with the logotype.
- Capo Black exists in the standards but is **not bundled** and should be used sparingly — do not assume it is available.
- The Capo ampersand is for editorial/headline copy only; use the **monogram** asset for identity marks (the ampersand resembles, but is not, the brand mark).

**Color palette** — drawn from egg yolks; orange-forward. **Farmer Yolk is the primary lead color.**

| Role | Name | HEX |
|------|------|-----|
| Primary orange (lead) | Farmer Yolk | `#f26a22` |
| Primary orange | Free Range Yolk | `#ec8b00` |
| Primary orange | Broken Yolk | `#f2aa00` |
| Secondary yellow | Scrambled Egg | `#F7E859` |
| Secondary yellow | Sunny Up | `#ffcd00` |
| Neutral | Off White | `#f0ebd7` |
| Neutral | Kraft | `#b59d7b` |
| Neutral | Grill (dark) | `#212121` |
| Optional | Red | `#c80f2e` |

Off White / Kraft / Grill Black are the neutrals. Green Tea and Blue Jean are optional accents (defined by PMS only in the source — derive HEX if needed). PMS/RGB values vary by medium; the HEX values above are for digital.

## Website structure (from the brief)

Top nav: **About us · Our menu · Locations · Catering · Contact**, plus an **"Order now"** button. Sections to build:
- **Hero** — tagline "Your Anytime Egg Spot" / "NOW & LATER, ALL-DAY EGGS" with intro paragraph.
- **Menu** — "See Menu" (links to a menu PDF) and "Order online" (opens an ordering pop-up).
- **Catering** — "Order catering" button opening a custom-order form (Name, phone, email, number of people, date, time, occasion, catering type [pickup/delivery], description).
- **Locations** — San Clemente, Miramar Food Hall, 1720 North El Camino Real, daily 11:00 AM–9:00 PM.
- **Contact** / social follow.
- Scroll-triggered animation referenced against eggslut.com as the visual inspiration.

Items marked "To confirm" in the brief are unresolved — flag them rather than inventing details.

## Conventions

- No stack has been chosen yet. If the brief or user hasn't specified one, ask before scaffolding.
- Self-host the bundled Capo `.otf` fonts via `@font-face`; do not substitute a Google Font.
- Use the asset PNGs from `EGG & OUT Assets/` rather than recreating logos/patterns.


---

<!--K13_BROADCAST_START · managed by War Room — do not hand-edit-->
## 📡 War Room Broadcasts (org-wide rules)
> Synced from the K13 War Room. Each entry is a house rule that applies to every K13 project. Managed automatically — edit the rule in the War Room, not here.

<!--bc:2026-06-26-imagegen-global-->
### 2026-06-26 · Image generation — free, via /imagegen (Gemini Nano Banana) + central pool
**Need an image? Generate it free with `/imagegen`.** Run `/imagegen <subject, style, aspect>` (or read `/Users/k13/Desktop/PROJECTS/K13-WarRoom/starter-kit/IMAGEGEN.md` and follow it). Engine: GStack Browser → Google Gemini (Nano Banana), free / no credits; fallback Bing Image Creator. The agent never types your password — it asks you to log in if prompted.

**Central pool, zero duplicates.** Every generated image lands first in the shared pool `/Users/k13/Desktop/PROJECTS/generatedAssets/` with a raw name (`gen_<proj>_<topic>_<n>.png`) and is **never committed**. On your approval the used image is **moved** (not copied) into this project's correct folder with a proper name; unused variants stay in the pool. Only the final relocated, renamed asset enters the repo — under this project's own git rules (branch → PR → merge).

<!--K13_BROADCAST_END-->
