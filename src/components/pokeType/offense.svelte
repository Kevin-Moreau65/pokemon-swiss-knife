<script lang="ts">
	export let type: string;
	export let specials: {
		efficace: string[];
		neutre: string[];
		peuEfficace: string[];
		immun: string[];
	};
</script>

<div class="offense">
	<h3>Attack: {type[0].toUpperCase() + type.slice(1)}</h3>
	{#if specials.efficace[0]}
		<div class="categorie strong">
			<h4>
				Strong against (x2), {specials.efficace.length} type{specials.efficace.length > 1
					? 's'
					: ''}
			</h4>
			<div class="iconsGrid">
				{#each specials.efficace as t}
					<img src="/{t}.png" alt={t} />
				{/each}
			</div>
		</div>
	{/if}
	{#if specials.neutre[0]}
		<div class="categorie ok">
			<h4>OK against (x1), {specials.neutre.length} type{specials.neutre.length > 1 ? 's' : ''}</h4>
			<div class="iconsGrid">
				{#each specials.neutre as t}
					<img src="/{t}.png" alt={t} />
				{/each}
			</div>
		</div>
	{/if}
	{#if specials.peuEfficace[0]}
		<div class="categorie weak">
			<h4>
				Weak against (x0.5), {specials.peuEfficace.length} type{specials.peuEfficace.length > 1
					? 's'
					: ''}
			</h4>
			<div class="iconsGrid">
				{#each specials.peuEfficace as t}
					<img src="/{t}.png" alt={t} />
				{/each}
			</div>
		</div>
	{/if}
	{#if specials.immun[0]}
		<div class="categorie immun">
			<h4>
				No effect against (x0), {specials.immun.length} type{specials.immun.length > 1 ? 's' : ''}
			</h4>
			<div class="iconsGrid">
				{#each specials.immun as t}
					<img src="/{t}.png" alt={t} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.offense {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		height: 100%;
		margin: 10px;
		width: 100%;
	}
	.iconsGrid {
		display: grid;
		grid-auto-flow: row;
		row-gap: 10px;
		column-gap: 10px;
		padding-bottom: 10px;
		grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
	}
	.iconsGrid img {
		width: 100%;
	}
	.categorie {
		text-align: center;
		width: 100%;
		padding: 0 5px;
		margin: 5px 0;
		border-radius: 12px;
		height: 100%;
	}
	.strong {
		background-color: rgba(48, 218, 48, 0.5);
	}
	.ok {
		background-color: rgba(253, 192, 50, 0.53);
	}
	.weak {
		background-color: rgba(255, 120, 120, 0.503);
	}
	.immun {
		background-color: rgba(158, 158, 158, 0.504);
	}
</style>
