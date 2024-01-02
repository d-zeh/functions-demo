let jonSnowHealth = 100
jonSnowHealth = String(jonSnowHealth)
// jonSnowHealth + ''
console.log(jonSnowHealth)
let theWinnerIs = 'Jamie is the winner.'
console.log(theWinnerIs)

let newWinner = theWinnerIs.replace('Jamie', 'Jon')
console.log(newWinner)


if (newWinner.includes('Jon')){
    console.log('Replaced Jamie with Jon')
}

let newWinnerLower = newWinner.toLowerCase()
console.log(newWinner)
//jon is the winner
let newWinnerSplit = newWinnerLower.split(' ')
console.log(newWinnerSplit)
//['jon','is','the','winner']
let newWinnerKebob = newWinnerSplit.join('-')
console.log(newWinnerKebob)
//jon-is-the-winner

//We can also accomplish the same result with replaceAll
//Note - replaceAll only works with Node versions greater than 15.0, if students get an error check their node version with node -v
newWinner = newWinnerLower.replaceAll(' ', '-')


//Write a function we can call to determine if Jon Snow is alive.

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    } else {
        console.log('RIP in Peace Jon Snow!')
    }
}

isJonAlive()

//write a function to have Jon Snow be attacked
//after invoking this function a few times, and then invoking isJonAlive, move isJonAlive into surpriseAttack so we only need to make one function call

function surpriseAttack(attack){
    jonSnowHealth -= attack
}

surpriseAttack(20)
surpriseAttack(10)
surpriseAttack(30)
surpriseAttack(25)
surpriseAttack(15)
isJonAlive()

function greeting(person1, person2){
    console.log(`${person1} says hello to ${person2}.`)
}

greeting('Jon Snow', 'Ned Stark')

//or arrow
//const gretting = (persoin1, person 2) => console.log(`${person1} says hi to ${person2}`)

//demonstrate function returns

function rollDie(){
    let sides = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * sides.length)
    return sides[randomNumber]
}

let firstRoll = rollDie()
let secondRoll = rollDie()
console.log(firstRoll, secondRoll)

function rollDice(){
    let firstRoll = rollDie()
    let secondRoll = rollDie()
    console.log(firstRoll, secondRoll)
    return firstRoll + secondRoll
}

let diceTotal = rollDice()

// console.log(diceTotal)

// let random = Math.random() * sides.length
// console.log(random)
// let roll = Math.floor(random)
// console.log(roll)

function rollDice(number){
    let rolls = []
    let total = 0
    for(let i = 0; i < number; i++){
        rolls.push(rollDie())
    } 
    for(let i = 0; i < rolls.length; i++){
        total += rolls[i]
    }
    return total
}

let attackRoll = rollDice(4)
let defenseRoll = rollDice(4)
console.log(attackRoll - defenseRoll)