<script lang="ts">
	import { defaultType, iconState, type PKMNTypeString } from '$utils/pokeTypes/interface';
	import Icon from '$components/pokeType/icon.svelte';
	import { fade } from 'svelte/transition';
	import { combineDefense, combineOffense } from '$utils/pokeTypes/function';
	import Offense from '$components/pokeType/offense.svelte';
	import Defense from '$components/pokeType/defense.svelte';
	const arrDefaultType = Object.entries(defaultType);
	let activeType: string[] = [];
	let combination:
		| {
				offensive: {
					[x in string]: {
						efficace: string[];
						neutre: string[];
						peuEfficace: string[];
						immun: string[];
					};
				};
				defensive: {
					tresEfficace: string[];
					efficace: string[];
					neutre: string[];
					peuEfficace: string[];
					pasEfficace: string[];
					immun: string[];
				};
		  }
		| undefined = undefined;
	let full = false;
	const clickType = (type: string) => {
		if (activeType.includes(type)) {
			return (activeType = activeType.filter((t) => t !== type));
		}
		activeType = [...activeType, type];
	};
	$: {
		if (activeType.length === 2) full = true;
		else full = false;
		if (activeType.length > 0) {
			generateCombination();
		} else {
			combination = undefined;
		}
	}
	const generateCombination = () => {
		let defense = combineDefense(activeType[0] as PKMNTypeString, activeType[1] as PKMNTypeString);
		let offense1 = combineOffense(activeType[0] as PKMNTypeString);
		let temp = {
			offensive: {
				[activeType[0]]: {
					efficace: [] as string[],
					neutre: [] as string[],
					peuEfficace: [] as string[],
					immun: [] as string[]
				},
				[activeType[1]]: {
					efficace: [] as string[],
					neutre: [] as string[],
					peuEfficace: [] as string[],
					immun: [] as string[]
				}
			},
			defensive: {
				tresEfficace: [] as string[],
				efficace: [] as string[],
				neutre: [] as string[],
				peuEfficace: [] as string[],
				pasEfficace: [] as string[],
				immun: [] as string[]
			}
		};
		for (const [key, value] of Object.entries(offense1)) {
			if (value === 2) temp.offensive[activeType[0]].efficace.push(key);
			if (value === 1) temp.offensive[activeType[0]].neutre.push(key);
			if (value === 0.5) temp.offensive[activeType[0]].peuEfficace.push(key);
			if (value === 0) temp.offensive[activeType[0]].immun.push(key);
		}
		if (activeType[1]) {
			let offense2 = combineOffense(activeType[1] as PKMNTypeString);
			for (const [key, value] of Object.entries(offense2)) {
				if (value === 2) temp.offensive[activeType[1]].efficace.push(key);
				if (value === 1) temp.offensive[activeType[1]].neutre.push(key);
				if (value === 0.5) temp.offensive[activeType[1]].peuEfficace.push(key);
				if (value === 0) temp.offensive[activeType[1]].immun.push(key);
			}
		}
		for (const [key, value] of Object.entries(defense)) {
			if (value === 0.25) temp.defensive.tresEfficace.push(key);
			if (value === 0.5) temp.defensive.efficace.push(key);
			if (value === 1) temp.defensive.neutre.push(key);
			if (value === 2) temp.defensive.peuEfficace.push(key);
			if (value === 4) temp.defensive.pasEfficace.push(key);
			if (value === 0) temp.defensive.immun.push(key);
		}
		combination = { ...temp };
	};
</script>

<svelte:head>
	<title>PokeType</title>
</svelte:head>
<div class="icons">
	{#each arrDefaultType as icon}
		<Icon
			name={icon[0]}
			handleClick={clickType}
			state={activeType.includes(icon[0])
				? iconState.active
				: full
				? iconState.disabled
				: iconState.inactive}
		/>
	{/each}
</div>
{#if combination}
	<div class="result" in:fade out:fade>
		<div class="offenseWrapper">
			<Offense type={activeType[0]} specials={combination.offensive[activeType[0]]} />
			{#if activeType[1]}
				<Offense type={activeType[1]} specials={combination.offensive[activeType[1]]} />
			{/if}
		</div>
		<Defense type={activeType} bind:specials={combination.defensive} />
	</div>
{:else}
	<div class="presentation">
		<p>Click on a type to see its weaknesses and resistances !</p>
	</div>
{/if}

<style>
	@media (max-width: 669px) {
		.offenseWrapper {
			flex-direction: column;
		}
	}
	.presentation {
		text-align: center;
		padding: 7px;
	}
	.icons {
		display: grid;
		grid-auto-flow: row;
		row-gap: 10px;
		column-gap: 10px;
		margin: 0 20px;
		padding-bottom: 10px;
		grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
	}
	.result {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 20px 10px 20px;
		height: 100%;
	}
	.offenseWrapper {
		display: flex;
		width: 100%;
		align-items: center;
	}
</style>
