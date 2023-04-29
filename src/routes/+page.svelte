<script>
	import UI from './UI.svelte';
	export const ssr = false;
	import { onMount } from 'svelte';

	let loading = true;

	onMount(async () => {
		console.log('loading: ', loading);
		const game = await import('../game/game');
		loading = false;
		game.launch('game-container');
	});
</script>

{#if loading}
	<div class="loading">
		Loading...
	</div>
{:else}
	<UI>
		<div id="game-container" />
	</UI>
{/if}
