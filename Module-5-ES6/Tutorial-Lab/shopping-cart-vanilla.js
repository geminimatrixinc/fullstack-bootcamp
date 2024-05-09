var shoppingCart = {
    items: [],

    addItem: function (item) {
        console.debug('addItem')
        this.items.push(item);
    },
    removeItem: function (index) {
        console.debug('removeItem')
        this.items.splice(index, 1);
    },
    calculateTotal: function () {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;
    },
    applyDiscountCode: function (code) {
        switch (code) {
            case 'SAVE10':
                return this.calculateTotal() * 0.9; // Apply 10% discount
            case 'SAVE20':
                return this.calculateTotal() * 0.8; // Apply 20% discount
            default:
                return this.calculateTotal();
        }
    },
    getCurrentItems: function () {
        return this.items.map(item => item.name);
    },

    getItemByName: function (name) {
        for(var i = 0; i < this.items.length; i++) {
            var currentItem = this.items[i];
            if(name = currentItem.name) {
                return currentItem
            }
        }
    }
};



// helper to create items object
function Item(name, price, discount = 0) {
    this.name = name;
    this.price = price;
    this.discount = discount
}

let item1 = new Item('Shirt', 20);
let item2 = new Item('Pants', 30);
let item3 = new Item('temp', 100);

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);

shoppingCart.addItem({ name: 'temp', price: 40 })


console.log(shoppingCart.getCurrentItems()); // Output: ['Shirt', 'Pants']

shoppingCart.removeItem(0);
console.log(shoppingCart.getCurrentItems()); // Output: ['Pants']

console.log(shoppingCart.calculateTotal()); // Output: 30

console.log(shoppingCart.applyDiscountCode('SAVE10')); // Output: 27

console.log(shoppingCart.getItemByName('Pants')) // Output: { name: 'Pants', price: 30, discount: 0}

