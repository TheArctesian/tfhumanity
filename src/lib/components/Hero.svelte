<script lang="ts">
	/**
	 * Hero Component
	 * Main hero section for Tech for Humanity
	 * Features "TFhumanity" branding positioned at bottom left with Pale Blue Dot on the right
	 */

	import SimpleDot from './SimpleDot.svelte';

	interface Props {
		title?: string;
		subtitle?: string;
		description?: string;
	}

	let {
		title = 'TF',
		subtitle = 'humanity',
		description = 'Technology collective serving life.'
	}: Props = $props();
</script>

<section class="hero" id="hero">
	<div class="hero-content">
		<!-- Background cosmic effects -->
		<div class="cosmic-bg" aria-hidden="true"></div>

		<div class="hero-layout">
			<!-- Left side: Branding and description -->
			<div class="hero-left">
				<div class="branding" id="hero-branding">
					<h1 class="brand-text">
						<span class="brand-tf">{title}</span><span class="brand-humanity">{subtitle}</span>
					</h1>
				</div>

				{#if description}
					<p class="description">{description}</p>
				{/if}
			</div>

			<!-- Right side: Pale Blue Dot -->
			<div class="hero-right">
				<div class="pale-blue-dot-container">
					<SimpleDot size={400} />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: linear-gradient(to bottom, #000000, #0a0e27, #1a2e7d);
	}

	.hero-content {
		position: relative;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 4rem 2rem;
		z-index: 10;
		height: 100vh;
		display: flex;
		align-items: flex-end;
	}

	.cosmic-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			radial-gradient(ellipse at 20% 50%, rgba(74, 158, 255, 0.15) 0%, transparent 50%),
			radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
		animation: cosmic-pulse 8s ease-in-out infinite;
		pointer-events: none;
	}

	@keyframes cosmic-pulse {
		0%,
		100% {
			opacity: 0.5;
		}
		50% {
			opacity: 1;
		}
	}

	.hero-layout {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		width: 100%;
		gap: 4rem;
	}

	.hero-left {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		flex: 1;
	}

	.hero-right {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.branding {
		position: relative;
	}

	.brand-text {
		font-size: clamp(3rem, 8vw, 6rem);
		font-weight: 900;
		line-height: 1;
		margin: 0;
		display: flex;
		align-items: baseline;
		gap: 0;
	}

	.brand-tf {
		color: #ffffff;
		text-shadow:
			0 0 40px rgba(74, 158, 255, 0.6),
			0 0 80px rgba(74, 158, 255, 0.4),
			0 0 120px rgba(139, 92, 246, 0.3);
		animation: title-glow 4s ease-in-out infinite;
		letter-spacing: -0.05em;
	}

	.brand-humanity {
		color: #93c5fd;
		font-weight: 300;
		font-size: 0.5em;
		letter-spacing: 0.1em;
		text-transform: lowercase;
		opacity: 0.9;
		margin-left: 0.1em;
	}

	@keyframes title-glow {
		0%,
		100% {
			text-shadow:
				0 0 40px rgba(74, 158, 255, 0.6),
				0 0 80px rgba(74, 158, 255, 0.4),
				0 0 120px rgba(139, 92, 246, 0.3);
		}
		50% {
			text-shadow:
				0 0 60px rgba(74, 158, 255, 0.8),
				0 0 100px rgba(74, 158, 255, 0.6),
				0 0 140px rgba(139, 92, 246, 0.4);
		}
	}

	.description {
		max-width: 600px;
		font-size: clamp(1rem, 2vw, 1.25rem);
		line-height: 1.6;
		color: #bfdbfe;
		margin: 0;
		opacity: 0.8;
	}

	.pale-blue-dot-container {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	/* Responsive adjustments */
	@media (max-width: 1024px) {
		.hero-layout {
			gap: 2rem;
		}

		.pale-blue-dot-container :global(svg) {
			max-width: 300px;
		}
	}

	@media (max-width: 768px) {
		.hero {
			min-height: auto;
		}

		.hero-content {
			padding: 3rem 1.5rem;
			height: auto;
			min-height: 80vh;
		}

		.hero-layout {
			flex-direction: column;
			align-items: flex-start;
			gap: 3rem;
		}

		.hero-right {
			width: 100%;
			justify-content: flex-start;
		}

		.pale-blue-dot-container :global(svg) {
			max-width: 250px;
		}
	}

	@media (max-width: 480px) {
		.hero-content {
			padding: 2rem 1rem;
		}

		.pale-blue-dot-container :global(svg) {
			max-width: 200px;
		}
	}
</style>
