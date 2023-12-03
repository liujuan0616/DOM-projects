const cards = [{ id: '1c', src: 'image/ace_of_clubs.png', text: 'Ace of clubs' },
{ id: '1d', src: 'image/ace_of_diamonds.png', text: 'Ace of diamonds' },
{ id: '1h', src: 'image/ace_of_hearts.png', text: 'Ace of hearts' },
{ id: '1s', src: 'image/ace_of_spades.png', text: 'Ace of spades' },

{ id: '2c', src: 'image/2_of_clubs.png', text: '2 of clubs' },
{ id: '2d', src: 'image/2_of_diamonds.png', text: '2 of diamonds' },
{ id: '2h', src: 'image/2_of_hearts.png', text: '2 of hearts' },
{ id: '2s', src: 'image/2_of_spades.png', text: '2 of spades' },

{ id: '3c', src: 'image/3_of_clubs.png', text: '3 of clubs' },
{ id: '3d', src: 'image/3_of_diamonds.png', text: '3 of diamonds' },
{ id: '3h', src: 'image/3_of_hearts.png', text: '3 of hearts' },
{ id: '3s', src: 'image/3_of_spades.png', text: '3 of spades' },

{ id: '4c', src: 'image/4_of_clubs.png', text: '4 of clubs' },
{ id: '4d', src: 'image/4_of_diamonds.png', text: '4 of diamonds' },
{ id: '4h', src: 'image/4_of_hearts.png', text: '4 of hearts' },
{ id: '4s', src: 'image/4_of_spades.png', text: '4 of spades' },

{ id: '5c', src: 'image/5_of_clubs.png', text: '5 of clubs' },
{ id: '5d', src: 'image/5_of_diamonds.png', text: '5 of diamonds' },
{ id: '5h', src: 'image/5_of_hearts.png', text: '5 of hearts' },
{ id: '5s', src: 'image/5_of_spades.png', text: '5 of spades' },

{ id: '6c', src: 'image/6_of_clubs.png', text: '6 of clubs' },
{ id: '6d', src: 'image/6_of_diamonds.png', text: '6 of diamonds' },
{ id: '6h', src: 'image/6_of_hearts.png', text: '6 of hearts' },
{ id: '6s', src: 'image/6_of_spades.png', text: '6 of diamonds' },

{ id: '7c', src: 'image/7_of_clubs.png', text: '7 of clubs' },
{ id: '7d', src: 'image/7_of_diamonds.png', text: '7 of diamonds' },
{ id: '7h', src: 'image/7_of_hearts.png', text: '7 of hearts' },
{ id: '7s', src: 'image/7_of_spades.png', text: '7 of spades' },

{ id: '8c', src: 'image/8_of_clubs.png', text: '8 of clubs' },
{ id: '8d', src: 'image/8_of_diamonds.png', text: '8 of diamonds' },
{ id: '8h', src: 'image/8_of_hearts.png', text: '8 of hearts' },
{ id: '8s', src: 'image/8_of_spades.png', text: '8 of spades' },

{ id: '9c', src: 'image/9_of_clubs.png', text: '9 of clubs' },
{ id: '9d', src: 'image/9_of_diamonds.png', text: '9 of diamonds' },
{ id: '9h', src: 'image/9_of_hearts.png', text: '9 of hearts' },
{ id: '9s', src: 'image/9_of_spades.png', text: '9 of spades' },

{ id: '10c', src: 'image/10_of_clubs.png', text: '10 of clubs' },
{ id: '10d', src: 'image/10_of_diamonds.png', text: '10 of diamonds' },
{ id: '10h', src: 'image/10_of_hearts.png', text: '10 of hearts' },
{ id: '10s', src: 'image/10_of_spades.png', text: '10 of spades' },

{ id: '11c', src: 'image/jack_of_clubs.png', text: 'jack of clubs' },
{ id: '11d', src: 'image/jack_of_diamonds.png', text: 'jack of diamonds' },
{ id: '11h', src: 'image/jack_of_hearts.png', text: 'jack of hearts' },
{ id: '11s', src: 'image/jack_of_spades.png', text: 'jack of spades' },

{ id: '12c', src: 'image/queen_of_clubs.png', text: 'Queen of clubs' },
{ id: '12d', src: 'image/queen_of_diamonds.png', text: 'Queen of diamonds' },
{ id: '12h', src: 'image/queen_of_hearts.png', text: 'Queen of hearts' },
{ id: '12s', src: 'image/queen_of_spades.png', text: 'Queen of spades' },

{ id: '13c', src: 'image/king_of_clubs.png', text: 'King of clubs' },
{ id: '13d', src: 'image/king_of_diamonds.png', text: 'King of diamonds' },
{ id: '13h', src: 'image/king_of_hearts.png', text: 'King of hearts' },
{ id: '13s', src: 'image/king_of_spades.png', text: 'King of spades' },

{ id: '0r', src: 'image/red_joker.png', text: 'Red Joker' },
{ id: '0b', src: 'image/black_joker.png', text: 'Black Joker' }]

