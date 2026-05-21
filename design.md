---
name: Liquid Identity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#e0c387'
  on-secondary: '#3f2e00'
  secondary-container: '#5a4616'
  on-secondary-container: '#d1b57a'
  tertiary: '#f8f7ff'
  on-tertiary: '#002b75'
  tertiary-container: '#d0daff'
  on-tertiary-container: '#0056d9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#fddfa0'
  secondary-fixed-dim: '#e0c387'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#574414'
  tertiary-fixed: '#dae1ff'
  tertiary-fixed-dim: '#b3c5ff'
  on-tertiary-fixed: '#001849'
  on-tertiary-fixed-variant: '#003fa4'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  void-black: '#050505'
  electric-cyan: '#00F2FF'
  burnished-gold: '#8A733E'
  deep-azure: '#0066FF'
  surface-glass: rgba(255, 255, 255, 0.03)
typography:
  headline-xl:
    fontFamily: Metropolis
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Metropolis
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Metropolis
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Metropolis
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Metropolis
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Metropolis
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies "Liquid Identity"—a premium, high-tech aesthetic that feels both substantial and ethereal. It is designed for an exclusive audience that values precision, innovation, and futuristic elegance. 

The visual style is a sophisticated blend of **Glassmorphism** and **High-Contrast Dark Mode**. It leverages deep obsidian surfaces contrasted against hyper-saturated metallic accents. Motion and depth are central to the experience, using translucent layers and refractive blurs to create a sense of "liquid" space. The atmosphere is nocturnal, high-fidelity, and unmistakably elite.

## Colors
The palette is anchored in **Void Black (#050505)**, providing a vacuum-like backdrop that allows the metallic accents to vibrate. 

- **Primary (Electric Cyan):** Used for interactive elements, high-priority call-to-actions, and primary gradients. It represents the "energy" of the system.
- **Secondary (Burnished Gold):** Derived from the brand’s heritage, this color is reserved for "premium" markers, exclusive tier badges, and subtle hardware-like highlights.
- **Tertiary (Deep Azure):** Used for ambient glows and secondary interactive states, providing depth to the cyan gradients.
- **Surface Strategy:** Surfaces are rarely solid. They utilize varying levels of transparency and backdrop-blur to maintain the "liquid" feel.

## Typography
The typography contrasts extreme weights to create a "Tech-Luxury" hierarchy. 

**Headlines** utilize **Metropolis** at its heaviest weight (800), creating a bold, architectural presence. Letter spacing is slightly tightened for larger sizes to maintain a compact, impactful look.

**Body copy** uses **Plus Jakarta Sans** at weight 300. This light weight ensures the UI feels airy and sophisticated against the dark background, maintaining high legibility through generous line heights.

**Labels** and small functional text return to Metropolis to provide a sense of technical precision and structured data.

## Layout & Spacing
The layout uses a **Fluid Grid** system with expansive margins to evoke a feeling of exclusivity and "breathing room." 

- **Desktop:** 12-column grid with 80px side margins. Content is often centered or staggered to avoid a standard corporate look.
- **Rhythm:** Spacing follows an 8px base unit. Component internal padding should be generous (e.g., 24px or 32px) to support the "3xl" rounded corners.
- **Reflow:** On mobile, margins shrink to 20px, and elements stack vertically, maintaining the glassmorphic layering to preserve depth even on small screens.

## Elevation & Depth
Depth is not communicated via traditional shadows, but through **Tonal Layers and Ambient Glows**.

1.  **The Void (Base):** The #050505 background.
2.  **Liquid Layers:** Semi-transparent containers with `backdrop-filter: blur(16px)`. These surfaces catch light at the edges.
3.  **Luminescence:** Key interactive components emit a **Blue Ambient Glow**. This is a soft, ultra-diffused shadow (`box-shadow: 0 0 40px rgba(0, 242, 255, 0.15)`) that makes the element appear to be floating on a cushion of light.
4.  **Glass Borders:** Use 1px semi-transparent strokes (top-left weighted) to simulate light catching the edge of a glass pane.

## Shapes
The shape language is defined by **Extreme Radii (3xl)**. All containers, buttons, and input fields utilize pill-shaped or near-circular corners. 

This hyper-rounding softens the "tech" aspect, making the interface feel organic and "liquid." When nesting elements, ensure inner border radii are proportionally smaller to maintain visual concentricity.

## Components
- **Buttons:** Primary buttons are pill-shaped with a metallic cyan-to-azure gradient. Text is high-contrast white. Hover states trigger an intensified ambient glow. Secondary buttons use a "ghost" style with a 1px glass border and backdrop-blur.
- **Input Fields:** Deep black backgrounds with a subtle inner-glow on focus. The cursor and focus ring use the Primary Electric Cyan.
- **Cards:** Defined by `backdrop-blur-md` and a subtle white-to-transparent linear stroke. Cards should feel like floating shards of glass.
- **Chips/Badges:** Small, high-contrast pills. Use the "Burnished Gold" for premium status indicators.
- **Micro-interactions:** Transitions should be fluid and slightly dampened (e.g., `cubic-bezier(0.2, 0.8, 0.2, 1)`). Hovering over any "Liquid Layer" should produce a subtle movement in the backdrop blur or a slight shift in the ambient glow color.
- **Progress Bars:** Use a glowing cyan line with a trailing gradient effect to simulate liquid movement.