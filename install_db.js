const Product = require('./models/Product');
const products = require('./products.json');

async function start() {
    await Product.deleteMany({})
    await Product.insertMany(products.products);
}

module.exports = { start }