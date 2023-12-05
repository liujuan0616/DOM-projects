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

function shuffleCards(array) {

    array.sort(() => 0.5 - Math.random())

}

const turtleCardEl = document.querySelector('#turtle')

const playerCardEl = document.querySelector('#player')
function createPlayerBoard(array) {
    shuffleCards(array)
    for (let i = 0; i < array.length; i++) {
        const playerCard = document.createElement('img')
        playerCard.setAttribute('src', array[i].src)
        playerCard.setAttribute('id', array[i].id)
        playerCardEl.appendChild(playerCard)
    }
}

const computerCardEl = document.querySelector('#computer')

function createComputerBoard(array) {
    for (let i = 0; i < array.length; i++) {
        const computerCard = document.createElement('img')
        computerCard.setAttribute('src', 'image/back.png')
        computerCard.setAttribute('id', array[i].id)
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
}

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
            index = array.slice(j).findIndex(element => element.id[0] === array[i].id[0] && element.id.length === 2)
            // in array, check array[i] left side has same id[0] or not
            index1 = array.slice(0, i).findIndex(element => element.id[0] === array[i].id[0] && element.id.length === 2)
        }
        // if id has 3 characters, check id[0] and id[1]
        else if (array[i].id.length === 3) {
            //in array, check  array[i] right side has same id[0] and id [1] or not
            index = array.slice(j).findIndex(element => element.id[0] === array[i].id[0] && element.id[1] === array[i].id[1] && element.id.length === 3)
            // in array, check array[i] left side has same id[0] and id[1] or not
            index1 = array.slice(0, i).findIndex(element => element.id[0] === array[i].id[0] && element.id[1] === array[i].id[1] && element.id.length === 3)
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

const btnEl = document.querySelector('#takeMatch')

const startGameEl = document.querySelector('#startGame')



  
    


function game() {
    
    let player = []
    let computer = []
    shuffleCards(cards)

    function drawTurtleCard() {
        const i = Math.floor(Math.random() * cards.length)
        const turtleCard0 = cards[i]
        cards.splice(i, 1)
        return turtleCard0

    }
    const turtleCard0 = drawTurtleCard()
    console.log(turtleCard0)


    function createTurtleCard() {

        const turtleCard = document.createElement('img')
        turtleCard.setAttribute('src', 'image/back.png')
        turtleCard.setAttribute('id', turtleCard0.id)
        turtleCardEl.appendChild(turtleCard)

    }
    createTurtleCard()

    dealCards(player, computer)
    console.log(player)
    console.log(computer)

    createPlayerBoard(player)
    createComputerBoard(computer)
    
    


    const resultEl = document.querySelector('#gameResult')


    btnEl.addEventListener('click', findMatchAgainBoth)

    function findMatchAgainBoth() {
        player = findMatchAgain(player)
        computer = findMatchAgain(computer)
        // Create an array to store the IDs of the player cards
        const playerCardIds = player.map(item => item.id);

        // Iterate over the child elements of playerCardEl in reverse order
        for (let i = playerCardEl.children.length - 1; i >= 0; i--) {
            // Check if the ID of the current child is not in the playerCardIds array
            if (!playerCardIds.includes(playerCardEl.children[i].id)) {
                // Remove the current child element
                playerCardEl.removeChild(playerCardEl.children[i]);

            }
        }

        const computerCardIds = computer.map(item => item.id);
        for (let i = computerCardEl.children.length - 1; i >= 0; i--) {
            if (!computerCardIds.includes(computerCardEl.children[i].id)) {
                computerCardEl.removeChild(computerCardEl.children[i]);
            }
        }


        btnEl.removeEventListener('click', findMatchAgainBoth)

        function flipCard() {

            for (item of computer) {
                if (item.id === this.id) {
                    this.src = item.src
                }
            }
            console.log(computer, 'computer')
            //  trying to get the element from the computer array which is clicked on computerCardEl.children
            let card = computer.filter(element => element.id === this.id)
            computer = computer.filter(element => element !== card[0])
            console.log(computer, 'computer1')
            console.log(card, 'clicked1')

            if (card.length > 0) {
                checkPlayerMatch(card)
            }
            if (computer.length === 0) {
                resultEl.textContent = 'You Lose, try again!'
                return
            }
            let card1 = drawACard()
            console.log(card1, 'card1')

            checkComputerMatch(card1)

            function showTurtleCard() {

                turtleCardEl.children[0].src = turtleCard0.src

            }

            if (player.length === 0) {
                resultEl.textContent = 'You Win!'
                showTurtleCard()
                computerCardEl.children[0].src = computer[0].src
                if (playerCardEl.children.length) {
                    playerCardEl.removeChild(playerCardEl.children[0])
                }
               
            }
            else if (computer.length === 0) {
                resultEl.textContent = 'You Lose, try again!'
                showTurtleCard()
                if (computerCardEl.children.length) {
                    computerCardEl.removeChild(computerCardEl.children[0])
                }
               
            }

        }

        function checkPlayerMatch(card) {

            let index
            for (let i = 0; i < computerCardEl.children.length; i++) {
                if (computerCardEl.children[i].id === card[0].id) {
                    computerCardEl.removeChild(computerCardEl.children[i])
                }
            }
            console.log(card, 'clicked')
            if (card[0].id.length === 2) {
                index = player.findIndex(element => element.id[0] === card[0].id[0] && element.id.length === 2)
            }
            else {
                index = player.findIndex(element => element.id[0] === card[0].id[0] && element.id[1] === card[0].id[1] && element.id.length === 3)
            }
            if (index === -1) {
                // player.push(card[0])
                const j = Math.floor(Math.random() * player.length)
                player.splice(j, 0, card[0])
                const newCardEl = document.createElement('img')
                newCardEl.setAttribute('id', card[0].id)
                newCardEl.setAttribute('src', card[0].src)
                //playerCardEl.appendChild(newCardEl)
                playerCardEl.insertBefore(newCardEl, playerCardEl.children[j])

            }
            else {
                player.splice(index, 1)
                playerCardEl.removeChild(playerCardEl.children[index])
            }

        }
        function checkComputerMatch(card) {

            let index

            console.log(card, 'computer')
            if (card) {
                if (card.id.length === 2) {
                    index = computer.findIndex(element => element.id[0] === card.id[0] && element.id.length === 2)
                }
                else {
                    index = computer.findIndex(element => element.id[0] === card.id[0] && element.id[1] === card.id[1] && element.id.length === 3)
                }
                if (index === -1) {
                    //computer.push(card)
                    const j = Math.floor(Math.random() * computer.length)
                    computer.splice(j, 0, card)
                    const newCardEl = document.createElement('img')
                    newCardEl.setAttribute('id', card.id)
                    newCardEl.setAttribute('src', 'image/back.png')
                    //computerCardEl.appendChild(newCardEl)
                    computerCardEl.insertBefore(newCardEl, computerCardEl.children[j])

                    newCardEl.addEventListener('click', flipCard)

                }
                else {
                    computer.splice(index, 1)
                    computerCardEl.removeChild(computerCardEl.children[index])
                }
            }
        }
        function drawACard() {
            const i = Math.floor(Math.random() * player.length)
            let oneCard = player[i]
            player.splice(i, 1)
            console.log(player)
            if (player.length !== 0) {
                playerCardEl.removeChild(playerCardEl.children[i])
            }

            return oneCard
        }

        for (let i = 0; i < computerCardEl.children.length; i++) {
            computerCardEl.children[i].addEventListener('click', flipCard)
        }

    }

}
game()


