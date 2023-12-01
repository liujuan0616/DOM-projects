const cards = [{id:'1c',src:'image/ace_of_clubs.png',text:'Ace of clubs'},
                {id:'1d',src:'image/ace_of_diamonds.png', text:'Ace of diamonds'},
                {id:'1h',src:'image/ace_of_hearts.png',text:'Ace of hearts'},
                {id:'1s',src:'image/ace_of_spades.png',text:'Ace of spades'},
            {id:'2c',src:'image/2_of_clubs.png',text:'2 of clubs'},
            {id:'2d',src:'image/2_of_diamonds.png',text:'2 of diamonds'},
            {id:'2h',src:'image/2_of_hearts.png',text:'2 of hearts'},
            {id:'2s',src:'image/2_of_spades.png',text:'2 of spades'},
        {id:'3c',src:'image/3_of_clubs.png',text:'3 of clubs'},
        {id:'3d',src:'image/3_of_diamonds.png', text:'3 of diamonds'},
        {id:'3h',src:'image/3_of_hearts.png',text:'3 of hearts'},
        {id:'3s',src:'image/3_of_spades.png',text:'3 of spades'},
    {id:'4c',src:'image/4_of_clubs.png',text:'4 of clubs'},
    {id:'4d',src:'image/4_of_diamonds.png',text:'4 of diamonds'},
    {id:'4h',src:'image/4_of_hearts.png',text:'4 of hearts'},
    {id:'4s',src:'image/4_of_spades.png',text:'4 of spades'},
{id:'5c',src:'image/5_of_clubs.png',text:'5 of clubs'},
{id:'5d',src:'image/5_of_diamonds.png',text:'5 of diamonds'},
{id:'5h',src:'image/5_of_hearts.png',text:'5 of hearts'},
{id:'5s',src:'image/5_of_spades.png',text:'5 of spades'},
{id:'6c',src:'image/6_of_clubs.png',text:'6 of clubs'},
{id:'6d',src:'image/6_of_diamonds.png',text:'6 of diamonds'},
{id:'6h',src:'image/6_of_hearts.png',text:'6 of hearts'},
{id:'6s',src:'image/6_of_spades.png',text:'6 of diamonds'},
{id:'7c',src:'image/7_of_clubs.png',text:'7 of clubs'},
{id:'7d',src:'image/7_of_diamonds.png',text:'7 of diamonds'},
{id:'7h',src:'image/7_of_hearts.png',text:'7 of hearts'},
{id:'7s',src:'image/7_of_spades.png',text:'7 of spades'},
{id:'8c',src:'image/8_of_clubs.png',text:'8 of clubs'},
{id:'8d',src:'image/8_of_diamonds.png',text:'8 of diamonds'},
{id:'8h',src:'image/8_of_hearts.png',text:'8 of hearts'},
{id:'8s',src:'image/8_of_spades.png',text:'8 of spades'},

{id:'9c',src:'image/9_of_clubs.png',text:'9 of clubs'},
{id:'9d',src:'image/9_of_diamonds.png',text:'9 of diamonds'},
{id:'9h',src:'image/9_of_hearts.png',text:'9 of hearts'},
{id:'9s',src:'image/9_of_spades.png',text:'9 of spades'},

{id:'10c',src:'image/10_of_clubs.png',text:'10 of clubs'},
{id:'10d',src:'image/10_of_diamonds.png',text:'10 of diamonds'},
{id:'10h',src:'image/10_of_hearts.png',text:'10 of hearts'},
{id:'10s',src:'image/10_of_spades.png',text:'10 of spades'},

{id:'11c',src:'image/jack_of_clubs.png',text:'jack of clubs'},
{id:'11d',src:'image/jack_of_diamonds.png',text:'jack of diamonds'},
{id:'11h',src:'image/jack_of_hearts.png',text:'jack of hearts'},
{id:'11s',src:'image/jack_of_spades.png',text:'jack of spades'},

{id:'12c',src:'image/queen_of_clubs.png',text:'Queen of clubs'},
{id:'12d',src:'image/queen_of_diamonds.png',text:'Queen of diamonds'},
{id:'12h',src:'image/queen_of_hearts.png',text:'Queen of hearts'},
{id:'12s',src:'image/queen_of_spades.png',text:'Queen of spades'},

{id:'13c',src:'image/king_of_clubs.png',text:'King of clubs'},
{id:'13d',src:'image/king_of_diamonds.png',text:'King of diamonds'},
{id:'13h',src:'image/king_of_hearts.png',text:'King of hearts'},
{id:'13s',src:'image/king_of_spades.png',text:'King of spades'},

{id:'0r',src:'image/red_joker.png',text:'Red Joker'},
{id:'0b',src:'image/black_joker.png',text:'Black Joker'}]