const cardsEl = document.querySelector('#cards')
function creatBoard(){
    
    const cardDeck = document.createElement('img')
    cardDeck.setAttribute('src','image/card-deck.png')
    cardsEl.appendChild(cardDeck)
    
}






function shuffleCards(array) {

    array.sort(()=>0.5-Math.random())
    // for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    // }
}

function drawACard(array) {
    const i = Math.floor(Math.random() * array.length) 
    let oneCard = array[i]
    array.splice(i, 1)
    return oneCard

}

const turtleCardEl = document.querySelector('#turtle')
function createTurtleCard(){
    const turtleCard = document.createElement('img')
    turtleCard.setAttribute('src','image/back.png')
    turtleCardEl.appendChild(turtleCard)
 
}

const playerCardEl=document.querySelector('#player')
function createPlayerBoard(array){
    for(let i=0; i<array.length; i++){
const playerCard = document.createElement('img')
playerCard.setAttribute('src', array[i].src)
playerCard.setAttribute('id',array[i].id)
playerCardEl.appendChild(playerCard)
    }
 

}
const computerCardEl=document.querySelector('#computer')
function createComputerBoard(array){
    for(let i=0; i<array.length; i++){
        const computerCard = document.createElement('img')
        computerCard.setAttribute('src', 'image/back.png')
        computerCard.setAttribute('id',array[i].id)
        computerCardEl.appendChild(computerCard)
}
}



function dealCards(user1, user2) {



    if (Math.floor(Math.random() * 10 + 1 > 5)) {
        for (let i = 0; i < cards.length; i++) {
            if (i % 2 === 0) {
                user1.push(cards[i])
            }
            else {
                user2.push(cards[i])
            }
        }
    }
    else {
        for (let i = 0; i < cards.length; i++) {
            if (i % 2 === 0) {
                user2.push(cards[i])
            }
            else {
                user1.push(cards[i])
            }
        }

    }

    setTimeout(cardsEl.children[0].remove(), 10000)
}

// shuffleCards(cards)
// drawACard(cards)
// console.log(drawACard(cards))
// dealCards(user1,user2)


// take the sets from the cards, but if have 2 sets, this not work, need to use findMatchAgain()
function findMatch(array) {
    let array1 = []
    for (let i = 0; i < array.length; i++) {

        let index
        let index1
        let j = i + 1
        // if id has 2 characters,only compare the first character
        if (array[i].id.length === 2) {
            // in array, check array[i] right side has same id[0] or not
            index = array.slice(j).findIndex(element => element.id[0] === array[i].id[0]&&element.id.length===2)
            // in array, check array[i] left side has same id[0] or not
            index1 = array.slice(0, i ).findIndex(element => element.id[0] === array[i].id[0]&&element.id.length===2)
        }
        // if id has 3 characters, check id[0] and id[1]
        else if (array[i].id.length === 3) {
            //in array, check  array[i] right side has same id[0] and id [1] or not
            index = array.slice(j).findIndex(element => element.id[0] === array[i].id[0] && element.id[1] === array[i].id[1]&&element.id.length===3)
            // in array, check array[i] left side has same id[0] and id[1] or not
            index1 = array.slice(0, i ).findIndex(element => element.id[0] === array[i].id[0] && element.id[1] === array[i].id[1]&&element.id.length===3)
        }
        // if left side and right side didn't have the same id[0] or id[0] and id[1]
        if (index === -1 && index1 === -1) {
            array1.push(array[i])
        }
        // if left side and right side do have the same id[0] or id[0] and id[1]
        else if (index !== -1 && index1 !== -1) {
            array1.push(array[i])
        }

    }

    return array1
}

