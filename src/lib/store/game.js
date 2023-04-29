import { writable } from 'svelte/store';

const money = writable(100);

const jackpot = writable(false);

const bet = writable(1);

const win = writable(0);

const freeSpins = writable(0);

const bonusJackpotCollected = writable(0);

export { money, jackpot, bet, win, freeSpins, bonusJackpotCollected };
