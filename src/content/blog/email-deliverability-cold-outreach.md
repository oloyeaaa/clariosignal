---
title: "Email Deliverability for Cold Outreach: The Complete Setup"
description: "Fix your cold email deliverability. DNS records, domain warmup, inbox placement, and monitoring — the infrastructure that keeps you out of spam."
publishDate: 2026-02-08
category: "cold-email-strategy"
contentType: "cluster"
pillarSlug: "cold-email-campaign-guide"
sources:
  - title: "Google: Email Sender Guidelines for Bulk Senders"
    url: "https://support.google.com/mail/answer/81126"
  - title: "DMARC.org: Overview of DMARC Protocol"
    url: "https://dmarc.org/overview/"
  - title: "Mailtrap: Email Deliverability Guide 2025"
    url: "https://mailtrap.io/blog/email-deliverability/"
faqs:
  - question: "What DNS records do I need for cold email?"
    answer: "You need three records: SPF (authorises your sending server), DKIM (cryptographically signs your emails), and DMARC (tells receiving servers what to do with unauthenticated mail). All three are mandatory for inbox placement."
  - question: "How long should I warm up a new domain?"
    answer: "Warm new sending domains for 14-21 days before sending cold emails. Start with 5-10 personal emails per day, gradually increasing volume. Never skip warmup — new domains sending cold email immediately land in spam."
  - question: "Why are my cold emails going to spam?"
    answer: "Common causes: missing or misconfigured DNS records (SPF, DKIM, DMARC), no domain warmup, sending too many emails per day, spammy content (too many links, all caps, trigger words), or sending to invalid email addresses that bounce."
  - question: "How many cold emails can I send per day?"
    answer: "Send 20-30 emails per domain per day for cold outreach. Spread sends across business hours. Using 3-5 domains gives you 60-150 daily sends — more than enough for signal-led campaigns targeting 50-100 prospects."
relatedPosts:
  - "cold-email-campaign-guide"
  - "b2b-lead-list-building"
---

Your cold email campaign has a deliverability problem before it has a targeting problem.

If your emails land in spam, nothing else matters. Not the copy. Not the offer. Not the signal.

Deliverability is infrastructure. Build it once, maintain it weekly, and every campaign benefits.

## Why Deliverability Comes First

Most founders skip straight to writing sequences. They draft three emails, load a list, and hit send from their primary business domain.

Within a week, their domain reputation tanks. Business emails start landing in spam. Client replies disappear into the void.

This is entirely preventable. Deliverability infrastructure takes one afternoon to set up and protects every campaign you run.

## The Three DNS Records You Need

Every sending domain needs three records configured correctly. No exceptions.

### SPF (Sender Policy Framework)

SPF tells receiving servers which IP addresses are authorised to send email on your behalf.

Without SPF, any server could send email pretending to be you. Gmail and Outlook check SPF records on every incoming message.

Add a TXT record to your domain's DNS:

```
v=spf1 include:your-sending-tool.com ~all
```

Replace the include value with your sending tool's SPF record. Most tools provide this in their setup documentation.

### DKIM (DomainKeys Identified Mail)

DKIM adds a cryptographic signature to every email you send. The receiving server verifies this signature against a public key in your DNS.

This proves the email wasn't tampered with in transit and that it genuinely came from your domain.

Your sending tool will generate a DKIM key pair. Add the public key as a TXT or CNAME record in your DNS.

### DMARC (Domain-based Message Authentication)

DMARC ties SPF and DKIM together. It tells receiving servers what to do when authentication fails: nothing, quarantine, or reject.

Start with a monitoring policy:

```
v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
```

After two weeks of monitoring with no issues, move to quarantine, then reject. This progression protects your domain while giving you visibility into authentication failures.

## Domain Warmup Protocol

New domains have zero reputation. Sending cold email from a fresh domain is like a new driver asking for insurance — the system doesn't trust you yet.

### Week 1: Personal Sending

Send 5-10 genuine emails per day. Reply to newsletters. Email colleagues. Join mailing lists. The goal is to establish that real humans use this domain for real communication.

### Week 2: Gradual Increase

Increase to 15-20 emails per day. Mix personal emails with low-volume outreach to warm contacts — people who know you or have interacted with your brand.

### Week 3: Cold Outreach Begins

Start cold sending at 10-15 emails per day. Gradually increase to your target of 20-30 per day by end of week. Monitor bounce rates and spam complaints daily.

### Ongoing Maintenance

Keep personal email activity on all sending domains. A domain that only sends cold outreach looks suspicious. Maintain at least 20% personal email volume.

## Monitoring Your Sender Reputation

Deliverability isn't set-and-forget. Monitor these metrics weekly:

- **Bounce rate** — Keep below 3%. Higher bounces damage your domain reputation. Always verify email addresses before sending.
- **Spam complaint rate** — Keep below 0.1%. Google's threshold for bulk senders is 0.3% — stay well below it.
- **Open rate** — Sudden drops indicate deliverability issues. If open rates fall below 30%, investigate immediately.
- **Inbox placement** — Use tools like [GlockApps](https://glockapps.com/) or [Mail Tester](https://www.mail-tester.com/) to check where your emails land.

## Common Deliverability Mistakes

- **Using your primary domain for cold email** — Never risk your main business domain. Purchase 3-5 secondary domains and configure each independently.
- **Skipping warmup** — Even one day of premature cold sending can damage a new domain's reputation for months.
- **Sending to unverified lists** — Bounced emails are the fastest way to destroy sender reputation. Verify every address before loading into your sending tool.
- **Ignoring DMARC reports** — DMARC sends you reports about authentication failures. Read them. They reveal when something is misconfigured or when someone is spoofing your domain.

## Final Word

Deliverability is the foundation your entire cold email operation sits on. Get the DNS records right. Warm your domains properly. Monitor your reputation weekly.

Do this once, and every [campaign you build](/blog/cold-email-campaign-guide) starts from a position of strength instead of fighting its way out of spam folders.
