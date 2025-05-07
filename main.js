document.getElementById("btnClick").addEventListener("click", click);
document.getElementById("coffeeMachine").addEventListener("click", CoffeeMachine)
document.getElementById("coffeeFarm").addEventListener("click", CoffeeFarm)
document.getElementById("coffeeFactory").addEventListener("click", CoffeeFactory)
document.getElementById("coffeeGalaxy").addEventListener("click", CoffeeGalaxy)

// Money
let Beans = 10000000

// Money income
let clickPower = 1

let coffeeMachineIncome = 0
let coffeeFarmIncome = 0
let coffeeFactoryIncome = 0
let coffeeGalaxyIncome = 0

// Money income upgrades
let coffeeMachineCost = 50
let coffeeFarmCost = 1000
let coffeeFactoryCost = 50000
let coffeeGalaxyCost = 	2000000

// Values
let coffeeMachines = 0
let coffeeFarms = 0
let coffeeFactorys = 0
let coffeeGalaxys = 0

function click(event){
    Beans += clickPower
    updateClicks()
}

function updateClicks(){
    let clickText = document.getElementById("clicks");
    if (Beans > 0) {
        clickText.innerText = Beans.toFixed(2);
    } else {
        clickText.innerText = Beans
    }
}

function passiveMoney(){
    Beans += coffeeMachineIncome;
    Beans += coffeeFarmIncome;
    Beans += coffeeFactoryIncome;
    Beans += coffeeGalaxyIncome;
    updateClicks();
}

setInterval(passiveMoney, 1000);

// Upgrade Functions

function CoffeeMachine(){
    if (coffeeMachines >= 100) {
        updateCosts()
        return
    }
    if (Beans >= coffeeMachineCost) {
        Beans = Beans - coffeeMachineCost
        coffeeMachineIncome = 1 * Math.pow(1.15, coffeeMachines + 1)
        coffeeMachineCost = parseFloat((coffeeMachineCost * 1.15).toFixed(2))
        coffeeMachines += 1
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä machine upgradeen")
        return
    }
}

function CoffeeFarm(){
    if (coffeeFarms >= 100) {
        updateCosts()
        return
    }
    if (Beans >= coffeeFarmCost) {
        Beans = Beans - coffeeFarmCost
        coffeeFarmIncome = 10 * Math.pow(1.15, coffeeFarms + 1)
        coffeeFarmCost = parseFloat((coffeeFarmCost * 1.16).toFixed(2))
        coffeeFarms += 1
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä farm upgradeen")
        return
    }
}

function CoffeeFactory(){
    if (coffeeFactorys >= 100) {
        updateCosts()
        return
    }
    if (Beans >= coffeeFactoryCost) {
        Beans = Beans - coffeeFactoryCost
        coffeeFactoryIncome = 100 * Math.pow(1.15, coffeeFactorys + 1)
        coffeeFactoryCost = parseFloat((coffeeFactoryCost * 1.17).toFixed(2))
        coffeeFactorys += 1
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä factory upgradeen")
        return
    }
}

function CoffeeGalaxy(){
    if (coffeeGalaxys >= 100) {
        updateCosts()
        return
    }
    if (Beans >= coffeeGalaxyCost) {
        Beans = Beans - coffeeGalaxyCost
        coffeeGalaxyIncome = 1000 * Math.pow(1.15, coffeeGalaxys + 1)
        coffeeGalaxyCost = parseFloat((coffeeGalaxyCost * 1.18).toFixed(2))
        coffeeGalaxys += 1
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä galaxy upgradeen")
        return
    }
}

