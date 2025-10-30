<script lang="ts">
	/**
	 * SimpleDot Component
	 * A simple pale blue dot with glow effect
	 * Represents Earth as seen from Voyager 1
	 */

	interface Props {
		size?: number;
	}

	let { size = 300 }: Props = $props();
</script>

<div class="dot-container" style="width: {size}px; height: {size}px;">
	<svg
		width={size}
		height={size}
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		class="pale-dot"
	>
		<defs>
			<!-- Glow effect for the dot -->
			<filter id="dotGlow">
				<feGaussianBlur stdDeviation="3" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>

			<radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
				<stop offset="0%" style="stop-color:#6bffda;stop-opacity:1" />
				<stop offset="30%" style="stop-color:#4ad9c8;stop-opacity:1" />
				<stop offset="60%" style="stop-color:#4a9eff;stop-opacity:1" />
				<stop offset="100%" style="stop-color:#1a7eff;stop-opacity:0.8" />
			</radialGradient>
		</defs>

		<!-- The pale blue dot -->
		<circle cx="50" cy="50" r="2" fill="url(#dotGradient)" filter="url(#dotGlow)" class="dot">
			<animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
		</circle>
	</svg>
</div>

<style>
	.dot-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pale-dot {
		width: 100%;
		height: 100%;
	}

	.dot {
		animation: pulse-subtle 4s ease-in-out infinite;
	}

	@keyframes pulse-subtle {
		0%,
		100% {
			filter: drop-shadow(0 0 8px #4a9eff);
		}
		50% {
			filter: drop-shadow(0 0 12px #6bb6ff);
		}
	}
</style>