function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function drawACard(array){
    const i = Math.floor(Math.random() * array.length) + 1
    let oneCard = array[i]
    array.splice(i,1)
    return oneCard
   
  }
 





function dealCards(user1,user2){

    if(Math.floor(Math.random()*10 +1 > 5)){
    for (let i=0; i<cards.length; i++){
        if(i%2===0){
        user1.push(cards[i])
        }
        else{
            user2.push(cards[i])
        }
    }
}
    else{
        for (let i=0;i<cards.length;i++){
        if(i%2===0){
            user2.push(cards[i])
            }
            else{
                user1.push(cards[i])
            }
         }

       }
}

// shuffleCards(cards)
// drawACard(cards)
// console.log(drawACard(cards))
// dealCards(user1,user2)



function findMatch(array){
    let array1 = []
  for(let i =0;i<array.length;i++){
   
    let index
    let index1
    let j = i+1
    if(array[i].id.length ===2){
    index = array.slice(j).findIndex(element=>element.id[0]===array[i].id[0])
    index1 = array.slice(0,i-array.length).findIndex(element=>element.id[0]===array[i].id[0])
    }
    else if(array[i].id.length===3){
       index = array.slice(j).findIndex(element=>element.id[0]===array[i].id[0]&&element.id[1]===array[i].id[1])
       index1 = array.slice(0,i-array.length).findIndex(element=>element.id[0]===array[i].id[0]&&element.id[1]===array[i].id[1])
    }
    if(index===-1&&index1===-1){
     array1.push(array[i])
    }
    else if(index!==-1&&index1!==-1){
        array1.push(array[i])
    }
    
    
    }
 
  return array1
}
function findMatchAgain(array){
     return findMatch(findMatch(array))
    
}



function checkMatch(array1,card){
    let index
   
    if(card.id.length===2){
    index = array1.findIndex(element=>element.id[0]===card.id[0])
    }
    else{
     index = array1.findIndex(element=>element.id[0]===card.id[0]&&element.id[1]===card.id[1])
    }
    if (index===-1){
        array1.push(card)
    }
    else{
        array1.splice(index,1)
    }

}

function game(){
let player1=[]
let computer=[]
shuffleCards(cards)

console.log(drawACard(cards))
dealCards(player1,computer)
console.log(player1)
console.log(computer)
console.log(findMatchAgain(player1))
console.log(findMatchAgain(computer))
console.log(player1)
console.log(computer)
// while(player1.length!==0&&computer.length!==0){
// let card = drawACard(computer)
// checkMatch(player1,card)
// let card1 = drawACard(player1)
// checkMatch(computer,card1)
// }

// console.log(player1)
// console.log(computer)
// if (player1.length===0){
//     console.log('You win')

// }
// else{
//     console.log('You lose')
// }
  
}

let player1=[]
let computer=[]
shuffleCards(cards)

console.log(drawACard(cards))
dealCards(player1,computer)
console.log(player1)
console.log(computer)
console.log(findMatchAgain(player1))
console.log(findMatchAgain(computer))










 
