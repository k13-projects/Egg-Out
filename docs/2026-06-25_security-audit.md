# Security Audit — EGG & OUT

> K13 house security-audit working record. Pairs with the branded stakeholder report
> (`2026-06-25_security-audit.html`) and the legal-compliance report.
>
> **Status:** `in-progress` — low attack surface, one real hardening gap (headers) before launch.

- **Project:** EGG & OUT (egg.k13projects.com)
- **What it serves:** One-page marketing site for an all-day egg restaurant in San Clemente (Tiger Hospitality Group). No accounts, no e-commerce on-site.
- **Stack:** Next.js (App Router) + Tailwind v4 + framer-motion + Lenis, deployed on Vercel. No backend, database, or auth.
- **Reviewed by:** K13 Software Studio
- **Date:** 2026-06-25
- **Overall posture:** Adequate (pre-launch) — very low attack surface; close the security-headers gap and clear dep advisories before go-live.

---

## 1. Transport & headers
- [x] HTTPS enforced — Vercel terminates TLS and redirects http→https by default
- [x] HSTS — sent by Vercel's default edge config
- [ ] **Content-Security-Policy — NOT set** (no config). Add one (script/style/img/font/connect) — allow `'self'`, the Vercel domain, and any ordering/embed origins once chosen.
- [ ] **X-Frame-Options / frame-ancestors — NOT set.** Add `X-Frame-Options: DENY` (or CSP `frame-ancestors 'none'`) for clickjacking.
- [ ] **X-Content-Type-Options: nosniff — NOT set.** Add it.
- [ ] **Referrer-Policy / Permissions-Policy — NOT set.** Add `strict-origin-when-cross-origin` + a locked-down Permissions-Policy.

> `next.config.ts` is empty (no `headers()`); there is no `vercel.json`. Configure headers in one of those.

## 2. Secrets & config
- [x] No API keys / tokens in the client bundle — there is no third-party SDK or key in use
- [x] `.env*` is gitignored; no env files committed
- [x] No secrets in git history (none introduced — static marketing build)
- [x] No third-party keys to scope yet (no Maps/Sheets/Instagram/Stripe wired)

## 3. Auth & access
- [x] N/A — no auth, no Supabase, no user accounts, no service-role keys anywhere

## 4. Input & forms
- [~] Catering form collects name / phone / email / party size / date / time / occasion / service / notes, then opens a `mailto:` compose — **no server intake, no storage, no injection surface**. Destination address is a placeholder (`hello@eggandout.com`, TBC).
- [ ] Spam protection — N/A while mailto-only; **revisit if** the form is ever wired to a server/Formspree endpoint (add honeypot / rate-limit + a verified delivery endpoint).
- [x] No SQL/NoSQL — no database
- [x] No file uploads

## 5. Dependencies & build
- [ ] **`npm audit`: 2 moderate** — `postcss <8.5.10` (CSS-stringify XSS advisory) pulled via `next`. Low practical risk on a render-only marketing site; the fix is gated behind a Next major bump, so resolve deliberately at a safe version rather than `--force`.
- [x] No unmaintained / typo-squat packages observed
- [x] Lockfile committed; reproducible build

## 6. Data & privacy
- [x] No analytics, cookies, or tracking — nothing set client-side
- [~] PII: only the catering form's fields, and only inside the user's own email client (never received server-side here). Still needs a **Privacy Policy** (see legal report) since fields are collected.
- [x] No app state to back up (no storage)

## 7. Deployment & ops
- [x] Vercel preview vs production separated; this is staging pre-launch
- [x] No stack traces leaked (static render; framework error pages)
- [ ] Custom 404 / 500 pages — not yet added (P5)
- [x] No secret logging (nothing logged)

---

## Findings

| # | Severity | Area | Finding | Recommendation | Status |
|---|----------|------|---------|----------------|--------|
| 1 | Medium | Headers | No CSP, X-Frame-Options, nosniff, Referrer-Policy, or Permissions-Policy | Add a header suite via `next.config` `headers()` or `vercel.json` before launch | open |
| 2 | Low | Deps | 2 moderate npm advisories (postcss via next) | Bump to a safe version (avoid `--force` major); re-run `npm audit` | open |
| 3 | Low | Forms | Catering destination email is a placeholder; if ever server-wired, no spam/rate-limit | Confirm real address; add honeypot + verified endpoint only if moving off mailto | open |
| 4 | Low | Ops | No custom 404/500 pages | Add branded error pages (P5) | open |
| 5 | Info | Privacy | No Privacy Policy though form collects PII | Covered in the legal report — publish before launch | open |

## Remaining risks / watch-list
- **Headers** are the one item that meaningfully changes posture — quick to add, do before go-live.
- **Re-audit at launch:** once the ordering channel and any backend/embed are chosen, re-check CSP allow-list, third-party key exposure, and form delivery.

## Disclaimer
Prepared for informational purposes by K13 Software Studio as of 2026-06-25. This is an engineering security review of a pre-launch marketing site, not a formal penetration test or compliance certification.
