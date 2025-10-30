<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Card from '$lib/components/Card.svelte';
	import PaleBlueDot from '$lib/components/PaleBlueDot.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	let isRegistering = $state(false);
	let username = $state('');
	let password = $state('');
</script>

<svelte:head>
	<title>Login - Tech for Humanity</title>
	<meta name="description" content="Sign in to Tech for Humanity" />
</svelte:head>

<div class="login-page">
	<div class="login-background" aria-hidden="true">
		<div class="cosmic-particles"></div>
	</div>

	<div class="login-container">
		<div class="login-header">
			<div class="logo">
				<PaleBlueDot size={100} animated={true} showSunbeam={false} />
			</div>
			<h1 class="brand-title">
				<span class="brand-tf">TF</span>
				<span class="brand-humanity">humanity</span>
			</h1>
			<p class="login-subtitle">
				{isRegistering ? 'Create your account' : 'Welcome back'}
			</p>
		</div>

		<Card variant="elevated" padding="lg" class="login-card">
			<form
				method="post"
				action={isRegistering ? '?/register' : '?/login'}
				use:enhance
				class="login-form"
			>
				<Input
					label="Username"
					name="username"
					placeholder="Enter your username"
					bind:value={username}
					fullWidth
					required
				/>

				<Input
					label="Password"
					name="password"
					type="password"
					placeholder="Enter your password"
					bind:value={password}
					helperText={isRegistering
						? 'Must be at least 6 characters'
						: 'Minimum 6 characters required'}
					fullWidth
					required
				/>

				{#if form?.message}
					<div class="error-message" role="alert">
						{form.message}
					</div>
				{/if}

				<div class="form-actions">
					<Button type="submit" variant="primary" size="lg" fullWidth>
						{isRegistering ? 'Create Account' : 'Sign In'}
					</Button>
				</div>
			</form>

			<div class="form-footer">
				<button class="toggle-mode" onclick={() => (isRegistering = !isRegistering)} type="button">
					{isRegistering ? 'Already have an account? Sign in' : "Don't have an account? Register"}
				</button>
			</div>
		</Card>

		<div class="login-footer">
			<p>
				<a href="/">← Back to home</a>
			</p>
		</div>
	</div>
</div>

<style>
	.login-page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}

	.login-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			ellipse at center,
			rgba(74, 158, 255, 0.1) 0%,
			transparent 70%
		);
		pointer-events: none;
	}

	.cosmic-particles {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(2px 2px at 20% 30%, white, transparent),
			radial-gradient(2px 2px at 60% 70%, white, transparent),
			radial-gradient(1px 1px at 50% 50%, white, transparent),
			radial-gradient(1px 1px at 80% 10%, white, transparent),
			radial-gradient(2px 2px at 90% 60%, white, transparent),
			radial-gradient(1px 1px at 33% 80%, white, transparent);
		background-size: 200% 200%;
		background-position: 0% 0%;
		opacity: 0.4;
		animation: twinkle 8s ease-in-out infinite;
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
		}
		50% {
			opacity: 0.6;
		}
	}

	.login-container {
		width: 100%;
		max-width: 450px;
		z-index: 10;
	}

	.login-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.logo {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.brand-title {
		margin: 0 0 0.5rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.brand-tf {
		font-size: 3rem;
		font-weight: 900;
		color: #ffffff;
		text-shadow: 0 0 20px rgba(74, 158, 255, 0.6);
		letter-spacing: -0.05em;
	}

	.brand-humanity {
		font-size: 1.25rem;
		font-weight: 300;
		color: #93c5fd;
		letter-spacing: 0.3em;
		text-transform: lowercase;
	}

	.login-subtitle {
		font-size: 1.125rem;
		color: rgba(191, 219, 254, 0.8);
		margin: 0;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.error-message {
		padding: 1rem;
		background: rgba(251, 146, 60, 0.1);
		border: 1px solid rgba(251, 146, 60, 0.3);
		border-radius: 0.5rem;
		color: #fdb574;
		font-size: 0.875rem;
		text-align: center;
	}

	.form-actions {
		margin-top: 0.5rem;
	}

	.form-footer {
		margin-top: 1.5rem;
		text-align: center;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(74, 158, 255, 0.2);
	}

	.toggle-mode {
		background: none;
		border: none;
		color: #4a9eff;
		font-size: 0.875rem;
		cursor: pointer;
		transition: color 0.3s ease;
		padding: 0;
		font-family: inherit;
	}

	.toggle-mode:hover {
		color: #6bb6ff;
		text-decoration: underline;
	}

	.login-footer {
		text-align: center;
		margin-top: 2rem;
	}

	.login-footer p {
		margin: 0;
	}

	.login-footer a {
		color: rgba(191, 219, 254, 0.8);
		text-decoration: none;
		font-size: 0.875rem;
		transition: color 0.3s ease;
	}

	.login-footer a:hover {
		color: #93c5fd;
	}

	@media (max-width: 480px) {
		.login-page {
			padding: 1rem;
		}

		.brand-tf {
			font-size: 2.5rem;
		}

		.brand-humanity {
			font-size: 1rem;
		}
	}
</style>
