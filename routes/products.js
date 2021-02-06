var express = require('express');
var router = express.Router();

const Product = require('../models/Product')

/* GET home page. */
router.get('/', async function (req, res, next) {

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

  const resultSet = await Product.list(filter, start, limit, sort)

  res.render('products', { resultSet: resultSet });
});

module.exports = router;
