//Array Library
let clickUpgrades = [
    {
        name: 'Moss',
        price: 10,
        quantity: 0,
        bonus: 1
    },

    {
        name: 'Dealmakers',
        price: 15,
        quantity: 0,
        bonus: 3,
    }
];

let automaticUpgrades = [
    {
        name: 'ThornRing',
        price: 20,
        quantity: 0,
        bonus: 5
    },
    {
        name: 'Hyper',
        price: 35,
        quantity: 0,
        bonus: 10
    }
];

// Variable Library
let pipis = 0
let pipisGained = 1
let pipisPerTimer = 0




setInterval(automine, 1000 * 3)

// The misc function zone. Keeps all the unique types of functions
function mine() {
    pipis += pipisGained
    update()

}

function update() {


    document.getElementById('pipis-counter').innerHTML = "Pipis Counter: " + pipis
    document.getElementById('gain').innerHTML = "Pipis gained per click: " + pipisGained
    document.getElementById('time-gain').innerHTML = "Pipis gained every 3 seconds: " + pipisPerTimer
    document.getElementById('')
    clearInterval

}

function automine() {
    pipis += pipisPerTimer
    update()
}



//The shopping function zone. Keeps all the purchase based ones
function buyMoss() {

    if (pipis >= clickUpgrades[0].price) {

        pipisGained += clickUpgrades[0].bonus
        clickUpgrades[0].quantity += 1
        pipis -= clickUpgrades[0].price
        clickUpgrades[0].price += 2
        document.getElementById('moss-quantity').innerHTML = "Moss: " + clickUpgrades[0].quantity
        document.getElementById('moss-price').innerHTML = "price: " + clickUpgrades[0].price
    }

    update()
}
function buyDealmakers() {

    if (pipis >= clickUpgrades[1].price) {

        pipisGained += clickUpgrades[1].bonus
        clickUpgrades[1].quantity += 1
        pipis -= clickUpgrades[1].price
        clickUpgrades[1].price += 2
        document.getElementById('Dealmakers-quantity').innerHTML = "Dealmakers: " + clickUpgrades[1].quantity
        document.getElementById('Dealmakers-price').innerHTML = "price: " + clickUpgrades[1].price
        update()
    }


}

function buyThornring() {
    if (pipis >= automaticUpgrades[0].price) {

        pipisPerTimer += automaticUpgrades[0].bonus

        automaticUpgrades[0].quantity += 1
        pipis -= automaticUpgrades[0].price
        automaticUpgrades[0].price += 10
        document.getElementById('Thorn-quantity').innerHTML = "Thorn Ring: " + automaticUpgrades[0].quantity
        document.getElementById('Thorn-price').innerHTML = "price: " + automaticUpgrades[0].price
        update()

    }

}

function buyHyper() {
    if (pipis >= automaticUpgrades[1].price) {
        pipis -= automaticUpgrades[1].price
        pipisPerTimer += automaticUpgrades[1].bonus
        automaticUpgrades[1].quantity += 1
        automaticUpgrades[1].price += 15
        document.getElementById("Hyper-quantity").innerHTML = "[[HyperlinkBlocked]]:" + automaticUpgrades[1].quantity
        document.getElementById("Hyper-price").innerHTML = "price: " + automaticUpgrades[1].price
        update()
    }
}


