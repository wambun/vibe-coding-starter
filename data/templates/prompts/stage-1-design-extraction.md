# Stage 1: Design Extraction Prompt

Use this prompt when analyzing a UI screenshot from Dribbble, Mobbin, or similar sources to extract a structured design brief.

---

## Prompt Template

```
Analyze this UI screenshot for a small-to-medium business website.

**Context:**
- Target: [BUSINESS_TYPE] (e.g., accounting firm, law office, medical practice, construction company)
- Goal: Generate a complete design brief that can be handed to a developer

**Your Task:**
1. Extract the color palette and map to a 2-palette system (primary + secondary, each with 5 shades)
2. Identify the typography style (heading weight, body size, special treatments)
3. Break down each section of the design and map to these available components:

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

4. Note responsive behavior and dark mode considerations
5. Identify any special effects or animations

**Output Format:**
Return a JSONC file following this exact structure:

```jsonc
{
  "$schema": "design-brief-schema-v1",

  "meta": {
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
        // Content structure
      },
      "visualNotes": "Description of visual details"
    }
  ],

  "responsive": {
    "notes": ["Mobile behavior", "Tablet behavior"]
  },

  "darkMode": {
    "background": "Description",
    "text": "Description",
    "notes": []
  },

  "effects": {
    "ctaBackground": "LandingBlobCtaBg|LandingWavesCtaBg|none",
    "imageTreatments": [],
    "animations": []
  }
}
```

After the JSONC, provide a **Developer Implementation Prompt** in a markdown code block that summarizes:
- The overall design approach
- Key visual elements to capture
- Color token usage rules
- Component composition strategy
- Do NOT include any hex values—reference only design tokens (primary-500, secondary-300, etc.)
```

---

## Example Usage

When you have a screenshot, paste it into your AI tool along with the prompt above. Replace `[BUSINESS_TYPE]` with the specific industry (e.g., "CPA/accounting firm").

The AI should return:
1. A complete JSONC design brief
2. A developer-facing implementation prompt

You'll use both outputs in Stage 2.
