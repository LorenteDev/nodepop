'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, index: true },
    selling: { type: Boolean, index: true },
    price: { type: Number, index: true },
    image: String,
    tags: { type: [String], index: true }
})

productSchema.statics.list = function (filter, start, limit, sort) {
    const query = Product.find(filter);
    query.skip(start);
    query.limit(limit);
    query.sort(sort);
    return query.exec();
}

// EXAMPLE
// productSchema.methods.action = function() {

// }

const Product = mongoose.model('Product', productSchema)

module.exports = Product
