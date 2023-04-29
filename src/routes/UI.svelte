<script lang="ts">
	import toast, { Toaster } from 'svelte-french-toast';
	import { money, jackpot, freeSpins, bonusJackpotCollected } from '../lib/store/game';

	let moneyValue: number;
	let jackpotValue: boolean;
	let freeSpinsValue: number;
	let bonusJackpotCollectedValue: number;

	money.subscribe((value) => {
		moneyValue = value;
	});

	jackpot.subscribe((value) => {
		if (value === true) {
			toast.success(`Jackpot!!!`);
			freeSpins.set(freeSpinsValue + 10);
		}
	});

	freeSpins.subscribe((value) => {
		freeSpinsValue = value;
	});

	bonusJackpotCollected.subscribe((value) => {
		bonusJackpotCollectedValue = value;
	});

	jackpot.subscribe((value) => {
		jackpotValue = value;
	});
</script>

<Toaster />
<div>
	Money: {moneyValue}
</div>
<div>
	Jackpot: {jackpotValue}
</div>
<div>
	Free Spins: {freeSpinsValue}
</div>
<div>
	Bonus Jackpot Collected: {bonusJackpotCollectedValue}
</div>
<slot />

<style>
</style>
