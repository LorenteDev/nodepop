var express = require('express');
var router = express.Router();

const Product = require('../../models/Product')

const validTags = ['work', 'lifestyle', 'motor', 'mobile']

// GET /api/products
router.get('/', async function (req, res, next) {
    try {
        const name = new RegExp('^' + req.query.name, "i");
        const selling = req.query.selling;
        let priceRange = req.query.price;
        const tags = req.query.tag;
        const start = parseInt(req.query.start);
        const limit = parseInt(req.query.limit);
        const sort = req.query.sort;

        const filter = {}

        if (priceRange) {
            priceRange = priceRange.split('-');

            if (priceRange.length == 1) { // Greater than
                filter.price = { '$gte': parseInt(priceRange[0]) }
            } else if (priceRange.length == 2) {
                if (priceRange[0] === '') { // Lower than
                    filter.price = { '$lte': parseInt(priceRange[1]) }
                } else if (priceRange[1] !== '') { // Between
                    filter.price = { '$gte': parseInt(priceRange[0]), '$lte': parseInt(priceRange[1]) }
                }
            }
        }

        if (req.query.name) {
            filter.name = name
        }
        if (selling) {
            filter.selling = selling
        }
        if (tags) {
            filter.tags = tags
        }

        const result = await Product.list(filter, start, limit, sort)
        res.json(result);
    } catch (err) {
        next(err);
    }
});

// GET /api/products/tags
router.get('/tags', async function (req, res, next) {
    try {
        let result = {}
        result.tags = await Product.distinct('tags');
        res.json(result);
    } catch (err) {
        next(err);
    }
});

// POST /api/products
router.post('/', async (req, res, next) => {
    try {
        const productData = req.body;

        const product = new Product(productData)

        await product.save();

        res.json(product);
    } catch (error) {
        next(error)
    }
})

module.exports = router;
