---
title: "Apollo.io Setup Guide for Signal-Led Cold Email"
description: "Configure Apollo.io for signal-based prospecting. Saved searches, filters, enrichment, and export workflows for targeted cold email campaigns."
publishDate: 2026-02-22
category: "outreach-tools-workflows"
contentType: "cluster"
pillarSlug: "outreach-tools-stack-guide"
sources:
  - title: "Apollo.io: Getting Started Documentation"
    url: "https://knowledge.apollo.io/hc/en-us/categories/360003109672-Getting-Started"
  - title: "Apollo.io: Advanced Search Filters Guide"
    url: "https://knowledge.apollo.io/hc/en-us/articles/4415501548557-Advanced-Search"
  - title: "SalesIntel: Apollo.io Review and Alternatives"
    url: "https://salesintel.io/blog/apollo-io-review/"
faqs:
  - question: "Is Apollo.io free for cold email prospecting?"
    answer: "Apollo's free plan includes 10,000 credits per year (about 833 per month), 250 emails per day, basic filters, and limited enrichment. For signal-led campaigns targeting 50-100 leads per campaign, the free tier is sufficient for early-stage prospecting."
  - question: "How do I set up buying signal alerts in Apollo?"
    answer: "Create a saved search with signal-based filters: 'Job Change' (past 30 days), 'Company Hiring' (specific roles), 'Technologies' (recent installs), and 'Funding' (specific rounds). Enable email notifications for new matches. Check saved searches weekly."
  - question: "How accurate is Apollo's email data?"
    answer: "Apollo claims 91% email accuracy, but always verify externally before sending. Use Hunter.io or ZeroBounce as a second verification step. Never trust any single data provider's accuracy claims — independent verification protects your sender reputation."
  - question: "Should I upgrade from Apollo's free plan?"
    answer: "Upgrade when you consistently use all 10,000 annual credits and have validated your ICP and signal strategy. The Basic plan (around £39/month) adds unlimited emails, advanced filters, and better enrichment. Don't upgrade before you have a proven campaign producing results."
relatedPosts:
  - "outreach-tools-stack-guide"
  - "b2b-lead-list-building"
---

Apollo.io is the best free data tool for B2B prospecting. The free tier gives you 10,000 credits per year — enough to build targeted lead lists for signal-led campaigns without spending a penny on data.

But most founders use Apollo wrong. They search by industry and company size, export thousands of contacts, and blast generic emails. That's not prospecting. That's spam with extra steps.

Here's how to configure Apollo for signal-based targeting.

## Account Setup

### Create Your Account

Sign up at Apollo.io with your work email. The free plan activates immediately with:

- 10,000 credits per year
- 250 email sends per day
- Basic search filters
- Limited data enrichment
- Chrome extension access

### Install the Chrome Extension

Apollo's Chrome extension adds a sidebar to LinkedIn profiles. When you find a prospect on LinkedIn, the extension shows their email, phone, and company data.

This is valuable for manual prospecting when you spot a signal on LinkedIn and want to immediately capture the contact.

## Building Signal-Based Saved Searches

Saved searches are Apollo's most powerful feature. They run continuously and alert you when new matches appear.

### Hiring Signal Search

Create a search that finds companies hiring for roles related to your offer:

1. Go to **People Search**
2. Set **Job Title** to your target titles (e.g., "VP Sales", "Head of Growth")
3. Set **Job Change** to "Changed job in last 30 days"
4. Add **Company Size** and **Industry** filters matching your ICP
5. Save the search and enable notifications

This finds decision-makers who recently started a new role — they have fresh mandates and budget to spend.

### Funding Signal Search

Find companies that recently raised capital:

1. Go to **Company Search**
2. Set **Funding Round** to your target stages (e.g., "Series A", "Series B")
3. Set **Funding Date** to "Last 90 days"
4. Add **Industry** and **Employee Count** filters
5. Save and switch to **People Search** within these companies to find your buyer titles

Funded companies have budget and growth mandates. The first 90 days post-funding is when they make purchasing decisions.

### Technology Signal Search

Find companies adopting or changing technology:

1. Go to **Company Search**
2. Use **Technologies** filter to find companies using (or recently adding) specific tools
3. For migration signals, look for companies with both the old and new technology listed
4. Save and pivot to people search for your target buyer titles

Technology changes indicate active projects and vendor evaluation windows.

## Export and Enrichment Workflow

Once your saved search identifies signal-matched prospects:

### Step 1: Review Matches Weekly

Check your saved searches every Monday. New matches appear automatically. Review each prospect to confirm the signal is genuine and current.

### Step 2: Select and Export

Select qualified prospects and export to CSV. Apollo includes:

- Full name
- Email address (verify externally)
- Job title and company
- LinkedIn profile URL
- Phone number (when available)

### Step 3: Verify Externally

Never trust Apollo's email verification alone. Run every exported list through Hunter.io or ZeroBounce before loading into your sending tool.

Remove any email that doesn't pass verification. A 95%+ verification rate is the minimum threshold.

### Step 4: Add Signal Context

Before importing into your sending tool, add a column to your CSV noting the specific signal for each prospect. This drives personalisation in your email sequences.

Example: "VP Sales hire, started 2 weeks ago" or "Series B, announced 6 weeks ago."

## Apollo Free Tier Limitations

The free plan has constraints worth knowing:

- **10,000 credits per year** — Each contact view or export costs one credit. Budget 800-900 contacts per month.
- **Basic filters only** — Advanced intent signals and company scoring require paid plans.
- **Limited enrichment** — Some fields (phone numbers, personal emails) are restricted on the free tier.
- **250 daily emails** — If using Apollo's built-in email, you're capped at 250 per day. Use a dedicated sending tool instead.

For signal-led campaigns targeting 50-100 leads per campaign, these limitations rarely matter.

## Connecting Apollo to Your Stack

### Apollo → Make.com → Your Sending Tool

Use Make.com to automate the flow from Apollo to your sending tool:

1. Apollo's API triggers when a saved search has new results
2. Make.com receives the contact data
3. Enrichment step adds any missing fields via Clay or Clearbit
4. Verification step checks the email via Hunter API
5. Qualified contacts are pushed to Instantly or Smartlead

This automation means new signal-matched prospects enter your campaign pipeline within hours of detection.

## Common Apollo Mistakes

- **Exporting without signal filters** — A list of "Marketing Managers at SaaS companies" is not targeting. Add at least one signal filter to every search.
- **Burning all credits on one export** — Don't export 5,000 contacts in one go. Export 50-100 per campaign, verify, and send. Small batches, high targeting.
- **Using Apollo's built-in email sending** — Apollo's sending features are basic. Use a dedicated cold email tool (Instantly, Smartlead) for better deliverability and sequence management.
- **Ignoring saved search alerts** — The power of saved searches is real-time signal detection. Check weekly. Stale signals produce stale results.

## Final Word

Apollo is the entry point to your [outreach tech stack](/blog/outreach-tools-stack-guide). Configure it once, build your signal-based saved searches, and let the tool do the prospecting work.

The best Apollo setup finds 50-100 signal-matched prospects per month. That's enough for two targeted campaigns — and two targeted campaigns built on real signals will outperform 100 generic blasts every time.
