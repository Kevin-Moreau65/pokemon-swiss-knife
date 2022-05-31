<script lang="ts">
	import Header from '../components/Header.svelte';
	let theme: string;
</script>

<body style="--bg-color-body: {theme === 'light' ? 'rgb(232, 253, 255)' : 'rgb(47, 47, 47)'}">
	<Header bind:theme />
	<div style="color: {theme === 'light' ? 'black' : 'white'};">
		<slot />
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	:global(html),
	:global(body) {
		font-family: 'Open Sans', sans-serif;
		margin: 0;
		padding: 0;
		background-color: var(--bg-color-body);
		transition: all 0.2s;
		min-height: 100vh;
		--accent-color: rgb(53, 122, 233);
	}
</style>
