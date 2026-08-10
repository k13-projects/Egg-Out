import type { MetadataRoute } from "next";

/**
 * egg.k13projects.com is a private stakeholder preview, not the public site.
 *
 * Deliberately NOT `Disallow: /` for search engines: a blocked URL can still sit
 * in Google's index as a bare listing, because the crawler never fetches the page
 * and never sees the `noindex` we send in the meta tag + `X-Robots-Tag` header.
 * Search crawlers stay allowed so they read the noindex and drop the URL.
 *
 * AI/scraper crawlers get a hard block — there is no index to fall out of, so
 * `Disallow: /` is the right tool for them.
 *
 * When the real Egg & Out domain launches, this file moves to that project and
 * this one can flip to a blanket `Disallow: /` once Search Console confirms the
 * preview is fully de-indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "CCBot",
          "Google-Extended",
          "Applebot-Extended",
          "Bytespider",
          "Amazonbot",
          "Meta-ExternalAgent",
        ],
        disallow: "/",
      },
    ],
  };
}
