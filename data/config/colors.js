/**
 * Brand Colors Configuration
 *
 * Update these values for each client project.
 * Colors are mapped to Tailwind classes: primary-100 through primary-900
 *
 * Configure colors at: https://shipixen.com/color-theme-explorer-shadcn
 *
 * RECOMMENDED PALETTES BY INDUSTRY:
 * - Accounting/Finance: Blue (#3b82f6) + Green (#10b981)
 * - Legal: Navy (#1e40af) + Gold (#d97706)
 * - Medical: Teal (#14b8a6) + Blue (#3b82f6)
 * - Construction: Orange (#f97316) + Gray (#6b7280)
 * - Restaurant: Red (#ef4444) + Brown (#92400e)
 * - Real Estate: Navy (#1e40af) + Amber (#f59e0b)
 */
const colors = {
  primary: {
    lighter: '#dbeafe', // primary-100, primary-200 (Blue)
    light: '#93c5fd', // primary-300, primary-400
    main: '#3b82f6', // primary-500, primary-600
    dark: '#1d4ed8', // primary-700, primary-800
    darker: '#1e3a8a', // primary-900
  },
  secondary: {
    lighter: '#d1fae5', // secondary-100, secondary-200 (Emerald)
    light: '#6ee7b7', // secondary-300, secondary-400
    main: '#10b981', // secondary-500, secondary-600
    dark: '#059669', // secondary-700, secondary-800
    darker: '#047857', // secondary-900
  },
};

module.exports = { colors };
