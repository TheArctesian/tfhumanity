<script lang="ts">
	/**
	 * Branding Page
	 * Showcases the complete Tech for Humanity design system
	 * Inspired by the Pale Blue Dot
	 */

	import { colors } from '$lib/design-system/tokens';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Card from '$lib/components/Card.svelte';
	import PaleBlueDot from '$lib/components/PaleBlueDot.svelte';

	const colorPalettes = [
		{
			name: 'Void',
			description: 'Deep space backgrounds and cosmic voids',
			colors: colors.void
		},
		{
			name: 'Cosmic',
			description: 'The pale blue dot - our home in the cosmos',
			colors: colors.cosmic
		},
		{
			name: 'Nebula',
			description: 'Cosmic purples and interstellar mystery',
			colors: colors.nebula
		},
		{
			name: 'Sunray',
			description: 'Warm light beams cutting through space',
			colors: colors.sunray
		},
		{
			name: 'Starlight',
			description: 'Bright highlights and stellar brilliance',
			colors: colors.starlight
		}
	];

	const componentDemos = [
		{ label: 'Primary Button', variant: 'primary' as const },
		{ label: 'Secondary Button', variant: 'secondary' as const },
		{ label: 'Ghost Button', variant: 'ghost' as const },
		{ label: 'Danger Button', variant: 'danger' as const }
	];
</script>

<svelte:head>
	<title>Branding - Tech for Humanity</title>
	<meta name="description" content="Design system for Tech for Humanity" />
</svelte:head>

