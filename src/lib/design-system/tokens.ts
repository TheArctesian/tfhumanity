/**
 * Design System Tokens
 * Inspired by Carl Sagan's Pale Blue Dot
 *
 * Color palette derived from the iconic Voyager 1 photograph:
 * - Deep space blacks and cosmic voids
 * - The pale blue dot of Earth
 * - Warm sun rays and light beams
 * - Nebula purples and cosmic dust
 */

export const colors = {
	// Space & Void - Deep space backgrounds
	void: {
		50: '#e6e8f0',
		100: '#bdc2d9',
		200: '#9099bf',
		300: '#6370a5',
		400: '#414f91',
		500: '#1a2e7d',
		600: '#162975',
		700: '#0f226a',
		800: '#0a1c5f',
		900: '#060f4a',
		950: '#030718',
		pure: '#000000',
	},

	// Cosmic Blue - The pale blue dot
	cosmic: {
		50: '#e8f4ff',
		100: '#d4e9ff',
		200: '#b0d7ff',
		300: '#7bbfff',
		400: '#4a9eff',
		500: '#1a7eff',
		600: '#0062ff',
		700: '#004eff',
		800: '#0041d0',
		900: '#003ba3',
		950: '#002563',
	},

	// Nebula - Cosmic purples and mystery
	nebula: {
		50: '#f5f3ff',
		100: '#ede9fe',
		200: '#ddd6fe',
		300: '#c4b5fd',
		400: '#a78bfa',
		500: '#8b5cf6',
		600: '#7c3aed',
		700: '#6d28d9',
		800: '#5b21b6',
		900: '#4c1d95',
		950: '#2d1b4e',
	},

	// Sunray - Warm light beams
	sunray: {
		50: '#fff7ed',
		100: '#ffedd5',
		200: '#fed7aa',
		300: '#fdb574',
		400: '#ffa94d',
		500: '#fb923c',
		600: '#f97316',
		700: '#ea580c',
		800: '#c2410c',
		900: '#9a3412',
		950: '#7c2d12',
	},

	// Starlight - Bright highlights and text
	starlight: {
		50: '#ffffff',
		100: '#fafafa',
		200: '#f5f5f5',
		300: '#e8f4ff',
		400: '#dbeafe',
		500: '#bfdbfe',
		600: '#93c5fd',
		700: '#60a5fa',
		800: '#3b82f6',
		900: '#2563eb',
	},
} as const;

export const typography = {
	fonts: {
		sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
		mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
		display: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
	},

	scale: {
		xs: '0.75rem',     // 12px
		sm: '0.875rem',    // 14px
		base: '1rem',      // 16px
		lg: '1.125rem',    // 18px
		xl: '1.25rem',     // 20px
		'2xl': '1.5rem',   // 24px
		'3xl': '1.875rem', // 30px
		'4xl': '2.25rem',  // 36px
		'5xl': '3rem',     // 48px
		'6xl': '3.75rem',  // 60px
		'7xl': '4.5rem',   // 72px
		'8xl': '6rem',     // 96px
		'9xl': '8rem',     // 128px
	},

	weights: {
		thin: 100,
		extralight: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},

	lineHeights: {
		none: '1',
		tight: '1.25',
		snug: '1.375',
		normal: '1.5',
		relaxed: '1.625',
		loose: '2',
	},
} as const;

export const spacing = {
	0: '0',
	px: '1px',
	0.5: '0.125rem',  // 2px
	1: '0.25rem',     // 4px
	1.5: '0.375rem',  // 6px
	2: '0.5rem',      // 8px
	2.5: '0.625rem',  // 10px
	3: '0.75rem',     // 12px
	3.5: '0.875rem',  // 14px
	4: '1rem',        // 16px
	5: '1.25rem',     // 20px
	6: '1.5rem',      // 24px
	7: '1.75rem',     // 28px
	8: '2rem',        // 32px
	9: '2.25rem',     // 36px
	10: '2.5rem',     // 40px
	11: '2.75rem',    // 44px
	12: '3rem',       // 48px
	14: '3.5rem',     // 56px
	16: '4rem',       // 64px
	20: '5rem',       // 80px
	24: '6rem',       // 96px
	28: '7rem',       // 112px
	32: '8rem',       // 128px
	36: '9rem',       // 144px
	40: '10rem',      // 160px
	44: '11rem',      // 176px
	48: '12rem',      // 192px
	52: '13rem',      // 208px
	56: '14rem',      // 224px
	60: '15rem',      // 240px
	64: '16rem',      // 256px
	72: '18rem',      // 288px
	80: '20rem',      // 320px
	96: '24rem',      // 384px
} as const;

export const borderRadius = {
	none: '0',
	sm: '0.125rem',   // 2px
	base: '0.25rem',  // 4px
	md: '0.375rem',   // 6px
	lg: '0.5rem',     // 8px
	xl: '0.75rem',    // 12px
	'2xl': '1rem',    // 16px
	'3xl': '1.5rem',  // 24px
	full: '9999px',
} as const;

export const shadows = {
	sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
	base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
	md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
	lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
	xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
	'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
	inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
	glow: '0 0 20px rgba(74, 158, 255, 0.5)',
	'glow-lg': '0 0 40px rgba(74, 158, 255, 0.6)',
	cosmic: '0 0 60px rgba(74, 158, 255, 0.3), 0 0 100px rgba(139, 92, 246, 0.2)',
} as const;

export const animations = {
	durations: {
		fast: '150ms',
		base: '300ms',
		slow: '500ms',
		slower: '1000ms',
	},

	easings: {
		linear: 'linear',
		in: 'cubic-bezier(0.4, 0, 1, 1)',
		out: 'cubic-bezier(0, 0, 0.2, 1)',
		inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	},
} as const;

export const breakpoints = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
} as const;

// Export type for TypeScript autocomplete
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
export type Animations = typeof animations;
export type Breakpoints = typeof breakpoints;
