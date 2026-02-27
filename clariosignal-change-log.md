# ClarioSignal — Website Rewrite Change Log

All changes made during the website repositioning are logged here.

---

## 2026-02-27 — Post-Rewrite Verification Fixes

### SEO.astro — Brand name spacing
- CHANGE TYPE: Copy
- BEFORE: `fullTitle = \`${title} — ClarioSignal\`` / `og:site_name content="ClarioSignal"`
- AFTER: `fullTitle = \`${title} — Clario Signal\`` / `og:site_name content="Clario Signal"`
- REASON: Brand alignment — "Clario Signal" is two words
- SKILL REFERENCE: SKILL-01

### AuthorBox.astro — Bio text
- CHANGE TYPE: Copy
- BEFORE: "Founder of ClarioSignal. Building clarity-first lead generation systems from the ground up. Sharing what works (and what doesn't) in outbound."
- AFTER: "Founder of Clario Signal. Building AI systems for local businesses in Kent. Sharing what works and what doesn't."
- REASON: Brand alignment — remove lead generation and outbound references
- SKILL REFERENCE: SKILL-01

### blog/category/[category].astro — Meta description
- CHANGE TYPE: Meta description
- BEFORE: `Browse all ClarioSignal articles about ${label}. Guides, frameworks, and insights for B2B lead generation.`
- AFTER: `Browse all Clario Signal articles about ${label}. Practical guides for local business owners.`
- REASON: Brand alignment — remove B2B lead generation
- SKILL REFERENCE: SKILL-01

### FLAGGED — SchemaOrg.astro (NOT changed)
- SchemaOrg.astro contains "ClarioSignal" (one word) and "Clarity-first B2B lead generation systems and cold email frameworks"
- Per SKILL-03: structured data / schema markup is on the absolute no-touch list
- Recommendation: Update manually outside this rewrite scope

---

## 2026-02-27 — Blog Meta Check + Blog Index

### Blog posts — Meta check (SKILL-03)
- All 8 blog posts checked for banned words in meta title and description
- Result: All clean. No banned words found. No changes needed.
- Per SKILL-03: B2B keywords in existing posts are acceptable. Not forced to local business keywords.
- SKILL REFERENCE: SKILL-03

### blog/index.astro — Meta description and subheadline
- CHANGE TYPE: Meta description / Copy
- BEFORE: description "Insights on B2B lead generation, cold email strategy..." / Sub "Frameworks, guides, and build logs for B2B lead generation."
- AFTER: description "Practical guides on using AI in your local business..." / Sub "Practical guides on using AI in your business. No jargon."
- REASON: Brand alignment — remove B2B language from page-level copy
- SKILL REFERENCE: SKILL-01

---

## 2026-02-27 — Contact Page Rewrite

### contact.astro — Copy and Meta
- CHANGE TYPE: Copy / Meta title / Meta description
- BEFORE: title "Contact" / description "...lead generation, cold email strategy, or the Signal Stack framework." / H1 "Get in Touch" / Sub about lead gen and cold email / "What to Include" section about lead gen setup
- AFTER: title "Book an AI Audit | Clario Signal — Kent" / description "Book a 90-minute AI Audit with Clario Signal..." / H1 "Book an AI Audit" / Sub about 90-minute AI Audit £297 / "What to expect" + "Who this is for" sections
- REASON: Brand alignment — position contact page around AI Audit booking, remove all B2B references
- SKILL REFERENCE: SKILL-01, SKILL-02

---

## 2026-02-27 — About Page Rewrite

### about.astro — Complete Rewrite
- CHANGE TYPE: Copy / Meta title / Meta description
- BEFORE: title "About ClarioSignal" / description "...B2B lead generation through signal-led outreach systems." / H1 "About ClarioSignal" / Mission about B2B founders and pipeline / Founder bio about outbound / "What We Cover": Lead Gen, Cold Email, ICP, Outreach / CTA "Follow the Build"
- AFTER: title "About Clario Signal — AI Infrastructure for Local Business Kent" / description "Clario Signal is a Kent-based AI infrastructure consultancy..." / H1 "Built for local businesses in Kent." / Mission about local business AI / Founder bio about Kent AI consultancy / "Who we work with": Trades, Hospitality, Professional Services, Health & Beauty / CTA "Book an AI Audit"
- REASON: Complete brand repositioning — B2B documentation project to Kent AI consultancy
- SKILL REFERENCE: SKILL-01, SKILL-02, 02-ICP-AND-TARGET-AUDIENCE.md

---

## 2026-02-27 — Framework Page Rewrite

