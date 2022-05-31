<script lang="ts">
	export let content: string | number;
	export let action: () => any;
	export let width: string | number;
	export let height: string | number = '';
</script>

<button on:click={action} style="width: {width};height: {height};">{content}</button>

<style>
	button {
		all: unset;
		-webkit-box-shadow: 0px 0px 16px 3px #000000;
		box-shadow: 0px 0px 16px 1px #000000;
		padding: 10px;
		cursor: pointer;
		transform: scale(1);
		transition: all 0.1s;
		border-radius: 10px;
		background-color: var(--accent-color);
		color: white;
	}
	button:hover {
		transform: scale(1.1);
	}
	button:active {
		transform: scale(0.9);
	}
</style>
