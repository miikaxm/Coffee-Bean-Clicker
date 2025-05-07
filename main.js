document.getElementById("btnClick").addEventListener("click", click);
document.getElementById("coffeeMachine").addEventListener("click", CoffeeMachine)
document.getElementById("coffeeFarm").addEventListener("click", CoffeeFarm)
document.getElementById("coffeeFactory").addEventListener("click", CoffeeFactory)
document.getElementById("coffeeGalaxy").addEventListener("click", CoffeeGalaxy)

// Max levels
let coffeeMachineMax = false
let coffeeFarmMax = false
let coffeeFactoryMax = false
let coffeeGalaxyMax = false

// Boosts
let superFarmBoost = false // 1 min välein +5% kokonaistuotto hetkellisesti

// Money
let Beans = 9999999999999999999999999999999999999999999999

// Money income
let clickPower = 1

let coffeeMachineIncome = 0
let coffeeFarmIncome = 0
let coffeeFactoryIncome = 0
let coffeeGalaxyIncome = 0

let FullPassiveMoney = coffeeFarmIncome+coffeeGalaxyIncome+coffeeFactoryIncome+coffeeMachineIncome

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

function updateClicks() {
    let clickText = document.getElementById("clicks");
    if (Beans >= 1e63) {
        clickText.innerText = (Beans / 1e63).toFixed(2) + "Vg"; // Vigintillion
    } else if (Beans >= 1e60) {
        clickText.innerText = (Beans / 1e60).toFixed(2) + "Nv"; // Novemdecillion
    } else if (Beans >= 1e57) {
        clickText.innerText = (Beans / 1e57).toFixed(2) + "Oc"; // Octodecillion
    } else if (Beans >= 1e54) {
        clickText.innerText = (Beans / 1e54).toFixed(2) + "Sp"; // Septendecillion
    } else if (Beans >= 1e51) {
        clickText.innerText = (Beans / 1e51).toFixed(2) + "Sd"; // Sexdecillion
    } else if (Beans >= 1e48) {
        clickText.innerText = (Beans / 1e48).toFixed(2) + "Qd"; // Quindecillion
    } else if (Beans >= 1e45) {
        clickText.innerText = (Beans / 1e45).toFixed(2) + "Qn"; // Quattuordecillion
    } else if (Beans >= 1e42) {
        clickText.innerText = (Beans / 1e42).toFixed(2) + "Tn"; // Tredecillion
    } else if (Beans >= 1e39) {
        clickText.innerText = (Beans / 1e39).toFixed(2) + "Dn"; // Duodecillion
    } else if (Beans >= 1e36) {
        clickText.innerText = (Beans / 1e36).toFixed(2) + "Un"; // Undecillion
    } else if (Beans >= 1e33) {
        clickText.innerText = (Beans / 1e33).toFixed(2) + "Dc"; // Decillion
    } else if (Beans >= 1e30) {
        clickText.innerText = (Beans / 1e30).toFixed(2) + "No"; // Nonillion
    } else if (Beans >= 1e27) {
        clickText.innerText = (Beans / 1e27).toFixed(2) + "Oc"; // Octillion
    } else if (Beans >= 1e24) {
        clickText.innerText = (Beans / 1e24).toFixed(2) + "Sp"; // Septillion
    } else if (Beans >= 1e21) {
        clickText.innerText = (Beans / 1e21).toFixed(2) + "Sx"; // Sextillion
    } else if (Beans >= 1e18) {
        clickText.innerText = (Beans / 1e18).toFixed(2) + "Qi"; // Quintillion
    } else if (Beans >= 1e15) {
        clickText.innerText = (Beans / 1e15).toFixed(2) + "Q"; // Quadrillion
    } else if (Beans >= 1e12) {
        clickText.innerText = (Beans / 1e12).toFixed(2) + "T"; // Trillion
    } else if (Beans >= 1e9) {
        clickText.innerText = (Beans / 1e9).toFixed(2) + "B"; // Billion
    } else if (Beans >= 1e6) {
        clickText.innerText = (Beans / 1e6).toFixed(2) + "M"; // Million
    } else if (Beans >= 1e3) {
        clickText.innerText = (Beans / 1e3).toFixed(2) + "K"; // Thousand
    } else {
        clickText.innerText = Beans.toFixed(2);
    }
}

