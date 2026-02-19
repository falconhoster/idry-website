# iDry New Website - Build Instructions

## Business Overview

- **Company:** iDry
- **Industry:** Disaster restoration (flood, water damage, fire, mould, meth contamination)
- **Location:** Auckland, New Zealand
- **Service model:** 24/7 emergency response
- **Target market:** Auckland homeowners, property managers, insurance claimants

---

## Core Services (each needs its own dedicated service page)

1. **Flood Restoration** (primary service)
2. **Water Damage Restoration**
3. **Fire Restoration**
4. **Mould Remediation**
5. **Meth Contamination Cleanup**
6. **Insurance Restoration / Claims Assistance**

---

## Site Architecture

### Required Pages

#### Landing Pages (4 dedicated, conversion-focused)

1. **Flood Restoration Auckland** - primary landing page; mobile-first; fast load; strong CTA; trust badges; FAQs
2. **Emergency Water Damage** - tailored water damage copy; same CTA + trust structure as LP1; FAQs
3. **24/7 Flood Response** - urgency-focused; response time promise; social proof; strong CTA
4. **Insurance Restoration / Claims** - insurance-focused; documentation process; claims assistance CTA

#### Service Pages (optimised for Auckland intent)

- Flood Restoration (rewritten with Auckland keywords, suburbs, FAQs, internal links)
- Fire Restoration (same optimisation pattern)
- Mould Remediation (same optimisation pattern)
- Meth Contamination (same optimisation pattern)
- Each page must include: optimised title/meta/H1, FAQ block, suburb mentions, internal links, CTA

#### Local SEO Pages

- **"Areas We Serve" hub page** - lists all regions/suburbs; links to individual suburb pages and service pages
- **50+ individual suburb pages** - each with:
  - Unique introductory content (no duplication between suburbs)
  - Embedded Google Map
  - FAQ section specific to that suburb
  - NAP (Name, Address, Phone) block
  - Internal links to relevant service pages
  - Indexing requested via GSC after publish
- **Suburb page template system** - programmatic template with content rules to scale efficiently

#### Content Pages

- **Blog** - 2 posts/week cadence; high-intent topics; each post includes:
  - FAQs
  - Internal links to service + landing pages
  - CTA block
  - Auckland-focused keywords
- **Case Studies** (minimum 2 initial) - format: Problem > Process > Outcome; before/after photos; linked to related service pages; used as proof on landing pages
- **Long-form guide: "Auckland Flood Restoration Guide"** - 3,000+ words; step-by-step; FAQ section; internal links; downloadable checklist
- **Video content** - job walkthrough videos embedded on landing/service pages; uploaded to YouTube; video schema markup

#### Trust/Authority Pages

- **About page** - enhanced with E-E-A-T signals (see below)

---

## Technical Requirements

### Performance (Core Web Vitals)

- Page load target: **under 3 seconds on mobile**
- All images compressed to **WebP format**
- Implement **browser caching**
- **Lazy load** all images and non-critical assets
- Minimise JavaScript and CSS; remove unused scripts
- Pass Google Lighthouse mobile test
- Record and track CWV improvements

### Mobile-First Design

- Every page must be designed mobile-first
- Responsive across all breakpoints
- Touch-friendly CTAs and navigation

### Tracking & Analytics (built into the site)

- **Google Ads conversion tracking** for:
  - Calls from ads
  - Calls from website (click-to-call)
  - Form submissions
- **GA4 event tracking** for:
  - Click-to-call events
  - Form submission events
  - All events verifiable in GA4 DebugView
- **Call tracking** implementation:
  - Dynamic number insertion (number swaps) on landing pages
  - Call attribution to campaigns
  - Call duration capture
- All tracking must fire correctly and be verified with test conversions before launch

---

## SEO Requirements

### On-Page SEO (every page)

- Optimised `<title>` tag with primary keyword + "Auckland"
- Optimised `<meta description>` with CTA language
- Single `<H1>` per page with primary keyword
- Proper heading hierarchy (H1 > H2 > H3)
- Primary + secondary keywords naturally placed in body copy
- FAQ block on every service page and landing page
- Auckland suburb mentions where relevant
- Internal linking between related service pages, suburb pages, landing pages, and blog posts

### Schema / Structured Data

- **FAQPage schema** on all service pages and main landing page (validate with Rich Results Test, zero errors)
- **LocalBusiness schema** with NAP details
- **VideoObject schema** on pages with embedded videos
- All schema must pass Google Rich Results Test

### E-E-A-T Trust Signals (sitewide)

- Certifications and accreditations displayed
- Documented restoration process (step-by-step)
- Team bios with credentials/qualifications
- Customer reviews/testimonials prominently placed
- Enhanced About page with company history, expertise, experience
- Trust blocks visible on all key pages (landing pages, service pages)

### Local SEO

- **NAP consistency** - exact same Name, Address, Phone across entire site and all external listings
- **Google Business Profile** alignment:
  - Categories, services, service areas must match website content
  - Q&A section populated
  - Description matches website messaging

---

## Conversion Rate Optimisation (CRO)

### Must-Have Elements

- **Sticky mobile call bar** - fixed to bottom of screen on mobile; click-to-call functionality; tracked as GA4 event and Ads conversion
- **Above-fold CTA** - call button and/or form visible without scrolling on every landing page
- **Response time promise** - prominently displayed (e.g., "We respond within 60 minutes")
- **Trust badges** - certifications, insurance-approved, years of experience, review ratings
- **Social proof** - review count/rating, case study references, before/after imagery
- **Clear phone number** - visible in header and sticky bar, click-to-call enabled

