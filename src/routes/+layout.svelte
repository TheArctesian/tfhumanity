<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<!-- Cosmic background layer -->
	<div class="cosmic-background" aria-hidden="true">
		<div class="stars-layer"></div>
		<div class="gradient-layer"></div>
	</div>

	<!-- Navigation -->
	<Navigation />

	<!-- Main content -->
	<main class="app-content">
		{@render children?.()}
	</main>
</div>

<style>
	:global(body) {
		font-family: 'Inter', var(--font-sans);
	}

	.app {
		position: relative;
		min-height: 100vh;
	}

	.cosmic-background {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		overflow: hidden;
	}

	.stars-layer {
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(2px 2px at 20% 30%, white, transparent),
			radial-gradient(2px 2px at 60% 70%, white, transparent),
			radial-gradient(1px 1px at 50% 50%, white, transparent),
			radial-gradient(1px 1px at 80% 10%, white, transparent),
			radial-gradient(2px 2px at 90% 60%, white, transparent),
			radial-gradient(1px 1px at 33% 80%, white, transparent),
			radial-gradient(1px 1px at 15% 60%, white, transparent),
			radial-gradient(1px 1px at 70% 25%, white, transparent);
		background-size: 200% 200%;
		background-position: 0% 0%;
		opacity: 0.5;
		animation: twinkle-stars 20s linear infinite;
	}

	@keyframes twinkle-stars {
		0%,
		100% {
			opacity: 0.4;
			background-position: 0% 0%;
		}
		50% {
			opacity: 0.7;
			background-position: 100% 100%;
		}
	}

	.gradient-layer {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse at 30% 20%, rgba(74, 158, 255, 0.08) 0%, transparent 50%),
			radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
			radial-gradient(ellipse at 50% 50%, rgba(26, 46, 125, 0.1) 0%, transparent 70%);
		animation: cosmic-drift 30s ease-in-out infinite;
	}

	@keyframes cosmic-drift {
		0%,
		100% {
			opacity: 0.8;
		}
		50% {
			opacity: 1;
		}
	}

	.app-content {
		position: relative;
		z-index: 1;
	}
</style>