function passiveMoney(){
    Beans += FullPassiveMoney;
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
        coffeeMachineIncome += 1 * Math.pow(1.15, coffeeMachines + 1)
        coffeeMachineCost = parseFloat((coffeeMachineCost * 1.15).toFixed(2))
        coffeeMachines += 1
        updateCosts()
        updateClicks()
        checkMilestones()
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
        coffeeFarmIncome += 10 * Math.pow(1.15, coffeeFarms + 1)
        coffeeFarmCost = parseFloat((coffeeFarmCost * 1.16).toFixed(2))
        coffeeFarms += 1
        updateCosts()
        updateClicks()
        checkMilestones()
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
        coffeeFactoryIncome += 100 * Math.pow(1.15, coffeeFactorys + 1)
        coffeeFactoryCost = parseFloat((coffeeFactoryCost * 1.17).toFixed(2))
        coffeeFactorys += 1
        updateCosts()
        updateClicks()
        checkMilestones()
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
        coffeeGalaxyIncome += 1000 * Math.pow(1.15, coffeeGalaxys + 1)
        coffeeGalaxyCost = parseFloat((coffeeGalaxyCost * 1.18).toFixed(2))
        coffeeGalaxys += 1
        updateCosts()
        updateClicks()
        checkMilestones()
    } else {
        console.log("Rahat ei riitä galaxy upgradeen")
        return
    }
}

function checkIfMax(){
    if (coffeeMachines >= 100) coffeeMachineMax = true;
    if (coffeeFarms >= 100) coffeeFarmMax = true;
    if (coffeeFactorys >= 100) coffeeFactoryMax = true;
    if (coffeeGalaxys >= 100) coffeeGalaxyMax = true;
}

