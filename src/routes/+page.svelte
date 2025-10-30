<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PaleBlueDot from '$lib/components/PaleBlueDot.svelte';
</script>

<svelte:head>
	<title>Tech for Humanity</title>
	<meta
		name="description"
		content="Technology serving humanity, inspired by the cosmic perspective."
	/>
</svelte:head>

<div class="homepage">
	<!-- Hero Section -->
	<Hero
		title="TF"
		subtitle="humanity"
		description="A Technology collective in serivce of our pale blue dot."
	/>

	<!-- Philosophy Section -->
	<section id="philosophy" class="section philosophy-section">
		<div class="container">
			<h2 class="section-title">Philosophy</h2>
			<div class="philosophy-content">
				<div class="dot-wrapper">
					<PaleBlueDot size={400} />
				</div>
				<div class="philosophy-text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</p>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Ventures Section -->
	<section id="ventures" class="section ventures-section">
		<div class="container">
			<h2 class="section-title">Ventures</h2>
			<p class="lead-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
			<p class="lead-text">
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="section contact-section">
		<div class="container">
			<h2 class="section-title">Contact Us</h2>
			<p class="lead-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
			<p class="lead-text">
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</div>
	</section>
</div>

<style>
	.homepage {
		min-height: 100vh;
	}

	.section {
		padding: 6rem 0;
		position: relative;
	}

	.section-title {
		text-align: center;
		font-size: clamp(2rem, 5vw, 3rem);
		margin-bottom: 3rem;
		background: linear-gradient(135deg, #93c5fd, #a78bfa);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.lead-text {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 2rem;
		font-size: 1.25rem;
		line-height: 1.8;
		color: #bfdbfe;
	}

	/* Philosophy Section */
	.philosophy-section {
		background: radial-gradient(ellipse at center, rgba(74, 158, 255, 0.05) 0%, transparent 70%);
	}

	.philosophy-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.dot-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.philosophy-text {
		max-width: 800px;
	}

	.philosophy-text p {
		font-size: 1.125rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
		color: rgba(191, 219, 254, 0.9);
		text-align: center;
	}

	/* Ventures Section */
	.ventures-section {
		background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
	}

	/* Contact Section */
	.contact-section {
		background: radial-gradient(ellipse at center, rgba(74, 158, 255, 0.05) 0%, transparent 70%);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.section {
			padding: 4rem 0;
		}

		.philosophy-content {
			gap: 2rem;
		}

		.philosophy-text p {
			font-size: 1rem;
		}

		.lead-text {
			font-size: 1.125rem;
		}
	}

	@media (max-width: 480px) {
		.section {
			padding: 3rem 0;
		}

		.dot-wrapper {
			max-width: 300px;
			margin: 0 auto;
		}
	}
</style>