### framework.astro — Complete Rewrite
- CHANGE TYPE: Copy / Meta title / Meta description
- BEFORE: "The Signal Stack" — 3 stages (Infrastructure, Authority, Activation), Signal-Led GTM content, B2B outbound metrics (18%/3.4%/5x), FAQ about Signal-Led GTM, CTA "Ready to Build Your Signal Stack?"
- AFTER: "The Clarity Loop" — 3 stages (Diagnose, Build, Prove), local business AI content, ROI examples (restaurant £20,800/yr saving, plumber £60,000/yr revenue), FAQ about AI Audit and system types, CTA "Start with a diagnosis."
- Meta title: "The Signal Stack Framework" → "How It Works — The Clarity Loop"
- Meta description: Updated to Clarity Loop + Kent + measurable results
- REASON: Complete brand repositioning — Signal Stack replaced with Clarity Loop, B2B replaced with local business
- SKILL REFERENCE: SKILL-01, SKILL-02, 01-CLARITY-LOOP-FRAMEWORK.md, 03-SERVICES-AND-OFFER-STACK.md

---

## 2026-02-27 — Homepage Rewrite

### constants.ts — SITE config
- CHANGE TYPE: Copy
- BEFORE: `name: 'ClarioSignal'` / `title: 'ClarioSignal | B2B Lead Generation Systems'` / `description: 'Build cold email systems that book meetings. Clarity-first B2B lead generation.'`
- AFTER: `name: 'Clario Signal'` / `title: 'AI for Local Businesses in Kent | Clario Signal'` / `description: 'AI infrastructure for local businesses in Kent and the South East. Every system makes you money or saves you time. Proven within 30 days.'`
- REASON: Brand alignment — remove B2B/cold email, add local Kent positioning
- SKILL REFERENCE: SKILL-01, SKILL-02

### constants.ts — NAV_LINKS
- CHANGE TYPE: Navigation
- BEFORE: `{ href: '/framework', label: 'Framework' }`
- AFTER: `{ href: '/framework', label: 'How It Works' }`
- REASON: Brand alignment — plain English for local business audience
- SKILL REFERENCE: SKILL-01

### Hero.astro
- CHANGE TYPE: Copy
- BEFORE: H1 "Here's Exactly How We're Building Cold Email Systems That Book Meetings" / Sub "And how you can apply the same framework today." / CTAs "See the Framework" + "Read the Blog"
- AFTER: H1 "AI systems for local businesses in Kent." / Sub "We build automation that makes you money or saves you time. Proven within 30 days." / CTAs "Book your free AI Audit call" + "See how it works"
- REASON: Brand alignment — remove cold email, add Kent geography, specific CTAs
- SKILL REFERENCE: SKILL-01

### index.astro — Meta
- CHANGE TYPE: Meta title / Meta description
- BEFORE: title "B2B Lead Generation Systems & Cold Email Frameworks" / description "Build cold email systems that book meetings..."
- AFTER: title "AI for Local Businesses in Kent" / description "Clario Signal builds AI systems for local businesses in Kent and the South East..."
- REASON: Keyword update per SKILL-02 page assignments
- SKILL REFERENCE: SKILL-02

### index.astro — Problem Section
- CHANGE TYPE: Copy
- BEFORE: H2 "Why Most Cold Email Fails" + 4 paragraphs about volume-based email
- AFTER: H2 "Most local businesses are losing time and money to problems that have already been solved." + 4 pain point cards (after-hours enquiries, no-show appointments, manual admin, cold leads)
- REASON: Brand alignment — replace cold email with local business pain points
- SKILL REFERENCE: SKILL-01

### Framework.astro (homepage component)
- CHANGE TYPE: Copy
- BEFORE: H2 "The Signal Stack" / Stages: Infrastructure, Authority, Activation / CTA "Explore the Full Framework"
- AFTER: H2 "The Clarity Loop" / Sub "Three stages. Every engagement." / Stages: Diagnose, Build, Prove / CTA "Start with an AI Audit"
- REASON: Brand alignment — replace Signal Stack with Clarity Loop
- SKILL REFERENCE: SKILL-01

### LatestPosts.astro
- CHANGE TYPE: Copy
- BEFORE: H2 "Latest Posts" / Sub "Insights on building B2B lead generation systems."
- AFTER: H2 "Guides for local business owners" / Sub "Practical guides on using AI in your business. No jargon."
- REASON: Brand alignment — remove B2B language
- SKILL REFERENCE: SKILL-01

### CTA.astro
- CHANGE TYPE: Copy / CTA
- BEFORE: H2 "Ready to Build Your Signal Stack?" / Body about 1,000 emails / CTAs "Get Started" + "Learn the Framework"
- AFTER: H2 "Find out where AI can make a difference in your business." / Body about AI Audit £297 / CTAs "Book an AI Audit" + "See how it works"
- REASON: Brand alignment — replace Signal Stack CTA with AI Audit
- SKILL REFERENCE: SKILL-01

### Nav.astro
- CHANGE TYPE: Copy / CTA
- BEFORE: Logo "ClarioSignal" / CTA buttons "Get Started"
- AFTER: Logo "Clario Signal" / CTA buttons "Book an AI Audit"
- REASON: Brand name spacing + specific CTA
- SKILL REFERENCE: SKILL-01

---

