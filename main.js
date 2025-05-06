document.getElementById("btnClick").addEventListener("click", click);
document.getElementById("coffeeMachine").addEventListener("click", CoffeeMachine)
document.getElementById("coffeeFactory").addEventListener("click", CoffeeFactory)

// Money
let Beans = 0

// Money income
let clickPower = 1
let coffeeMachineIncome = 0
let coffeeFactoryIncome = 0

// Money income upgrades
let coffeeMachineCost = 10
let coffeeFactoryCost = 100

// Values
let coffeeMachines = 0
let coffeeFactorys = 0

function click(event){
    Beans += clickPower
    updateClicks()
}

function updateClicks(){
    let clickText = document.getElementById("clicks");
    if (clickText) {
        clickText.innerText = Beans;
    } else {
        console.error("Element with id 'clicks' not found.");
    }
}

function passiveMoney(){
    Beans += coffeeMachineIncome;
    Beans += coffeeFactoryIncome;
    updateClicks();
}

setInterval(passiveMoney, 1000);

// Upgrade Functions

function CoffeeMachine(){
    if (Beans >= coffeeMachineCost) {
        Beans = Beans - coffeeMachineCost
        coffeeMachineIncome += 1
        coffeeMachineCost = coffeeMachineCost * 2
        coffeeMachines += 1
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä passive upgradeen")
        return
    }
}

function CoffeeFactory(){
    if (Beans >= coffeeFactoryCost) {
        Beans = Beans - coffeeFactoryCost
        coffeeFactoryIncome += 10
        coffeeFactoryCost = coffeeFactoryCost * 2
        coffeeFactorys += 1
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä click upgradeen")
        return
    }
}

function updateCosts(){
    // Hinnat
    document.getElementById("coffeeMachineCostLabel").innerText = coffeeMachineCost + " Beans"
    document.getElementById("coffeeFactoryCostLabel").innerText = coffeeFactoryCost + " Beans"

    // Upgrade määrät
    document.getElementById("coffeeMachineValue").innerText = coffeeMachines
    document.getElementById("coffeeFactoryValue").innerText = coffeeFactorys

    // Beans Per Second
    document.getElementById("bps").innerText = "Beans per second: " + (coffeeFactoryIncome + coffeeMachineIncome)
}
