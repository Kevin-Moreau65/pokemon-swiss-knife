<script context="module" lang="ts">
	import { browser } from '$app/env';

	if (browser) {
		const localTheme = localStorage.getItem('theme');
		if (!localTheme) {
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<script lang="ts">
	import Header from '../components/Header.svelte';
	let theme: string;
	if (browser) theme = localStorage.getItem('theme') as string;
</script>

<body style="--bg-color-body: {theme === 'light' ? 'rgb(232, 253, 255)' : 'rgb(47, 47, 47)'}">
	<div class="global" style="color: {theme === 'light' ? 'black' : 'white'}">
		<Header bind:theme />
		<slot />
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	:global(html),
	:global(body) {
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
		margin: 0;
		padding: 0;
		background-color: var(--bg-color-body);
		transition: all 0.2s;
		min-height: 100vh;
		--accent-color: rgb(53, 122, 233);
		overflow: hidden;
	}
	/* Chrome, Edge, and Safari */
	.global::-webkit-scrollbar {
		width: 10px;
	}
	.global {
		height: 100vh;
		overflow-y: scroll;
		scrollbar-width: thin;
		scrollbar-color: var(--accent-color) var(--bg-color-body);
	}
	@media (max-width: 800px) {
		.global {
			overflow-y: auto;
		}
	}
	.global::-webkit-scrollbar-track {
		background: var(--bg-color-body);
	}

	.global::-webkit-scrollbar-thumb {
		background-color: var(--accent-color);
		border-radius: 10px;
		border: 3px solid var(--bg-color-body);
	}
</style>
