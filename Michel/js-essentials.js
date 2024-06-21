// 0 - Bajar repo, hacer hola mundo console.log


// 2 - Funciones:
// add(firstOperator, secondOperator),
// subtract(firstOperator, secondOperator),
// divide(firstOperator, secondOperator),
// multiply(firstOperator, secondOperator)

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)



// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])

// 6 - Funcion
// finalCountDown(count)

const finalCountDown = (count) => {
    while (count >= 0) {
    
        console.log(count);
        count--
    }
}



finalCountDown(40)




// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S


function getGrade(score) {
    if (score >= 0 && score <= 40) {
        return "D"
} else if (score >= 41 && score <= 60) {
        return "R"
    } else if (score >= 61 && score <= 74) {
        return "B"
    } else if (score >= 75 && score <= 84) {
        return "BMB"
    } else if (score >= 85 && score <= 96) {
        return "MB"
    } else if (score >= 97 && score <= 100) {
        return "S"
    }
}


//console.log(getGrade(150)) // Me imprime MB

function getGrade(score) {
    let grade;
    switch (true) {
        case score >= 0 && score <= 40:
            grade = "D";
            break;
        case score >= 41 && score <= 60:
            grade = "R";
            break;
        case score >= 61 && score <= 74:
            grade = "B";
            break;
        case score >= 75 && score <= 84:
            grade = "BMB";
            break;
        case score >= 85 && score <= 96:
            grade = "MB";
            break;
        case score >= 97 && score <= 100:
            grade = "S";
            break;
        default:
            grade = "Invalid score";
    }
    return grade;
}

console.log(getGrade(75)) 




// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles


const person = {
    name : 'Pepe',
    cart: [],

}

const articlesCollection = [
    {article: '👟', amount: 1, price: 25},
    {article: '🍌', amonunt: 1, price: 10},
    {article: '🥭', amount: 1, price: 15},
]


//function fillCart(person, articlesCollection){
//    for (let index = 0; index < bound; index++) {
//        person.cart.push(articlesCollection[index])
//    }
//}
for (let item of articlesCollection) {
person.cart.push(item)
}


let newItems = [
    {article: '🥭', amount: 1, price: 15},
    {article: '��', amonunt: 1, price: 10},
    {article: '🥭', amount: 1, price: 15},
    {article: '🍌', amonunt: 1, price: 10},
]

for (let item of newItems) {
    person.cart.push(item)
}


console.log(person.cart)


// 9 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

let inventory = ['🥑', '🍌', '🥭', '🍌'];


/// METODO FOR/////

// function countBanana(inventory) {
//         let count = 0;
//         for (let i = 0; i < inventory.length; i++) {
//             if (inventory[i] === '🍌') {
//                 count++;
//             }
//         }
//         return count;
//     }
//     console.log(countBanana(inventory))





//// METODO REDUCE ////
// const calculadora = inventory.reduce((contador, e) => e === "🍌" ? contador += 1 : contador ,0)

// console.log(calculadora)




// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)


let inventory2 = [
    {article: '🍔', price: 15, quantity: '1'},
    {article: '🍟', price: 10, quantity: '2'},
];



function getTotal(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total = total + data[i].price * data[i].quantity;
    }
    return total;
}

console.log(getTotal(inventory2))


const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr4 = [11, 12, 13, 14, 15,]

const arr6 = [...arr3]

const arr5 = [...arr3, ...arr4,]


console.log(arr6)