// onirim game

var typeName = ["red", "blue", "green", "yellow"];
var deck = [];
var playedCards = [];
var doorsFound = [];
var discardCards = [];
var porfetContainer = [];
var limbo = [];

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

function drawCard(){
	if(deck[0].type !== 'door' && deck[0].type !== 'dream' || true){
		hand.push(deck.shift());
		updateCardCount();
		updatePlayedCards();
		updateHand();
	} else if(deck[0].type === 'door'){
		for(var i = 0;i<hand.length;i++){
			if(hand[i].type === 'key' && hand[i].suit === deck[0].suit){
				//unlock option
				alert('unlock option');
			} else {
				//put door in limbo
				limbo.push(deck.shift());
				drawCard();
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
		drawCard();
	});
	if(hand[num].type === 'key'){
		$('#discardbtn a').attr('data-rel', 'popup');
	} else {
		$('#discardbtn a').attr('data-rel', 'back');
	}
	$('#discardbtn').unbind();
	$('#discardbtn').bind('click', function(){
		if(hand[num].type === 'key'){
			prophesey();
		}
		discardCards.push(hand.splice(num, 1)[0]);
		drawCard();
	});
}
function prophesey(){
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());
	porfetContainer.push(deck.shift());

	//display
	var divider = $("<li data-role='divider' data-theme='e' class='ui-li ui-li-static ui-btn-up-e ui-first-child'>Discard a Card</li>");
	$('#profet' + ' ul').empty().append(divider);
	for(var i = 0;i< porfetContainer.length;i++){
		var temp = $("<li id='prof" + i + "' onclick='discardProf("+ i + ");' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='c' class='ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li'><div class='ui-btn-inner ui-li'><div class='ui-btn-text'><a data-rel='popup' href='#' class='ui-link-inherit' aria-haspopup='true' aria-owns='popupMenu' aria-expanded='false'><h2 class='ui-li-heading'>" + porfetContainer[i].type + "</h2></a></div><span class='ui-icon ui-icon-arrow-r ui-icon-shadow'>&nbsp;</span></div></li>");
		$('#profet' + ' ul').append(temp);
		$("#prof" + i).css("background", porfetContainer[i].suit).bind("click", function(){
			$(this).hide();
		});
	}
	
}
function discardProf(num){
	discardCards.push(porfetContainer.splice(num, 1)[0]);
	stackyThing();
}
function stackyThing(){
	var divider = $("<li data-role='divider' data-theme='e' class='ui-li ui-li-static ui-btn-up-e ui-first-child'>Put on top of Deck</li>");
	$('#profet' + ' ul').empty().append(divider);
	for(var i = 0;i< porfetContainer.length;i++){
		var temp = $("<li id='prof" + i + "' onclick='addToDeck("+ i + ");' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='c' class='ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li'><div class='ui-btn-inner ui-li'><div class='ui-btn-text'><a data-rel='popup' href='#' class='ui-link-inherit' aria-haspopup='true' aria-owns='popupMenu' aria-expanded='false'><h2 class='ui-li-heading'>" + porfetContainer[i].type + "</h2></a></div><span class='ui-icon ui-icon-arrow-r ui-icon-shadow'>&nbsp;</span></div></li>");
		$('#profet' + ' ul').append(temp);
		$("#prof" + i).css("background", porfetContainer[i].suit).bind("click", function(){
			$(this).unbind().hide();
		});
	}
	if(porfetContainer.length === 1){
		$("#prof0 a").attr('data-rel', 'back');
		$("#prof0 a").bind("click", function(){
			drawCard();
		});
		
	}
}
function addToDeck(num){
	deck.unshift(porfetContainer.splice(num, 1)[0]);
	stackyThing();
}
function checkForTripleType(){
	if(playedCards.length > 2){
		if(playedCards[playedCards.length - 3].suit === playedCards[playedCards.length - 2].suit 
			&& playedCards[playedCards.length - 2].suit === playedCards[playedCards.length - 1].suit){
			for(var i = 0;i<deck.length;i++){
				if(deck[i].type === 'door' && deck[i].suit === playedCards[playedCards.length - 3].suit){
					doorsFound.push(deck.splice(i, 1)[0]);
					updateCardCount();
					deck = shuffle(deck);
					alert(doorsFound[doorsFound.length - 1].suit + ' door found!')
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

function updateHand(){
	for(var i = 0;i < hand.length; i++){
		$("#card" + i + " h2").html(hand[i].type);
		$("#card" + i).attr('onclick', 'bindAction(' + i + ');').css("background", hand[i].suit);
	}
}
updateHand();

// var c = $("<li class='displayOnly'><a id='playbtn' href='#' data-inline='true'>Play</a></li><li class='displayOnly'><a href='#' id='discardbtn' data-inline='true'>Discard</a></li>");
// $("#lv").append(c);

// $("#playbtn").bind("click", function(){
// 	$('.displayOnly').remove();
// 	hand.forEach(function (item){
// 		var temp = $("<div class='ui-btn-text'><li class='displayOnly'><a id='playbtn' href='#' data-inline='true'>Play</a></li></div>").css("background-color", item.suit);
// 		$("#lv").append(temp);
// 	});
	
// });
