document.getElementById("btnClick").addEventListener("click", click);
document.getElementById("btnClickUpgrade").addEventListener("click", clickUpgrade)
document.getElementById("btnPassiveUpgrade").addEventListener("click", passiveUpgrade)
let clicksValue = 0

// Clicks income
let clickPower = 1
let passivePower = 0

let clickUpgradeCost = 50
let passiveUpgradeCost = 500

function click(event){
    clicksValue += clickPower
    updateClicks()
}

function updateClicks(){
    let clickText = document.getElementById("clicks");
    if (clickText) {
        clickText.innerText = clicksValue;
    } else {
        console.error("Element with id 'clicks' not found.");
    }
}

function clickUpgrade(){
    if (clicksValue >= clickUpgradeCost) {
        clicksValue = clicksValue - clickUpgradeCost
        clickPower = clickPower * 2
        clickUpgradeCost = clickUpgradeCost * 2
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä click upgradeen")
        return
    }
    
}

function passiveMoney(){
    clicksValue += passivePower;
    updateClicks();
}

setInterval(passiveMoney, 1000);

function passiveUpgrade(){
    if (clicksValue >= passiveUpgradeCost) {
        clicksValue = clicksValue - passiveUpgradeCost
        if (passivePower == 0){
            passivePower = passivePower + 100
        } else {
            passivePower = passivePower * 2
        }
        passiveUpgradeCost = passiveUpgradeCost * 2
        updateCosts()
        updateClicks()
    } else {
        console.log("Rahat ei riitä passive upgradeen")
        return
    }
}

function updateCosts(){
    document.getElementById("clickUpgradeCost").innerText = clickUpgradeCost
    document.getElementById("passiveUpgradeValue").innerText = "+" + passivePower
    document.getElementById("passiveUpgradeCost").innerText = passiveUpgradeCost
    document.getElementById("clickSecond").innerText = passivePower
}