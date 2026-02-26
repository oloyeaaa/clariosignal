---
title: "How to Build a Cold Email Campaign That Gets Replies"
description: "A step-by-step guide to building cold email campaigns that achieve 18% response rates. Infrastructure, targeting, and sequences."
publishDate: 2026-01-22
category: "cold-email-strategy"
contentType: "pillar"
sources:
  - title: "Woodpecker: Cold Email Deliverability Guide"
    url: "https://woodpecker.co/blog/cold-email-deliverability/"
  - title: "Lemlist: Cold Email Statistics 2025"
    url: "https://www.lemlist.com/blog/cold-email-statistics"
  - title: "Google: Email Sender Guidelines"
    url: "https://support.google.com/mail/answer/81126"
faqs:
  - question: "What is a good cold email response rate?"
    answer: "Traditional cold email averages 3.4% response rates. Signal-Led campaigns targeting prospects with active buying signals achieve 18% response rates—a 5x improvement."
  - question: "How many emails should I send per day?"
    answer: "Quality over quantity. Signal-Led GTM recommends 20-30 highly targeted emails per day per sending domain, rather than hundreds of generic messages."
  - question: "What makes a cold email get replies?"
    answer: "Three things: targeting (right person, right time), relevance (their problem, not your pitch), and proof (evidence you can solve it). Most failures are targeting problems, not copy problems."
  - question: "Do I need multiple sending domains?"
    answer: "Yes. Use 3-5 secondary domains with proper DNS records (SPF, DKIM, DMARC) and warm them for 2-3 weeks before sending. Never send cold email from your primary domain."
relatedPosts:
  - "defining-your-icp"
  - "b2b-lead-list-building"
---

Most cold email campaigns fail. Not because the copy is bad. Not because the tool is wrong.

They fail because the infrastructure doesn't exist.

A cold email campaign is not a sequence of messages. It's a system. And systems require infrastructure before they produce output.

## What Most People Get Wrong

The typical approach: buy a list, write a template, hit send. Hope for replies.

This is the spray-and-pray model. It burns domains, damages sender reputation, and produces response rates below 3%.

The Signal-Led approach inverts this. Infrastructure first. Targeting second. Copy last.

## How to Build a Campaign That Works

### Step 1: Set Up Sending Infrastructure

Before writing a single email, build the foundation.

**Domain setup:**
- Purchase 3-5 secondary domains (variations of your brand)
- Configure SPF, DKIM, and DMARC records for each
- Point MX records to your sending tool
- Warm each domain for 14-21 days before live sending

**Sending tool configuration:**
- Set daily sending limits to 20-30 per domain
- Stagger send times across business hours
- Enable automatic follow-up scheduling
- Configure reply detection and auto-pause

This is not optional. Skip infrastructure and your campaign dies in spam folders.

### Step 2: Define Your Signal-Based Target

Don't build a list. Build a signal monitor.

A signal is a verifiable event that indicates buying intent:

- **Hiring signal** — Company posts VP Sales role → needs pipeline infrastructure
- **Funding signal** — Series B announcement → growth mandate, budget unlocked
- **Tech signal** — Migrating CRM → needs implementation support
- **Org signal** — New CRO appointment → 90-day mandate to show results

Set up saved searches in Apollo or LinkedIn Sales Navigator. Configure Clay tables to enrich and filter. Route qualified signals to your sending tool via Make.com.

The result: every email you send goes to someone with an active problem you can solve.

### Step 3: Write Problem-First Sequences

Your email is not about you. It's about their problem.

**Email 1 — The Diagnostic:**
Name their specific problem. Reference the signal. No pitch.

*"Noticed you're hiring a VP Sales. Most companies at your stage struggle to build pipeline infrastructure fast enough for a new sales leader to succeed."*

**Email 2 — The Framework:**
Share your methodology. Prove you understand the problem at a structural level.

**Email 3 — The Proof:**
Case study or specific result. Evidence, not claims.

**Email 4 — The Exit:**
Clean break. No guilt. Professional close.

Four emails. That's it. No seven-email sequences. No "just checking in."

### Step 4: Measure What Matters

Track three metrics:

1. **Open rate** — Tests deliverability and subject lines. Target: 50%+
2. **Response rate** — Tests targeting and relevance. Target: 15-20%
3. **Meeting rate** — Tests offer and conversion. Target: 5-8% of sends

If open rates are low, it's an infrastructure problem. If response rates are low, it's a targeting problem. If meeting rates are low, it's an offer problem.

Diagnose the right layer before changing copy.

## Campaign Mistakes to Avoid

- **Sending from your primary domain** — One spam complaint and your business email reputation is damaged. Always use secondary domains.
- **No warmup period** — New domains need 2-3 weeks of warmup before cold sending. Skip this and you're sending to spam.
- **Generic targeting** — "Marketing managers at SaaS companies" is not targeting. That's millions of people. Add a signal filter.
- **Copy-first thinking** — Founders spend hours on subject lines while sending to people who don't have the problem. Fix targeting first.

## Final Word

A cold email campaign is a machine. Infrastructure is the engine. Signals are the fuel. Copy is the interface.

Build in that order.

If you want to understand the full system, read about [The Signal Stack](/framework) framework. It maps every component you need.