function updateCosts(){
    // Hinnat
    document.getElementById("coffeeMachineCostLabel").innerText = formatCost(coffeeMachineCost) + " Beans"
    document.getElementById("coffeeFarmCostLabel").innerText = formatCost(coffeeFarmCost) + " Beans"
    document.getElementById("coffeeFactoryCostLabel").innerText = formatCost(coffeeFactoryCost) + " Beans"
    document.getElementById("coffeeGalaxyCostLabel").innerText = formatCost(coffeeGalaxyCost) + " Beans"


    if (coffeeMachines >= 100){
        document.getElementById("coffeeMachineCostLabel").innerText = ("LVL 100 MAX")
    } 
    if (coffeeFarms >= 100){
        document.getElementById("coffeeFarmCostLabel").innerText = ("LVL 100 MAX")
    } 
    if (coffeeFactorys >= 100){
        document.getElementById("coffeeFactoryCostLabel").innerText = ("LVL 100 MAX")
    } 
    if (coffeeGalaxys >= 100){
        document.getElementById("coffeeGalaxyCostLabel").innerText = ("LVL 100 MAX")
    }


function formatCost(cost) {
    if (cost >= 1000000000) {
        return (cost / 1000000000).toFixed(2) + "B";
    } else if (cost >= 1000000) {
        return (cost / 1000000).toFixed(2) + "M";
    } else if (cost >= 10000) {
        return (cost / 1000).toFixed(2) + "K";
    } else {
        return cost.toFixed(2);
    }
}

    // Upgrade määrät
    document.getElementById("coffeeMachineValue").innerText = coffeeMachines
    document.getElementById("coffeeFarmValue").innerText = coffeeFarms
    document.getElementById("coffeeFactoryValue").innerText = coffeeFactorys
    document.getElementById("coffeeGalaxyValue").innerText = coffeeGalaxys

    // Beans Per Second
    document.getElementById("bps").innerText = "Beans per second: " + (coffeeFactoryIncome + coffeeMachineIncome + coffeeFarmIncome + coffeeGalaxyIncome).toFixed(2)
}

// Click päivitykset 
const clickUpgrades = [
    { name: "Finger in Coffee", cost: 500, multiplier: 2, purchased: false },
    { name: "Double Tap", cost: 1500, multiplier: 2, purchased: false },
    { name: "Espresso Slam", cost: 4500, multiplier: 2, purchased: false },
    { name: "Mecha Pointer", cost: 13000, multiplier: 2, purchased: false },
    { name: "Multi-Touch Display", cost: 39000, multiplier: 2, purchased: false },
    { name: "Rapid Pressor", cost: 117000, multiplier: 2, purchased: false },
    { name: "Nano Clicker", cost: 351000, multiplier: 2, purchased: false },
    { name: "Neuro-Coffee Pulse", cost: 1050000, multiplier: 2, purchased: false },
    { name: "Telekinetic Brew", cost: 3200000, multiplier: 2, purchased: false },
    { name: "Time Looper", cost: 9500000, multiplier: 2, purchased: false },
    { name: "Click Engine", cost: 28000000, multiplier: 2, purchased: false },
    { name: "Click Farm", cost: 84000000, multiplier: 2, purchased: false },
    { name: "Black Bean Star", cost: 250000000, multiplier: 2, purchased: false },
    { name: "Clickverse", cost: 750000000, multiplier: 2, purchased: false },
    { name: "God Click", cost: 2250000000, multiplier: 2, purchased: false }
];
  
  function buyClickUpgrade(index) {
    const upgrade = clickUpgrades[index];
    if (!upgrade.purchased && Beans >= upgrade.cost) {
        Beans -= upgrade.cost;
        clickPower *= upgrade.multiplier;
        upgrade.purchased = true;
        updateClicks();
        updateClickUpgradeUI(index);
    } else {
        console.log("Et voi ostaa: " + upgrade.name);
    }
}

function updateClickUpgradeUI(index) {
    const div = document.getElementById(`clickUpgrade-${index}`);
    if (div) {
        div.classList.add("purchased");
        document.getElementById(`clickUpgradeCost-${index}`).innerText = "(purchased)";
        div.onclick = null; // Poistaa klikkauksen
    }
}
