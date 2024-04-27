const shoppingCart = {
    items: [],

    addItem: item => {
        console.debug('addItem');
        shoppingCart.items.push(item);
    },
    removeItem: index => {
        console.debug('removeItem');
        shoppingCart.items.splice(index, 1);
    },
    calculateTotal: () => {
        console.debug('calculateTotal');
        return shoppingCart.items.reduce((total, item) => total + item.price, 0);
    },
    applyDiscountCode: code => {
        switch (code) {
            case 'SAVE10':
                return shoppingCart.calculateTotal() * 0.9; // Apply 10% discount
            case 'SAVE20':
                return shoppingCart.calculateTotal() * 0.8; // Apply 20% discount
            default:
                return shoppingCart.calculateTotal();
        }
    },
    getCurrentItems: () => shoppingCart.items.map(item => item.name),

    getItemByName: (name) => {
        return shoppingCart.items.find(item => item.name == name);
    }
};

// Clear items
shoppingCart.items = [];

// Helper to create items object
class Item {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}

const item1 = new Item('Shirt', 20);
const item2 = new Item('Pants', 30);
const item3 = new Item('temp', 100);

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);
shoppingCart.addItem({ name: 'temp', price: 40 });

console.log(shoppingCart.getCurrentItems()); // Output: ['Shirt', 'Pants']

shoppingCart.removeItem(0);
console.log(shoppingCart.getCurrentItems()); // Output: ['Pants']

console.log(shoppingCart.calculateTotal()); // Output: 70

console.log(shoppingCart.applyDiscountCode('SAVE10')); // Output: 63

console.log(shoppingCart.getItemByName('Pants')) // Output: { name: 'Pants', price: 30, discount: 0}
