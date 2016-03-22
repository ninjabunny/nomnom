// onirim game

var typeName = ["red", "blue", "green", "yellow"];
var deck = [];
var playedCards = [];
var doorsFound = [];
var discardCards = [];
var porfetContainer = [];

for(var i = 0; i < 4; i++){
	deck.push({type: "door", suit: typeName[i]});
	deck.push({type: "door", suit: typeName[i]});

	deck.push({type: "key", suit: typeName[i]});
	deck.push({type: "key", suit: typeName[i]});
	deck.push({type: "key", suit: typeName[i]});
	
	deck.push({type: "moon", suit: typeName[i]});
	deck.push({type: "moon", suit: typeName[i]});
	deck.push({type: "moon", suit: typeName[i]});
	deck.push({type: "moon", suit: typeName[i]});
	
	deck.push({type: "sun", suit: typeName[i]});
	deck.push({type: "sun", suit: typeName[i]});
	deck.push({type: "sun", suit: typeName[i]});
	deck.push({type: "sun", suit: typeName[i]});
	deck.push({type: "sun", suit: typeName[i]});
	deck.push({type: "sun", suit: typeName[i]});	
}

for(var i = 0; i < 10; i++){
	deck.push({type: "dream", suit: "none"});
}

deck.push({type: "sun", suit: "blue"});
deck.push({type: "sun", suit: "green"});
deck.push({type: "sun", suit: "green"});
deck.push({type: "sun", suit: "yellow"});
deck.push({type: "sun", suit: "yellow"});
deck.push({type: "sun", suit: "yellow"});

function shuffle(input){
	var temp = [];
	while(input.length > 0){
		temp.push(input.splice(Math.floor(Math.random() * input.length), 1)[0]);
	}
	return temp;
}

//setup
var hand = [];
deck = shuffle(deck);

while(hand.length < 5){
	while(deck[0].type === "door" || deck[0].type === "dream"){
		deck = shuffle(deck);		
	}	
	hand.push(deck.shift());	
}

var discardPile = [];
var enabledDoors = [];
function play(position){
	//check if previous symbol is the same, else not playable

	//if 3in a row same suit, then obtain door of that suit
	if(discardPile.length > 2){
		if(discardPile[0].suit === discardPile[1].suit && discardPile[1].suit === discardPile[2].suit){
			//get door of that suit
			for(var i = 0;i < deck.length; i++){
				if(deck[i].type === "door" && deck[i].suit === discardPile[0].suit){

				}
			}
		}
	}
}
function bindAction(num){
	$('#playbtn').show();
	if(playedCards.length !== 0){
		if(hand[num].type === playedCards[playedCards.length - 1].type){
			$('#playbtn').hide();
		}
	}
	
	$('#playbtn').unbind();
	$('#playbtn').bind('click', function(){
		playedCards.push(hand.splice(num, 1)[0]);
		updatePlayedCards();
		checkForTripleType();
	});
	$('#discardbtn').unbind();
	$('#discardbtn').bind('click', function(){
		if(hand[num].type === 'key'){
			prophesey();
		}
		discardCards.push(hand.splice(num, 1)[0]);
	});
}
function prophesey(){
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());
}
function checkForTripleType(){
	if(playedCards.length > 2){
		if(playedCards[playedCards.length - 3].suit === playedCards[playedCards.length - 2].suit 
			&& playedCards[playedCards.length - 2].suit === playedCards[playedCards.length - 1].suit){
			for(var i = 0;i<deck.length;i++){
				if(deck[i].type === 'door' && deck[i].suit === playedCards[playedCards.length - 3].suit){
					doorsFound.push(deck.splice(i, 1)[0]);
					deck = shuffle(deck);
					//TODO: update DOORS!
					break;
				}
			}
		}
	}
}
function updatePlayedCards(){
	if(playedCards.length === 1){
		$("#played0 h2").html(playedCards[0].type);
		$("#played0").css("background", playedCards[0].suit);
	}
	if(playedCards.length === 2){
		$("#played0 h2").html(playedCards[1].type);
		$("#played0").css("background", playedCards[1].suit);
		$("#played1 h2").html(playedCards[0].type);
		$("#played1").css("background", playedCards[0].suit);
	}
	if(playedCards.length > 2){
		$("#played0 h2").html(playedCards[playedCards.length - 1].type);
		$("#played0").css("background", playedCards[playedCards.length - 1].suit);
		$("#played1 h2").html(playedCards[playedCards.length - 2].type);
		$("#played1").css("background", playedCards[playedCards.length - 2].suit);
		$("#played2 h2").html(playedCards[playedCards.length - 3].type);
		$("#played2").css("background", playedCards[playedCards.length - 3].suit);
	}
}
function sameSuitCheck(card){
	//check if discardPile is empty
	if(discardPile.length < 1){
		return false;
	}
	if(card.type === discardPile.type){
		return true;
	}
	return false;
}
function updateCardCount(){
	$("#cardCount").text(deck.length);	
}
updateCardCount();


for(var i = 0;i < hand.length; i++){
	$("#card" + i + " h2").html(hand[i].type);
	$("#card" + i).attr('onclick', 'bindAction(' + i + ');').css("background", hand[i].suit);
}
// var c = $("<li class='displayOnly'><a id='playbtn' href='#' data-inline='true'>Play</a></li><li class='displayOnly'><a href='#' id='discardbtn' data-inline='true'>Discard</a></li>");
// $("#lv").append(c);

// $("#playbtn").bind("click", function(){
// 	$('.displayOnly').remove();
// 	hand.forEach(function (item){
// 		var temp = $("<div class='ui-btn-text'><li class='displayOnly'><a id='playbtn' href='#' data-inline='true'>Play</a></li></div>").css("background-color", item.suit);
// 		$("#lv").append(temp);
// 	});
	
// });
