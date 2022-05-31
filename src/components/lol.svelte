<script lang="ts">
	import { iconState } from '../utils/interface';
	//icon
	export let name: string;
	export let handleClick: (type: string) => any;
	export let state: iconState;
</script>

<img
	src="/{name}.png"
	alt={name}
	on:click={() => state !== iconState.disabled && handleClick(name)}
	style="opacity: {state}; cursor: {state === iconState.disabled ? 'default' : 'pointer'};"
/>

<style>
	img {
		transition: all 0.15s;
		width: 100%;
	}
</style>
