<script lang="ts">
	/**
	 * PaleBlueDot Component
	 * A recreation of the iconic Voyager 1 photograph showing Earth as a pale blue dot
	 * suspended in a sunbeam, taken from 3.7 billion miles away.
	 */

	interface Props {
		size?: number;
		animated?: boolean;
		showSunbeam?: boolean;
	}

	let { size = 400, animated = true, showSunbeam = true }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 400 400"
	xmlns="http://www.w3.org/2000/svg"
	class="pale-blue-dot"
	class:animated
>
	<defs>
		<!-- Gradient for the cosmic background -->
		<radialGradient id="spaceGradient" cx="50%" cy="50%" r="50%">
			<stop offset="0%" style="stop-color:#1a2e7d;stop-opacity:0.3" />
			<stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
		</radialGradient>

		<!-- Gradient for the sunbeam -->
		<linearGradient id="sunbeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" style="stop-color:#ffa94d;stop-opacity:0.6" />
			<stop offset="50%" style="stop-color:#fb923c;stop-opacity:0.3" />
			<stop offset="100%" style="stop-color:#ea580c;stop-opacity:0.1" />
		</linearGradient>

		<!-- Glow effect for Earth -->
		<filter id="earthGlow">
			<feGaussianBlur stdDeviation="2" result="coloredBlur" />
			<feMerge>
				<feMergeNode in="coloredBlur" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>

		<!-- Starfield pattern -->
		<pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
			<circle cx="10" cy="10" r="0.5" fill="#ffffff" opacity="0.8" />
			<circle cx="45" cy="25" r="0.3" fill="#ffffff" opacity="0.6" />
			<circle cx="75" cy="15" r="0.4" fill="#ffffff" opacity="0.7" />
			<circle cx="30" cy="60" r="0.3" fill="#ffffff" opacity="0.5" />
			<circle cx="85" cy="70" r="0.5" fill="#ffffff" opacity="0.8" />
			<circle cx="55" cy="90" r="0.3" fill="#ffffff" opacity="0.6" />
			<circle cx="20" cy="85" r="0.4" fill="#ffffff" opacity="0.7" />
			<circle cx="90" cy="40" r="0.3" fill="#ffffff" opacity="0.5" />
		</pattern>
	</defs>

	<!-- Cosmic background -->
	<rect width="400" height="400" fill="url(#spaceGradient)" />

	<!-- Starfield -->
	<rect width="400" height="400" fill="url(#stars)" opacity="0.6" />

	<!-- Sunbeam (optional) -->
	{#if showSunbeam}
		<g class="sunbeam">
			<path
				d="M 0,150 Q 200,180 400,200 L 400,250 Q 200,230 0,200 Z"
				fill="url(#sunbeamGradient)"
				opacity="0.4"
			/>
			<path
				d="M 0,180 Q 200,200 400,210 L 400,240 Q 200,220 0,210 Z"
				fill="url(#sunbeamGradient)"
				opacity="0.3"
			/>
		</g>
	{/if}

	<!-- The Pale Blue Dot (Earth) -->
	<g class="earth" transform="translate(285, 195)">
		<!-- Earth glow -->
		<circle cx="0" cy="0" r="4" fill="#4a9eff" opacity="0.4" filter="url(#earthGlow)" />

		<!-- Earth itself -->
		<circle cx="0" cy="0" r="2" fill="#4a9eff" class="earth-dot">
			<animate
				attributeName="opacity"
				values="0.8;1;0.8"
				dur="3s"
				repeatCount="indefinite"
			/>
		</circle>

		<!-- Atmospheric glow -->
		<circle cx="0" cy="0" r="2.5" fill="none" stroke="#93c5fd" stroke-width="0.3" opacity="0.6" />
	</g>

	<!-- Additional scattered stars for depth -->
	<g class="scattered-stars">
		<circle cx="50" cy="50" r="0.8" fill="#ffffff" opacity="0.9" />
		<circle cx="350" cy="80" r="0.6" fill="#ffffff" opacity="0.7" />
		<circle cx="120" cy="300" r="0.7" fill="#ffffff" opacity="0.8" />
		<circle cx="310" cy="340" r="0.5" fill="#ffffff" opacity="0.6" />
		<circle cx="180" cy="120" r="0.6" fill="#ffffff" opacity="0.7" />
		<circle cx="250" cy="280" r="0.8" fill="#ffffff" opacity="0.9" />
	</g>
</svg>

<style>
	.pale-blue-dot {
		display: block;
		max-width: 100%;
		height: auto;
	}

	.pale-blue-dot.animated .sunbeam {
		animation: sunbeam-shimmer 8s ease-in-out infinite;
	}

	.pale-blue-dot.animated .earth-dot {
		animation: pulse-glow 3s ease-in-out infinite;
	}

	.pale-blue-dot.animated .scattered-stars circle {
		animation: twinkle 4s ease-in-out infinite;
	}

	.pale-blue-dot.animated .scattered-stars circle:nth-child(2) {
		animation-delay: 1s;
	}

	.pale-blue-dot.animated .scattered-stars circle:nth-child(3) {
		animation-delay: 2s;
	}

	.pale-blue-dot.animated .scattered-stars circle:nth-child(4) {
		animation-delay: 1.5s;
	}

	.pale-blue-dot.animated .scattered-stars circle:nth-child(5) {
		animation-delay: 0.5s;
	}

	.pale-blue-dot.animated .scattered-stars circle:nth-child(6) {
		animation-delay: 2.5s;
	}

	@keyframes sunbeam-shimmer {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.6;
		}
	}

	@keyframes pulse-glow {
		0%,
		100% {
			filter: drop-shadow(0 0 2px #4a9eff);
		}
		50% {
			filter: drop-shadow(0 0 4px #6bb6ff);
		}
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
		}
		50% {
			opacity: 1;
		}
	}
</style>
