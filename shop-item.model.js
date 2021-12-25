const mongoose = require('mongoose');

const shopItem = mongoose.Schema({
    time: {type: 'string', required: true},
    title: {type: 'string', required: true},
    className: {type: 'string', required: true},
    amount: {type: 'number', required: true},
    color: {type: 'string', required: true},
    price: {type: 'number', required: true},
    image: {type: 'string', required: true}
});

module.exports = mongoose.model('ShopItems', shopItem);