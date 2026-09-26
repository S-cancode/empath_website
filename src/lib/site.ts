export const TESTFLIGHT_URL = "https://testflight.apple.com/join/erW4n6zc";
export const TESTFLIGHT_LABEL = "testflight.apple.com/join/erW4n6zc";
export const SUPPORT_EMAIL = "help@empathapp.co.uk";

/**
 * Brand colours. The blue is the site's existing #0088CC; the lighter blues are
 * sampled from the Empath logo's ring gradient (public/images/empath-icon.png).
 * Ink and paper are the Tailwind v4 gray-900 and sky-50 tokens the site already
 * uses. Canvas drawing needs literal values, so they live here.
 */
export const BRAND = {
  blue: "#0088CC",
  sky: "#25B1F2",
  glow: "#5FCAFF",
  mist: "#BAE8FF",
  ink: "#101828", // gray-900
  paper: "#F0F9FF", // sky-50
} as const;
