<script lang="ts">
	/**
	 * Card Component
	 * Reusable content card with cosmic styling from the Pale Blue Dot design system
	 */

	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title?: string;
		description?: string;
		variant?: 'default' | 'elevated' | 'outlined';
		padding?: 'sm' | 'md' | 'lg';
		children?: Snippet;
	}

	let {
		title,
		description,
		variant = 'default',
		padding = 'md',
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variantClasses = {
		default: 'card-default',
		elevated: 'card-elevated',
		outlined: 'card-outlined'
	};

	const paddingClasses = {
		sm: 'card-padding-sm',
		md: 'card-padding-md',
		lg: 'card-padding-lg'
	};
</script>

<div class="card {variantClasses[variant]} {paddingClasses[padding]} {className}" {...rest}>
	{#if title || description}
		<div class="card-header">
			{#if title}
				<h3 class="card-title">{title}</h3>
			{/if}
			{#if description}
				<p class="card-description">{description}</p>
			{/if}
		</div>
	{/if}

	{#if children}
		<div class="card-content">
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.card {
		border-radius: 1rem;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	/* Variants */
	.card-default {
		background: linear-gradient(
			135deg,
			rgba(26, 30, 125, 0.3) 0%,
			rgba(26, 46, 125, 0.2) 100%
		);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(74, 158, 255, 0.2);
	}

	.card-elevated {
		background: linear-gradient(
			135deg,
			rgba(26, 30, 125, 0.4) 0%,
			rgba(26, 46, 125, 0.3) 100%
		);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(74, 158, 255, 0.3);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.card-elevated:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
		border-color: rgba(74, 158, 255, 0.5);
	}

	.card-outlined {
		background: transparent;
		backdrop-filter: blur(5px);
		border: 2px solid rgba(74, 158, 255, 0.4);
	}

	.card-outlined:hover {
		border-color: rgba(74, 158, 255, 0.6);
		background: rgba(26, 30, 125, 0.1);
	}

	/* Padding variants */
	.card-padding-sm {
		padding: 1rem;
	}

	.card-padding-md {
		padding: 1.5rem;
	}

	.card-padding-lg {
		padding: 2rem;
	}

	/* Header */
	.card-header {
		margin-bottom: 1rem;
	}

	.card-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #e8f4ff;
		margin: 0 0 0.5rem 0;
		line-height: 1.3;
	}

	.card-description {
		font-size: 0.875rem;
		color: rgba(191, 219, 254, 0.7);
		margin: 0;
		line-height: 1.5;
	}

	/* Content */
	.card-content {
		color: #bfdbfe;
		line-height: 1.6;
	}

	/* Cosmic glow effect on hover for elevated cards */
	.card-elevated::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(
			circle,
			rgba(74, 158, 255, 0.1) 0%,
			transparent 70%
		);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	.card-elevated:hover::before {
		opacity: 1;
	}
</style>
