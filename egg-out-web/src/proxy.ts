import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Password gate for the egg.k13projects.com stakeholder preview.
 *
 * Vercel's own Password Protection lives behind the $150/mo Advanced Deployment
 * Protection add-on, so this does the same job with HTTP Basic Auth. Delete this
 * file (and the env var) when the real Egg & Out domain goes public.
 *
 * The password comes from PREVIEW_PASSWORD and is never committed. When that var
 * is unset the gate is OFF — local dev and any unconfigured environment behave
 * exactly as before, rather than locking everyone out of a preview nobody can
 * un-break without a redeploy.
 *
 * The username is ignored; only the password is checked. Stakeholders can leave
 * the username field blank or type anything.
 *
 * Note the noindex header on the 401 itself: the challenge response is the only
 * thing a crawler can see once the gate is on, so it has to carry the signal
 * that tells Google to drop the URL. See src/app/robots.ts for the wider policy.
 */

const REALM = "Egg & Out preview";
const NOINDEX = "noindex, nofollow, noarchive, nosnippet, noimageindex";

function equals(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function proxy(request: NextRequest) {
  const password = process.env.PREVIEW_PASSWORD;
  if (!password) return NextResponse.next();

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    let decoded = "";
    try {
      decoded = atob(header.slice(6));
    } catch {
      decoded = "";
    }
    if (decoded.includes(":")) {
      const supplied = decoded.slice(decoded.indexOf(":") + 1);
      if (equals(supplied, password)) return NextResponse.next();
    }
  }

  return new Response("This preview is private.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
      "X-Robots-Tag": NOINDEX,
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  // Everything is gated except robots.txt, which carries no content and stays
  // readable so crawlers can still see the policy.
  matcher: ["/((?!robots.txt).*)"],
};
