const fs = require("fs");
const path = require("path");

module.exports = class Cart {
    static cartFilePath() {
        return path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'cart.json' // Changed to 'cart.json'
        );
    }

    static addProduct(id, price) {
        console.log('Adding product:', id, price);

        fs.readFile(this.cartFilePath(), (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };

            if (!err && fileContent.length > 0) {
                cart = JSON.parse(fileContent);
            } else if (err) {
                console.log('Error reading cart file:', err);
            }

            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.products.push({ id: id, quantity: 1, price: +price });
            }
            cart.totalPrice += +price;

            console.log('Updated cart:', cart);

            fs.writeFile(this.cartFilePath(), JSON.stringify(cart), (err) => {
                if (err) console.log('Error updating cart:', err);
                else console.log('Cart updated successfully');
            });
        });
    }
};