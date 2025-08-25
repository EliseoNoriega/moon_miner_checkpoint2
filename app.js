let pipis = 0

let pipisGained = 1

function mine() {
    pipis += pipisGained
    update()

}

function update() {

    document.getElementById('pipis-counter').innerHTML = "Pipis Counter " + pipis
    document.getElementById
    document.getElementById
    document.getElementById
    document.getElementById
}

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

function buyMoss() {


    if (pipis >= clickUpgrades[0].price) {

        pipisGained += 1
        clickUpgrades[0].quantity += 1
        pipis -= clickUpgrades[0].price
        clickUpgrades[0].price += 2
    }

    update()
}