### Landing Page Structure (for all 4 LPs)

1. Hero section: strong headline, response time, CTA button, trust badges
2. Problem/pain point section
3. Service description with benefits
4. Social proof (reviews, case studies, before/after)
5. Process steps (how it works)
6. FAQ section (with schema)
7. Final CTA section
8. Sticky mobile call bar throughout

---

## Content Guidelines

### Blog Posts

- Target high-intent Auckland keywords (e.g., "what to do after a flood Auckland", "flood restoration cost NZ")
- Include FAQ section with schema
- Internal links to at least 2 service pages and 1 landing page
- CTA block at end of every post
- Minimum 2 posts/week once site is live

### Case Studies

- Format: Problem > Process > Outcome
- Include before/after photos
- Specific measurable outcomes where possible
- Link to related service page
- Use as proof blocks on landing pages

### Suburb Pages

- Each must have genuinely unique introductory content
- Mention specific local landmarks, flood-prone areas, or relevant local context
- FAQ section with suburb-specific questions
- Embedded Google Map centred on the suburb
- NAP block
- Links to all relevant service pages
- Target keyword pattern: "[service] [suburb] Auckland"

---

## Off-Page SEO Preparation (site must support)

### Citations

- Consistent NAP format decided before launch (exact spelling, formatting)
- NAP block component reusable across all pages
- Site ready for submission to NZ directories

### Backlink Support

- Linkable assets built into the site:
  - Long-form Auckland Flood Restoration Guide (link-worthy content)
  - Case studies (shareable proof)
  - Blog content targeting informational queries
- Target link sources: property managers, builders, insurance blogs

---

## Google Ads Integration Requirements

### Landing Page Alignment

- Each of the 4 landing pages serves specific ad campaigns:
  - LP1 (Flood Restoration Auckland) - Emergency Search campaign
  - LP2 (Emergency Water Damage) - Water damage ad groups
  - LP3 (24/7 Flood Response) - Emergency/urgency ad groups
  - LP4 (Insurance Restoration) - Insurance-specific campaign
- Landing pages must load fast (<3s), have clear conversion paths, and track all conversions

### Negative Keyword Awareness

- Site content should NOT target these terms (they are negative keywords in ads):
  - jobs, salary, course, DIY, meaning, equipment hire, rental, free
- Content should focus on commercial/transactional intent, not informational clutter

### Remarketing Support

- Site must have remarketing pixel/tag installed for Google Ads remarketing audiences
- Exclude converters from remarketing (handled in Ads, but site must support audience segmentation)

### Call-Only Ad Support

- Phone number must be crawlable and structured for call extensions
- Click-to-call must work reliably 24/7

---

## Auckland Zone Targeting

Ads and potentially content will be split by Auckland zones. The site should support location-aware content or at minimum have suburb pages covering:

- **West Auckland**
- **South Auckland**
- **Central Auckland**
- **North Shore**

---

## KPI & Reporting Integration

The site should support tracking of these KPIs:

- Cost per Call (CPCall)
- Cost per Job (CPJob)
- Return on Ad Spend (ROAS)
- Conversion rate (calls + forms / visitors)
- Page load speed
- Core Web Vitals scores
- Organic ranking positions
- Review count and velocity

---

## Call Handling

- Site must support AI call agent and/or staff call handling
- Call handling script integration point needed
- Missed-call callback system consideration
- Call recording capability (if enabled)

---

## Build Priority Order

When building the site, follow this priority sequence:

### Phase 1 (Week 1) - Foundation
1. Core site setup with mobile-first responsive design
2. Performance optimisation (WebP images, caching, lazy load, minimal scripts)
3. Flood Restoration service page (primary, Auckland-optimised)
4. Landing Page #1: Flood Restoration Auckland
5. Sticky mobile call bar with click-to-call
6. Google Ads conversion tracking + GA4 events
7. Call tracking implementation

### Phase 2 (Week 2) - Expand Pages
8. Landing Page #2: Emergency Water Damage
9. Landing Page #3: 24/7 Flood Response
10. Landing Page #4: Insurance Restoration / Claims
11. Fire, Mould, Meth service pages (Auckland-optimised)
12. "Areas We Serve" hub page
13. First 5 suburb pages
14. FAQ schema on all service + landing pages
15. Google Business Profile alignment

### Phase 3 (Week 3) - Content & Trust
16. 2 high-intent blog posts
17. 2 case studies with before/after
18. Improve above-fold conversion elements on all key pages
19. E-E-A-T trust signals sitewide
20. Next 5 suburb pages (10 total)

### Phase 4 (Week 4) - Scale & Authority
21. Programmatic suburb page template system
22. Long-form Auckland Flood Restoration Guide
23. Video embed on landing/service pages (with schema)
24. NAP consistency finalised for citation submissions
25. Remarketing pixel installed

### Phase 5 (Week 5+) - Ongoing
26. 5 suburb pages/week until 50+ total
27. 2 blog posts/week
28. Landing page CRO tweaks based on conversion data
29. Continuous performance monitoring

---

## File Reference

All tasks originate from: `SEO iDry - Master Tracker.csv` (111 tasks, T001-T111)
This instruction file extracts every website-build-relevant requirement from that tracker.