function updateCosts(){
    // Update bpc
    let bpcText = document.getElementById("bpc")
    if (clickPower >= 1e12) {
        bpcText.innerText = "Beans per click: " + (clickPower / 1e12).toFixed(2) + "T"; // Trillion
    } else if (clickPower >= 1e9) {
        bpcText.innerText = "Beans per click: " + (clickPower / 1e9).toFixed(2) + "B"; // Billion
    } else if (clickPower >= 1e6) {
        bpcText.innerText = "Beans per click: " + (clickPower / 1e6).toFixed(2) + "M"; // Million
    } else if (clickPower >= 1e3) {
        bpcText.innerText = "Beans per click: " + (clickPower / 1e3).toFixed(2) + "K"; // Thousand
    } else {
        bpcText.innerText = "Beans per click: " + clickPower.toFixed(2);
    }

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
    if (cost >= 1e12) {
        return (cost / 1e12).toFixed(2) + "T"
    } else if (cost >= 1000000000) {
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
    let allIncome = coffeeFactoryIncome + coffeeMachineIncome + coffeeFarmIncome + coffeeGalaxyIncome
    const bpsText = document.getElementById("bps")
    if (allIncome >= 1e12) {
        bpsText.innerText = "Beans per second: " + (allIncome / 1e12).toFixed(2) + "T"; // Trillion
    } else if (allIncome >= 1e9) {
        bpsText.innerText = "Beans per second: " + (allIncome / 1e9).toFixed(2) + "B"; // Billion
    } else if (allIncome >= 1e6) {
        bpsText.innerText = "Beans per second: " + (allIncome / 1e6).toFixed(2) + "M"; // Million
    } else if (allIncome >= 1e3) {
        bpsText.innerText = "Beans per second: " + (allIncome / 1e3).toFixed(2) + "K"; // Thousand
    } else {
        bpsText.innerText = "Beans per second: " + allIncome.toFixed(2);
    }
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
        updateCosts();
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

// Pop up
function showPopup(messageOtsiokko, messageTeksti) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupText = document.getElementById("popupText");
    popupText.textContent = messageTeksti
    popupMessage.textContent = messageOtsiokko;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Milestonet
function checkMilestones(){

    // Coffee Machine Milestones
    if (coffeeMachines === 25) coffeeMachineIncome *= 1.5, showPopup("Overclocked Brew (LVL 25 Coffee machine)", "Coffee Machinen tuotto +50%");
    if (coffeeMachines === 50) coffeeMachineIncome *= 2, showPopup("Automated Cleaning (LVL 50 Coffee machine)", "Coffee Machine tuotto +100%");
    if (coffeeMachines === 75) clickPower *= 1.2, showPopup("Quantum Espresso Circuit (LVL 75 Coffee machine)", "Kaikkien click power -päivitysten teho +20%");
    if (coffeeMachines === 100 && coffeeMachineMax == false){
        coffeeMachineIncome *= 3;
        clickPower += 1;
        coffeeMachineMax = true
        showPopup("Bean Singularity (LVL 100 Coffee machine)", "Coffee Machine tuotto x3 ja +1 Beans per click")
    }

    // Coffee Farms Milestones
    if (coffeeFarms === 25) coffeeFarmIncome *= 1.5, showPopup("Organic Certification (LVL 25 Coffee farm)", "Farmien tuotto +50%");
    if (coffeeFarms === 50) coffeeFarmIncome *= 2, showPopup("Automated Harvesters (LVL 50 Coffee farm)", "Farmien tuotto +100%");
    if (coffeeFarms === 75) {
        coffeeMachineIncome *= 1.1;
        coffeeFarmIncome *= 1.1;
        coffeeFactoryIncome *= 1.1;
        coffeeGalaxyIncome *= 1.1;
        showPopup("Eco Terraforming (LVL 75 Coffee farm)", "Kaikkien passiivituottojen kokonaisteho +10%")
    }
    if (coffeeFarms === 100 && coffeeFarmMax == false){
        coffeeFarmIncome *= 3
        superFarmBoost = true
        coffeeFarmMax = true
        showPopup("Bio-Engineered Soil (LVL 100 Coffee farm)", "Coffee Farm tuotto x3 ja unlockaa Super Farm Boost (1 min välein +5% kokonaistuotto hetkellisesti)")
    }

    // Coffee Factory Milestones
    if (coffeeFactorys === 25) coffeeFactoryIncome *= 1.5, showPopup("Efficient Assembly Line (LVL 25 Coffee factory)", "Factoryn tuotto +50%");
    if (coffeeFactorys === 50) coffeeFactoryIncome *= 2, showPopup("AI Quality Control (LVL 50 Coffee factory)", "Factoryn tuotto +100%");
    if (coffeeFactorys === 75) clickPower *= 1.3, showPopup("Robo-Bean Synthesizer (LVL 75 Coffee factory)", "Kaikkien click power -päivitysten teho +30%");
    if (coffeeFactorys === 100 && coffeeFactoryMax == false){
        coffeeFactoryIncome *= 4;
        FullPassiveMoney *= 1.1;
        coffeeFactoryMax = true
        showPopup("Infinite Bean Loop (LVL 100 Coffee factory)", "Factory tuotto x4 ja passiivinen tuotto +10% globaalisti")
    }

    // Coffee Galaxy Milestones
    if (coffeeGalaxys === 25) coffeeGalaxyIncome *= 1.5, showPopup("Gravitational Brew Field (LVL 25 Coffee galaxy)", "Galaxy tuotto +50%");
    if (coffeeGalaxys === 50) coffeeGalaxyIncome *= 2, showPopup("Time-Distilled Beans (LVL 50 Coffee galaxy)", "Galaxy tuotto +100%");
    if (coffeeGalaxys === 75) {
        coffeeMachineIncome *= 1.05;
        coffeeFarmIncome *= 1.05;
        coffeeFactoryIncome *= 1.05;
        coffeeGalaxyIncome *= 1.05;
        showPopup("Wormhole Delivery (LVL 75 Coffee galaxy)", "Kaikki passiiviset tuottajat tuottavat +5%")
    }
    if (coffeeGalaxys === 100 && coffeeGalaxyMax == false){
        coffeeGalaxyIncome *= 5;
        FullPassiveMoney *= 1.25;
        coffeeGalaxyMax = true
        showPopup("Cosmic Bean Singularity (LVL 100 Coffee galaxy)", "Galaxy tuotto x5 ja Beans per second +25% universaalisesti")
    }
    updateCosts()

    
}