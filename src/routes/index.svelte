<script lang="ts">
	import { iconState, type PKMNTypeString } from '../utils/interface';
	import Icon from '../components/icon.svelte';
	import { combine, defaultType } from '../utils/function';
	const arrDefaultType = Object.entries(defaultType);
	let activeType: string[] = [];
	let combined = true;
	let combination:
		| {
				offensive: {
					tresEfficace: string[];
					efficace: string[];
					neutre: string[];
					peuEfficace: string[];
					pasEfficace: string[];
					immun: string[];
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
		let result = combine(activeType[0] as PKMNTypeString, activeType[1] as PKMNTypeString);
		let temp = {
			offensive: {
				tresEfficace: [] as string[],
				efficace: [] as string[],
				neutre: [] as string[],
				peuEfficace: [] as string[],
				pasEfficace: [] as string[],
				immun: [] as string[]
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
		for (const [key, value] of Object.entries(result.offensive)) {
			if (value === 4) temp.offensive.tresEfficace.push(key);
			if (value === 2) temp.offensive.efficace.push(key);
			if (value === 1) temp.offensive.neutre.push(key);
			if (value === 0.5) temp.offensive.peuEfficace.push(key);
			if (value === 0.25) temp.offensive.pasEfficace.push(key);
			if (value === 0) temp.offensive.immun.push(key);
		}
		for (const [key, value] of Object.entries(result.defensive)) {
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
	<div class="result" style="display: {combined ? 'flex' : 'none'}">
		<h2>Result</h2>
		<div class="combinationWrapper">
			<div class="resultWrapper">
				<h3>Attack</h3>
				{#if combination.offensive.tresEfficace[0]}
					<div class="announce">
						<h4>Very good (x4)</h4>
						<div class="iconsGrid">
							{#each combination.offensive.tresEfficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.offensive.efficace[0]}
					<div class="announce">
						<h4>Good (x2)</h4>
						<div class="iconsGrid">
							{#each combination.offensive.efficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.offensive.neutre[0]}
					<div class="announce">
						<h4>OK (x1)</h4>
						<div class="iconsGrid">
							{#each combination.offensive.neutre as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.offensive.peuEfficace[0]}
					<div class="announce">
						<h4>Bad (x0.5)</h4>
						<div class="iconsGrid">
							{#each combination.offensive.peuEfficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.offensive.pasEfficace[0]}
					<div class="announce">
						<h4>Very bad (x0.25)</h4>
						<div class="iconsGrid">
							{#each combination.offensive.pasEfficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.offensive.immun[0]}
					<div class="announce">
						<h4>No effect (x0)</h4>
						<div class="iconsGrid">
							{#each combination.offensive.immun as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="combinationWrapper">
			<div class="resultWrapper">
				<h3>Defense</h3>
				{#if combination.defensive.tresEfficace[0]}
					<div class="announce">
						<h4>Very good (x0.25)</h4>
						<div class="iconsGrid">
							{#each combination.defensive.tresEfficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.defensive.efficace[0]}
					<div class="announce">
						<h4>Good (x0.5)</h4>
						<div class="iconsGrid">
							{#each combination.defensive.efficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.defensive.neutre[0]}
					<div class="announce">
						<h4>OK (x1)</h4>
						<div class="iconsGrid">
							{#each combination.defensive.neutre as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.defensive.peuEfficace[0]}
					<div class="announce">
						<h4>Bad (x2)</h4>
						<div class="iconsGrid">
							{#each combination.defensive.peuEfficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.defensive.pasEfficace[0]}
					<div class="announce">
						<h4>Very bad (x4)</h4>
						<div class="iconsGrid">
							{#each combination.defensive.pasEfficace as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
				{#if combination.defensive.immun[0]}
					<div class="announce">
						<h4>No effect (x0)</h4>
						<div class="iconsGrid">
							{#each combination.defensive.immun as t}
								<img src="/{t}.png" alt={t} />
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.icons {
		display: grid;
		grid-auto-flow: row;
		row-gap: 40px;
		column-gap: 10px;
		margin: 0 20px;
		padding-bottom: 10px;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
	.announce {
		text-align: center;
		width: 100%;
	}
	.iconsGrid {
		display: grid;
		grid-auto-flow: row;
		row-gap: 40px;
		column-gap: 10px;
		margin: 0 20px;
		padding-bottom: 10px;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	}
	.iconsGrid img {
		width: 100%;
	}
	.result {
		flex-direction: column;
		align-items: center;
	}
	.combinationWrapper {
		display: flex;
		width: 100%;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		flex-direction: row;
	}
	.resultWrapper {
		display: flex;
		width: 95%;
		flex-direction: column;
		align-items: center;
		align-content: center;
	}
</style>