<div class="branding-page">
	<!-- Hero Section -->
	<section class="branding-hero">
		<div class="container">
			<h1 class="page-title">Tech for Humanity</h1>
			<p class="page-subtitle">Design System</p>
			<p class="page-description">
				Inspired by Carl Sagan's Pale Blue Dot - a cosmic perspective on design that reminds us of
				our shared humanity and the fragility of our home in the vast universe.
			</p>
		</div>
	</section>

	<!-- Pale Blue Dot Section -->
	<section class="section pale-blue-dot-section">
		<div class="container">
			<h2>The Pale Blue Dot</h2>
			<p class="section-description">
				On February 14, 1990, Voyager 1 captured an image of Earth from 3.7 billion miles away. In
				that photograph, Earth appears as a tiny pale blue dot suspended in a sunbeam - a humbling
				reminder of our place in the cosmos.
			</p>
			<div class="dot-showcase">
				<PaleBlueDot size={400} animated={true} showSunbeam={true} />
			</div>
			<blockquote class="cosmic-quote">
				"Look again at that dot. That's here. That's home. That's us."
				<cite>— Carl Sagan</cite>
			</blockquote>
		</div>
	</section>

	<!-- Color Palette Section -->
	<section class="section">
		<div class="container">
			<h2>Color Palette</h2>
			<p class="section-description">
				Our color system draws inspiration from the cosmic imagery of the Pale Blue Dot photograph,
				capturing the essence of deep space, Earth's atmosphere, and the warmth of distant sunlight.
			</p>

			<div class="color-palettes">
				{#each colorPalettes as palette}
					<div class="palette-section">
						<h3>{palette.name}</h3>
						<p class="palette-description">{palette.description}</p>
						<div class="color-grid">
							{#each Object.entries(palette.colors) as [shade, color]}
								<div class="color-swatch">
									<div class="color-box" style="background-color: {color}"></div>
									<div class="color-info">
										<span class="color-shade">{shade}</span>
										<span class="color-value">{color}</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Typography Section -->
	<section class="section">
		<div class="container">
			<h2>Typography</h2>
			<p class="section-description">
				Clear, readable typography that works across all contexts and sizes.
			</p>

			<div class="typography-showcase">
				<h1>Heading 1 - Display</h1>
				<h2>Heading 2 - Section Title</h2>
				<h3>Heading 3 - Subsection</h3>
				<h4>Heading 4 - Component Title</h4>
				<p>
					Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris.
				</p>
				<p class="small-text">
					Small text - Additional details or helper text that provides context.
				</p>
				<code>Code snippet: const message = "Hello, World!";</code>
			</div>
		</div>
	</section>

	<!-- Components Section -->
	<section class="section">
		<div class="container">
			<h2>Components</h2>
			<p class="section-description">
				Reusable UI components built with the design system tokens.
			</p>

			<!-- Buttons -->
			<div class="component-group">
				<h3>Buttons</h3>
				<div class="component-demo">
					{#each componentDemos as demo}
						<Button variant={demo.variant}>{demo.label}</Button>
					{/each}
				</div>

				<h4>Button Sizes</h4>
				<div class="component-demo">
					<Button size="sm">Small</Button>
					<Button size="md">Medium</Button>
					<Button size="lg">Large</Button>
				</div>
			</div>

			<!-- Inputs -->
			<div class="component-group">
				<h3>Input Fields</h3>
				<div class="input-demo">
					<Input label="Username" placeholder="Enter your username" fullWidth />
					<Input label="Email" type="email" placeholder="your@email.com" fullWidth />
					<Input
						label="Password"
						type="password"
						placeholder="Enter password"
						helperText="Must be at least 8 characters"
						fullWidth
					/>
					<Input
						label="Error State"
						error="This field is required"
						placeholder="Example error"
						fullWidth
					/>
				</div>
			</div>

			<!-- Cards -->
			<div class="component-group">
				<h3>Cards</h3>
				<div class="cards-demo">
					<Card
						variant="default"
						title="Default Card"
						description="A standard card with default styling"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
					</Card>

					<Card
						variant="elevated"
						title="Elevated Card"
						description="A card with shadow and hover effects"
					>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</Card>

					<Card
						variant="outlined"
						title="Outlined Card"
						description="A card with prominent borders"
					>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur.
						</p>
					</Card>
				</div>
			</div>
		</div>
	</section>

	<!-- Design Tokens Reference -->
	<section class="section">
		<div class="container">
			<h2>Design Tokens</h2>
			<p class="section-description">
				All design tokens are available as CSS custom properties and TypeScript exports.
			</p>

			<div class="tokens-reference">
				<Card title="Spacing" padding="lg">
					<pre><code>--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 3rem
--spacing-3xl: 4rem</code></pre>
				</Card>

				<Card title="Border Radius" padding="lg">
					<pre><code>--radius-sm: 0.125rem
--radius-base: 0.25rem
--radius-md: 0.375rem
--radius-lg: 0.5rem
--radius-xl: 0.75rem
--radius-2xl: 1rem
--radius-3xl: 1.5rem
--radius-full: 9999px</code></pre>
				</Card>

				<Card title="Shadows" padding="lg">
					<pre><code>--shadow-sm
--shadow-base
--shadow-md
--shadow-lg
--shadow-xl
--shadow-2xl
--shadow-glow
--shadow-glow-lg
--shadow-cosmic</code></pre>
				</Card>
			</div>
		</div>
	</section>
</div>

<style>
	.branding-page {
		min-height: 100vh;
		padding-bottom: 4rem;
	}

	.branding-hero {
		padding: 6rem 0 4rem;
		text-align: center;
		background: radial-gradient(
			ellipse at top,
			rgba(74, 158, 255, 0.1) 0%,
			transparent 70%
		);
	}

	.page-title {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 900;
		margin: 0;
		background: linear-gradient(135deg, #4a9eff, #8b5cf6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.page-subtitle {
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: #93c5fd;
		margin: 1rem 0;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		font-weight: 300;
	}

	.page-description {
		max-width: 800px;
		margin: 2rem auto 0;
		font-size: 1.125rem;
		line-height: 1.8;
		color: #bfdbfe;
		opacity: 0.9;
	}

	.section {
		padding: 4rem 0;
	}

	.section h2 {
		font-size: clamp(2rem, 5vw, 3rem);
		margin-bottom: 1rem;
		text-align: center;
	}

	.section-description {
		text-align: center;
		max-width: 700px;
		margin: 0 auto 3rem;
		font-size: 1.125rem;
		line-height: 1.7;
		color: rgba(191, 219, 254, 0.8);
	}

	.pale-blue-dot-section {
		background: radial-gradient(
			ellipse at center,
			rgba(26, 46, 125, 0.2) 0%,
			transparent 70%
		);
	}

	.dot-showcase {
		display: flex;
		justify-content: center;
		margin: 3rem 0;
	}

	.cosmic-quote {
		max-width: 600px;
		margin: 3rem auto 0;
		font-size: 1.5rem;
		line-height: 1.6;
		font-style: italic;
		color: #93c5fd;
		text-align: center;
		border-left: 4px solid #4a9eff;
		padding-left: 2rem;
	}

	.cosmic-quote cite {
		display: block;
		margin-top: 1rem;
		font-size: 1rem;
		font-style: normal;
		color: rgba(191, 219, 254, 0.7);
	}

	.color-palettes {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.palette-section h3 {
		font-size: 1.75rem;
		margin-bottom: 0.5rem;
	}

	.palette-description {
		color: rgba(191, 219, 254, 0.7);
		margin-bottom: 1.5rem;
	}

	.color-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 1rem;
	}

	.color-swatch {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.color-box {
		height: 80px;
		border-radius: 0.5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	}

	.color-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.color-shade {
		font-size: 0.875rem;
		font-weight: 600;
		color: #93c5fd;
	}

	.color-value {
		font-size: 0.75rem;
		font-family: var(--font-mono);
		color: rgba(191, 219, 254, 0.6);
	}

	.typography-showcase {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: rgba(26, 30, 125, 0.2);
		border-radius: 1rem;
		border: 1px solid rgba(74, 158, 255, 0.2);
	}

	.typography-showcase > * {
		margin-bottom: 1.5rem;
	}

	.typography-showcase > *:last-child {
		margin-bottom: 0;
	}

	.small-text {
		font-size: 0.875rem;
		color: rgba(191, 219, 254, 0.7);
	}

	.component-group {
		margin-bottom: 3rem;
	}

	.component-group h3 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.component-group h4 {
		font-size: 1.125rem;
		margin: 2rem 0 1rem;
		color: #93c5fd;
	}

	.component-demo {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	.input-demo {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		max-width: 500px;
	}

	.cards-demo {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.tokens-reference {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.tokens-reference pre {
		margin: 0;
		font-size: 0.875rem;
	}

	.tokens-reference code {
		background: none;
		padding: 0;
	}

	@media (max-width: 768px) {
		.branding-hero {
			padding: 4rem 0 2rem;
		}

		.cosmic-quote {
			font-size: 1.25rem;
			padding-left: 1rem;
		}

		.color-grid {
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		}

		.cards-demo {
			grid-template-columns: 1fr;
		}

		.tokens-reference {
			grid-template-columns: 1fr;
		}
	}
</style>
