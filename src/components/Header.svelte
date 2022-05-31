<script lang="ts">
	export let theme = 'light';
	const switchTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light';
		console.log(theme);
	};
</script>

<nav
	style="--header-color: {theme === 'light'
		? 'rgb(232, 253, 255)'
		: 'rgb(47, 47, 47)'};--font-color: {theme === 'light' ? 'black' : 'white'}"
>
	<ul>
		<li><a href="/">Home</a></li>
		<li style="float:right" class="active" on:click={switchTheme}>
			<p>Dark Theme</p>
		</li>
	</ul>
</nav>

<style>
	a {
		all: unset;
		color: white;
	}
	nav {
		color: white;
		margin-bottom: 20px;
		margin-top: 0px;
		-webkit-box-shadow: 0px -9px 15px 12px #000000;
		box-shadow: 0px -9px 15px 12px #000000;
		position: sticky;
		top: 0;
		z-index: 1;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: rgb(33, 33, 33);
		transition: all 0.2s;
	}

	li {
		float: left;
		cursor: pointer;
	}

	li a,
	li p {
		display: block;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
	/* Change the link color to #111 (black) on hover */
	li a:hover {
		background-color: #111;
	}
	p {
		padding: 0;
		margin: 0;
	}
	.active {
		background-color: var(--accent-color);
	}
</style>
