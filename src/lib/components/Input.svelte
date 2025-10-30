<script lang="ts">
	/**
	 * Input Component
	 * Reusable input field with cosmic styling from the Pale Blue Dot design system
	 */

	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		label?: string;
		error?: string;
		helperText?: string;
		fullWidth?: boolean;
	}

	let {
		label,
		error,
		helperText,
		fullWidth = false,
		id,
		name,
		type = 'text',
		placeholder = '',
		disabled = false,
		class: className = '',
		...rest
	}: Props = $props();

	// Generate a unique ID if not provided
	const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="input-wrapper" class:full-width={fullWidth}>
	{#if label}
		<label for={inputId} class="input-label">
			{label}
		</label>
	{/if}

	<input
		{...rest}
		{type}
		{name}
		{placeholder}
		{disabled}
		id={inputId}
		class="input {className}"
		class:error
		aria-invalid={error ? 'true' : 'false'}
		aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
	/>

	{#if error}
		<p class="input-error" id="{inputId}-error">
			{error}
		</p>
	{:else if helperText}
		<p class="input-helper" id="{inputId}-helper">
			{helperText}
		</p>
	{/if}
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.input-wrapper.full-width {
		width: 100%;
	}

	.input-label {
		font-size: 0.875rem;
		font-weight: 500;
		color: #bfdbfe;
		display: block;
	}

	.input {
		width: 100%;
		padding: 0.75rem 1rem;
		font-size: 1rem;
		font-family: inherit;
		color: #e8f4ff;
		background: rgba(26, 30, 125, 0.2);
		border: 2px solid rgba(74, 158, 255, 0.3);
		border-radius: 0.5rem;
		outline: none;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
	}

	.input::placeholder {
		color: rgba(191, 219, 254, 0.4);
	}

	.input:hover:not(:disabled) {
		border-color: rgba(74, 158, 255, 0.5);
		background: rgba(26, 30, 125, 0.3);
	}

	.input:focus {
		border-color: #4a9eff;
		background: rgba(26, 30, 125, 0.4);
		box-shadow:
			0 0 0 3px rgba(74, 158, 255, 0.2),
			0 0 20px rgba(74, 158, 255, 0.3);
	}

	.input:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		background: rgba(26, 30, 125, 0.1);
	}

	.input.error {
		border-color: #fb923c;
	}

	.input.error:focus {
		border-color: #f97316;
		box-shadow:
			0 0 0 3px rgba(251, 146, 60, 0.2),
			0 0 20px rgba(251, 146, 60, 0.3);
	}

	.input-error {
		font-size: 0.875rem;
		color: #fdb574;
		margin: 0;
	}

	.input-helper {
		font-size: 0.875rem;
		color: rgba(191, 219, 254, 0.6);
		margin: 0;
	}

	/* Autofill styling */
	.input:-webkit-autofill,
	.input:-webkit-autofill:hover,
	.input:-webkit-autofill:focus {
		-webkit-text-fill-color: #e8f4ff;
		-webkit-box-shadow: 0 0 0 1000px rgba(26, 30, 125, 0.4) inset;
		transition: background-color 5000s ease-in-out 0s;
		border-color: #4a9eff;
	}
</style>
