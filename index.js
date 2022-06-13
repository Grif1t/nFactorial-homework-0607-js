"use-strict";
const p = require("prompt-sync");
const prompt = p();

let customer = prompt("Hello ,What is your name Sir/Madam ? :");
    console.log(`Nice to meet you, ${customer}`);

let customerMoney = prompt("How much money do you have with you ? :")

const NAME_OF_SHOP = "Dalida's Market";
    console.log(`Your Welcome to the ${NAME_OF_SHOP}`);

let whatProducts = prompt("How many products market will have ?");

let arrayProducts = new Array();

let costProducts = new Array();

for(let i = 0; i < whatProducts; i++){
    let products = prompt("Name of product :");
    arrayProducts.push(products);

    let cost = prompt("Cost : ");
    costProducts.push(cost);
}

let sum = 0;

function afford(x){
    let check = 0;

    for(let i = 0; i < arrayProducts.length; i++){
        if(x === arrayProducts[i]){
            sum += costProducts[i];
            console.log("Yea");
            check = 1;
            break;
        }
    }

    if(check === 0){
        console.log("Nope");
    }
}

console.log (`This is the list : ${arrayProducts} \n ${costProducts}`);

while(whatProducts > 0){
    let question = prompt("So ,what do you want ? ");
    afford(question);
    whatProducts--;
}

if(sum < customerMoney) {
    console.log("Fortunately, You can afford all products !");
} else {
    console.log("Maybe not today ,Maybe not tomorrow , But one day you will buy it");
}