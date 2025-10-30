<script lang="ts">
	/**
	 * Button Component
	 * Reusable button with variants based on the Pale Blue Dot design system
	 */

	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
		size?: 'sm' | 'md' | 'lg';
		fullWidth?: boolean;
		children?: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		fullWidth = false,
		type = 'button',
		disabled = false,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variantClasses = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		ghost: 'btn-ghost',
		danger: 'btn-danger'
	};

	const sizeClasses = {
		sm: 'btn-sm',
		md: 'btn-md',
		lg: 'btn-lg'
	};
</script>

<button
	{type}
	{disabled}
	class="btn {variantClasses[variant]} {sizeClasses[size]} {className}"
	class:full-width={fullWidth}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</button>

<style>
	.btn {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-weight: 600;
		border-radius: 0.5rem;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
		text-decoration: none;
		user-select: none;
		outline: none;
	}

	.btn:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	/* Sizes */
	.btn-sm {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}

	.btn-md {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
	}

	.btn-lg {
		padding: 1rem 2rem;
		font-size: 1.125rem;
	}

	/* Primary variant - Cosmic blue with glow */
	.btn-primary {
		background: linear-gradient(135deg, #4a9eff 0%, #1a7eff 100%);
		color: #ffffff;
		box-shadow: 0 0 20px rgba(74, 158, 255, 0.4);
	}

	.btn-primary:hover:not(:disabled) {
		background: linear-gradient(135deg, #6bb6ff 0%, #4a9eff 100%);
		box-shadow: 0 0 30px rgba(74, 158, 255, 0.6);
		transform: translateY(-2px);
	}

	.btn-primary:active:not(:disabled) {
		transform: translateY(0);
	}

	/* Secondary variant - Nebula purple */
	.btn-secondary {
		background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
		color: #ffffff;
		box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
	}

	.btn-secondary:hover:not(:disabled) {
		background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
		box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
		transform: translateY(-2px);
	}

	.btn-secondary:active:not(:disabled) {
		transform: translateY(0);
	}

	/* Ghost variant - Transparent with border */
	.btn-ghost {
		background: transparent;
		color: #93c5fd;
		border: 2px solid #4a9eff;
		box-shadow: none;
	}

	.btn-ghost:hover:not(:disabled) {
		background: rgba(74, 158, 255, 0.1);
		border-color: #6bb6ff;
		color: #bfdbfe;
		box-shadow: 0 0 20px rgba(74, 158, 255, 0.3);
	}

	/* Danger variant - Sunray with warning */
	.btn-danger {
		background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
		color: #ffffff;
		box-shadow: 0 0 20px rgba(251, 146, 60, 0.4);
	}

	.btn-danger:hover:not(:disabled) {
		background: linear-gradient(135deg, #fdb574 0%, #fb923c 100%);
		box-shadow: 0 0 30px rgba(251, 146, 60, 0.6);
		transform: translateY(-2px);
	}

	.btn-danger:active:not(:disabled) {
		transform: translateY(0);
	}

	/* Full width */
	.full-width {
		width: 100%;
	}

	/* Focus states */
	.btn:focus-visible {
		outline: 2px solid #4a9eff;
		outline-offset: 2px;
	}
</style>
