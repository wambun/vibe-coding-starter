# Stage 1B: Website Clone Extraction

Use this prompt when you have scraped data from an existing website you want to use as inspiration. This is an alternative to Stage 1 (screenshot extraction) that provides more accurate design data.

---

## When to Use This Approach

- You found a real website you love and want to create something similar
- You want exact color values instead of AI-guessed colors from screenshots
- You need accurate typography and spacing information
- You want to understand the content structure and patterns

---

## Option A: MCP Integration (Recommended)

If you have Firecrawl MCP configured, Claude can scrape websites directly during the conversation.

### Setup (One-time)

1. Get your API key from [firecrawl.dev](https://firecrawl.dev)
2. Set the environment variable:
   ```bash
   export FIRECRAWL_API_KEY=your_api_key_here
   ```
3. The MCP server is already configured in `.mcp.json`

### Usage

Simply tell Claude the URL and what you want:

```
Create a website for "Smith & Associates CPA" based on https://example-accounting-firm.com

Use their color scheme and layout as inspiration, but adapt the content for my client.
```

Claude will automatically:
1. Scrape the website using Firecrawl MCP
2. Extract colors, structure, and content patterns
3. Generate the design brief
4. Implement the website

---

## Option B: Manual Scraping

If you prefer to scrape manually or don't have Firecrawl MCP configured:

### Step 1: Scrape the Website

Use [Firecrawl](https://firecrawl.dev), [Puppeteer](https://pptr.dev), or similar tools to extract:

### Required Data
1. **HTML structure** - The main page HTML
2. **Color palette** - CSS custom properties or computed styles
3. **Content** - Headlines, descriptions, section content

### Optional (Helpful) Data
4. **Typography** - Font families, sizes, weights
5. **Images** - URLs or descriptions of key images
6. **Meta tags** - Title, description, Open Graph data

### Firecrawl Example

```bash
# Using Firecrawl CLI
firecrawl scrape https://example-law-firm.com --format markdown,html

# Or using the API
curl -X POST https://api.firecrawl.dev/v1/scrape \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"url": "https://example-law-firm.com", "formats": ["markdown", "html"]}'
```

---

## Step 2: Paste Data with This Prompt

```
I want to create a website for [CLIENT_NAME], a [BUSINESS_TYPE] (e.g., accounting firm, law office).

I've scraped a website I like as inspiration. Please analyze it and create a design brief that maps to our component library.

## Scraped Website Data

**Source URL:** [URL of the inspiration website]

**Industry:** [What type of business is the source site?]

### HTML Structure
```html
[PASTE HTML HERE - focus on main content, can trim <head> and scripts]
```

### Colors Found (if available)
```css
[PASTE CSS VARIABLES OR COLOR VALUES]
/* Example:
--primary: #1e40af;
--secondary: #d97706;
--background: #ffffff;
--text: #1f2937;
*/
```

### Content/Markdown (if available)
```markdown
[PASTE MARKDOWN VERSION OF CONTENT]
```

### Additional Notes
[Any specific elements you liked, sections to include/exclude, or modifications needed]

---

## Your Task

1. **Extract Colors**: Map to our 2-palette system (primary + secondary, 5 shades each)
   - Identify the dominant brand color → primary
   - Identify the accent/secondary color → secondary
   - Generate lighter/darker variants if only main color provided

2. **Map Sections**: Analyze the HTML structure and map each section to our components:

   **Hero Options:**
   - LandingPrimaryImageCtaSection (image + text)
   - LandingPrimaryVideoCtaSection (video + text)
   - LandingPrimaryTextCtaSection (text only)

   **Feature Options:**
   - LandingFeatureList (grid of features with icons)
   - LandingProductFeature (single feature spotlight)
   - LandingProductSteps (how it works / process)
   - LandingBentoGridSection (modern bento layout)

   **Testimonial Options:**
   - LandingTestimonialGrid (masonry grid)
   - LandingTestimonialInline (single quote)

   **Other Sections:**
   - LandingStatsSection (key metrics)
   - LandingTeamSection (team members)
   - LandingFaqCollapsibleSection (accordion FAQ)
   - LandingSaleCtaSection (call to action)
   - LandingPricingSection (pricing cards)

3. **Extract Content Patterns**: Note the tone, structure, and key messaging patterns

4. **Output**: Generate the same JSONC design brief format as Stage 1

---

## Output Format

Return a JSONC design brief:

```jsonc
{
  "$schema": "design-brief-schema-v1",

  "meta": {
    "sourceUrl": "URL of inspiration site",
    "businessType": "[accounting|legal|medical|construction|restaurant|realEstate|saas|general]",
    "style": "[corporate|modern|friendly|minimal|bold|elegant]",
    "audience": "Description of target audience",
    "primaryGoal": "[lead-generation|booking|information|branding]"
  },

  "colors": {
    "primary": {
      "lighter": "#hex",
      "light": "#hex",
      "main": "#hex",
      "dark": "#hex",
      "darker": "#hex"
    },
    "secondary": {
      "lighter": "#hex",
      "light": "#hex",
      "main": "#hex",
      "dark": "#hex",
      "darker": "#hex"
    },
    "accents": [],
    "grayScale": "slate|gray|zinc|neutral|stone"
  },

  "typography": {
    "headings": { "weight": "bold|semibold", "style": "normal", "letterSpacing": "tight|normal" },
    "body": { "size": "base|lg", "lineHeight": "normal|relaxed" },
    "fontFamily": "Extracted font family if available",
    "special": []
  },

  "sections": [
    {
      "id": "section-id",
      "type": "hero|features|testimonials|pricing|cta|faq|team|stats",
      "component": "ComponentName",
      "props": {
        // Component-specific props
      },
      "content": {
        // Extracted/adapted content
      },
      "sourceNotes": "What this section looked like in the original"
    }
  ],

  "contentPatterns": {
    "tone": "Professional, friendly, authoritative, etc.",
    "headlines": "Pattern observed (e.g., benefit-focused, question-based)",
    "ctas": "Common CTA patterns used",
    "socialProof": "How they show credibility"
  },

  "responsive": {
    "notes": ["Observed mobile behavior", "Tablet behavior"]
  },

  "darkMode": {
    "supported": true|false,
    "background": "Description if supported",
    "text": "Description if supported"
  }
}
```

After the JSONC, provide a **Developer Implementation Prompt** summarizing:
- Key visual elements to replicate
- Content adaptation notes (what to keep vs. customize)
- Component composition strategy
- Color token usage (NO hex values in implementation—use primary-500, etc.)
```

---

## Step 3: Proceed to Stage 2

Once you have the design brief from this process, use it with the Stage 2 Implementation Prompt to generate the actual code.

---

## Tips for Best Results

### What to Include
- Full HTML of the main page (trim scripts, ads, tracking)
- Any CSS custom properties or color definitions
- The markdown/text content for reference
- Screenshots if the HTML is complex

### What to Exclude
- Third-party scripts and tracking code
- Minified CSS (hard to read)
- Dynamic/JavaScript-rendered content (scrape the rendered HTML)
- Cookie banners and popups

### Adapting for Your Client
When pasting the data, note:
- What elements you want to keep exactly
- What should be adapted for the new client's industry
- Any sections to add or remove
- Specific branding requirements

---

## Example: Scraping a Law Firm Site

```
I want to create a website for "Anderson & Partners", an accounting/CPA firm.

I've scraped a law firm website I like. Please adapt the design for an accounting firm.

**Source URL:** https://example-lawfirm.com

**Industry:** Law firm (adapting for accounting)

### HTML Structure
<main>
  <section class="hero">
    <h1>Trusted Legal Advocates</h1>
    <p>Fighting for your rights for over 25 years</p>
    <a href="#contact">Free Consultation</a>
  </section>
  <section class="services">
    <h2>Practice Areas</h2>
    <!-- 6 service cards -->
  </section>
  <section class="stats">
    <!-- 4 statistics -->
  </section>
  <!-- etc -->
</main>

### Colors Found
--primary: #1e3a5f;
--accent: #c9a962;
--text: #333333;
--background: #ffffff;

### Notes
- Love the professional navy + gold color scheme
- Want similar stats section showing credentials
- Need to adapt "Practice Areas" to "Services"
- Keep the testimonial layout
```

---

## Comparison: Stage 1 vs Stage 1B

| Aspect | Stage 1 (Screenshot) | Stage 1B (Firecrawl) |
|--------|---------------------|----------------------|
| Input | UI screenshot | HTML + CSS + content |
| Color accuracy | AI-estimated | Exact values |
| Content | Manually described | Actual copy available |
| Structure | Visually inferred | DOM structure |
| Speed | Quick | Slightly more setup |
| Best for | Dribbble/Behance inspiration | Real competitor sites |

Use **Stage 1** when you have a design mockup or screenshot.
Use **Stage 1B** when you have a real website to reference.

Both lead to the same Stage 2 implementation process.
