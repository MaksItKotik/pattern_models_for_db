const mongoose = require('mongoose');
// If you wanna you can replace this line on:
//      import import mongoose from 'mongoose';
//      const { Schema } = mongoose;

// If you use IMPORT on first comment set:
//      ... = new Schema({...
const shopItem = mongoose.Schema({
    time: {type: 'string', required: true},
    title: {type: 'string', required: true},
    className: {type: 'string', required: true},
    amount: {type: 'number', required: true},
    color: {type: 'string', required: true},
    price: {type: 'number', required: true},
    image: {type: 'string', required: true}
});

// If you use IMPORT set replace bottom line to:
//      export default mongoose.model(...)
module.exports = mongoose.model('ShopItems', shopItem);
