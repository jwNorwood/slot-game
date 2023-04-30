<script lang="ts">
	import toast, { Toaster } from 'svelte-french-toast';
	import { money, jackpot, freeSpins, bonusJackpotCollected } from '../lib/store/game';





	jackpot.subscribe((value) => {
		if (value === true) {
			toast.success(`Jackpot!!!`);
			freeSpins.set($freeSpins + 10);
		}
	});


</script>

<Toaster />
<div>
	Money: {$money}
</div>
<div>
	Jackpot: {$jackpot}
</div>
<div>
	Free Spins: {$freeSpins}
</div>
<div>
	Bonus Jackpot Collected: {$bonusJackpotCollected}
</div>
<slot />

<style>
</style>
