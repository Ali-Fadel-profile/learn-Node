const fs = require("fs");
const path = require("path");
const rootPath = require("../util/path");

const dataPath = path.join(rootPath, "data", "products.json");

const getProductsFromFile = (cb) => {
    fs.readFile(dataPath, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(dataPath, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}