// if cards have 4 same id[0] or id[0] and id[1],the array1 will have a pair,
// I make another function findMatchAgain(array) to get rid of the pair.

function findMatchAgain(array) {
    return findMatch(findMatch(array))

}



function checkPlayerMatch(card) {
   
    let index
    
   
    if (card.id.length === 2) {
        index = player.findIndex(element => element.id[0] === card.id[0]&& element.id.length===2)
    }
    else {
        index = player.findIndex(element => element.id[0] === card.id[0] && element.id[1] === card.id[1]&&element.id.length===3)
    }
    if (index === -1) {
        player.push(card)
        const newCardEl = document.createElement('img')
        newCardEl.setAttribute('id',card.id)
        newCardEl.setAttribute('src',card.src)
        playerCardEl.appendChild(newCardEl)
        
        
    }
    else {
        player.splice(index, 1)
        playerCardEl.children[index].remove()
    }

}
function checkComputerMatch(card) {
   
    let index
    
   
    if (card.id.length === 2) {
        index = computer.findIndex(element => element.id[0] === card.id[0]&& element.id.length===2)
    }
    else {
        index = computer.findIndex(element => element.id[0] === card.id[0] && element.id[1] === card.id[1]&&element.id.length===3)
    }
    if (index === -1) {
        computer.push(card)
        const newCardEl = document.createElement('img')
        newCardEl.setAttribute('id',card.id)
        newCardEl.setAttribute('src',card.src)
        computerCardEl.appendChild(newCardEl)
        
        
    }
    else {
        computer.splice(index, 1)
        computerCardEl.children[index].remove()
    }

}
const btnEl = document.querySelector('#takeMatch')


    

function game() {
    creatBoard()
    let player = []
    let computer = []
    shuffleCards(cards)
    

    console.log(drawACard(cards))

    createTurtleCard()
    
    dealCards(player, computer)
    console.log(player)
    console.log(computer)

    createPlayerBoard(player)
    createComputerBoard(computer)

    const playerCardIds = player.map(item => item.id);

btnEl.addEventListener('click',findMatchAgainBoth)
    
function findMatchAgainBoth(){
    player = findMatchAgain(player)
    computer = findMatchAgain(computer)
    // Create an array to store the IDs of the player cards
const playerCardIds = player.map(item => item.id);

// Iterate over the child elements of playerCardEl in reverse order
for (let i = playerCardEl.children.length - 1; i >= 0; i--) {
    // Check if the ID of the current child is not in the playerCardIds array
    if (!playerCardIds.includes(playerCardEl.children[i].id)) {
        // Remove the current child element
        playerCardEl.children[i].remove();

    }
}

const computerCardIds = computer.map(item => item.id);
for (let i = computerCardEl.children.length-1; i >=0; i--){
    if(!computerCardIds.includes(computerCardEl.children[i].id)){
        computerCardEl.children[i].remove();
    }
}
function flipCard(){
    
    for (item of computer){
        if(item.id = this.id){
            this.src = item.src
        }
     
        
    }
    for(let i=0; i< computerCardEl.children.length;i++){
        computerCardEl.children[i].removeEventListener('click',flipCard)  
        
    }
    

}


while(player.length!==0&&computer.length!==0){

for(let i=0; i< computerCardEl.children.length;i++){
    computerCardEl.children[i].addEventListener('click',flipCard)  

}

let card = flipCard
    checkPlayerMatch(card)
    let card1 = drawACard(player)
    checkComputerMatch(card1)
    }
    console.log(player)
    console.log(computer)
    if (player.length===0){
        console.log('You win')
    }
    else{
        console.log('You lose')
    }
    }

   

}

game()













