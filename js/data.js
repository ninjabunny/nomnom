var robinson = [
	{value: -1},
	{value: -1},
	{value: -1},
	{value: -1},
	{value: -1},
	{value: 0},
	{value: 0},
	{value: 0},
	{value: 0},
	{value: 0},
	{value: 0},
	{value: 0},
	{value: 1},
	{value: 1},
	{value: 1},
	{value: 2},
	{value: 0},
	{value: 0, ability: "+2 Life"}
];

var age = [
	{value: 0},
	{value: -4},
	{value: -5},
	{value: -3},
	{value: 0},
	{value: -1},
	{value: -2},
	{value: -2},
	{value: -2},
	{value: 0, ability: "*Highest = 0"},
	{value: 0, ability: "*Highest = 0"},
	{value: 0, ability: "*STOP"}
];

var hazard = [
	{value: 0, ability: "Exchange 2", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "Exchange 2", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "+1 Life", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "Destroy 1", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "Step -1", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "+1 Life", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "+2 Life", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "+2 Cards", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "+2 Cards", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 0, ability: "Copy 1", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 2, ability: "+1 Life", free: 3 , level1: 2, level2: 5, level3: 8},
	{value: 2, ability: "Double 1", free: 3 , level1: 2, level2: 5, level3: 8},
	{value: 2, ability: "Exchange 1", free: 3 , level1: 2, level2: 5, level3: 8},
	{value: 1, ability: "Destroy 1", free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 1, ability: "Double 1", free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 1, ability: "+1 Life", free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 1, ability: "1 card under draw pile", free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 1, ability: "Copy 1", free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 1, ability: "+1 Life", free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 2, free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 2, free: 2 , level1: 1, level2: 3, level3: 6},
	{value: 0, ability: "1 card under draw pile", free: 1 , level1: 0, level2: 1, level3: 3},
	{value: 2, ability: "draw 3, discard 1 and sort 2", free: 3 , level1: 2, level2: 5, level3: 8},
	{value: 2, ability: "destroy 1", free: 3 , level1: 2, level2: 5, level3: 8},
	{value: 2, ability: "+1 Card", free: 3 , level1: 2, level2: 5, level3: 8},
	{value: 3, ability: "Exchange 1", free: 4 , level1: 4, level2: 7, level3: 11},
	{value: 3, ability: "draw 3, discard 1 and sort 2", free: 4 , level1: 4, level2: 7, level3: 11},
	{value: 3, ability: "+1 Card", free: 4 , level1: 4, level2: 7, level3: 11},
	{value: 4, free: 5 , level1: 5, level2: 9, level3: 14},
	{value: 4, free: 5 , level1: 5, level2: 9, level3: 14},
	{value: 3, ability: "Destroy 1", free: 4 , level1: 4, level2: 7, level3: 11}
];

var pirate = [
	{free: 5, ability: "Power = each new age card * 2"},
	{free: 5, ability: 15},
	{free: 0, ability: "Fight against the rest of the hazard cards all together, free = this many cards."},
	{free: 10, ability: "Power = 50. Each card is now +1 point"},
	{free: 10, ability: 35},
	{free: 9, ability: 31},
	{free: 9, ability: "Power = 20. Only use half(rounded up) of the open cards"},
	{free: 8, ability: 27},
	{free: 8, ability: "Power = each lost battle * 2"},
	{free: 7, ability: "Power = 15. Each new card costs 2 life instead of only 1"},
	{free: 6, ability: 19},
	{free: 7, ability: 23},
	
];

function shuffle(input){
	var temp = [];
	while(input.length > 0){
		temp.push(input.splice(Math.floor(Math.random() * input.length), 1)[0]);
	}
	return temp;
}

robinson = shuffle(robinson);
age = shuffle(age);
hazard = shuffle(hazard);
pirate = shuffle(pirate);