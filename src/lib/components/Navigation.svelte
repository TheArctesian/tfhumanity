<script lang="ts">
	/**
	 * Navigation Component
	 * Sticky navigation bar that appears on scroll
	 * Features animated transition from hero branding to navbar
	 */

	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let isVisible = $state(false);

	// Show navbar when user scrolls past 50vh
	$effect(() => {
		isVisible = scrollY > window.innerHeight * 0.5;
	});

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const navLinks = [
		{ label: 'Philosophy', href: '#philosophy' },
		{ label: 'Ventures', href: '#ventures' },
		{ label: 'Contact Us', href: '#contact' },
		{ label: 'Login', href: '/login' }
	];
</script>

<nav class="navigation" class:visible={isVisible}>
	<div class="nav-container">
		<!-- Logo/Brand -->
		<a href="/" class="nav-brand">
			<span class="nav-brand-tf">TF</span><span class="nav-brand-humanity">humanity</span>
		</a>

		<!-- Navigation Links -->
		<ul class="nav-links">
			{#each navLinks as link}
				<li>
					<a href={link.href} class="nav-link">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.navigation {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(10, 14, 39, 0.8);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(74, 158, 255, 0.1);
		transform: translateY(-100%);
		opacity: 0;
		transition:
			transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
			opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.navigation.visible {
		transform: translateY(0);
		opacity: 1;
	}

	.nav-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-brand {
		font-size: 1.5rem;
		font-weight: 900;
		text-decoration: none;
		display: flex;
		align-items: baseline;
		gap: 0;
		transition: all 0.3s ease;
	}

	.nav-brand:hover {
		transform: scale(1.05);
	}

	.nav-brand-tf {
		color: #ffffff;
		text-shadow:
			0 0 20px rgba(74, 158, 255, 0.6),
			0 0 40px rgba(74, 158, 255, 0.4);
		letter-spacing: -0.05em;
	}

	.nav-brand-humanity {
		color: #93c5fd;
		font-weight: 300;
		font-size: 0.5em;
		letter-spacing: 0.1em;
		text-transform: lowercase;
		opacity: 0.9;
		margin-left: 0.1em;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-link {
		color: #bfdbfe;
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		transition: all 0.3s ease;
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, #4a9eff, #8b5cf6);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease;
	}

	.nav-link:hover {
		color: #ffffff;
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.nav-container {
			padding: 0.75rem 1.5rem;
		}

		.nav-brand {
			font-size: 1.25rem;
		}

		.nav-links {
			gap: 1rem;
		}

		.nav-link {
			font-size: 0.875rem;
		}
	}

	@media (max-width: 640px) {
		.nav-links {
			gap: 0.75rem;
		}

		.nav-link {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 480px) {
		.nav-container {
			padding: 0.75rem 1rem;
		}

		.nav-brand {
			font-size: 1.1rem;
		}

		.nav-links {
			display: none;
		}

		/* Show only Login on mobile */
		.nav-links li:last-child {
			display: block;
		}
	}
</style>
