const mongoose = require('mongoose');
// If you wanna you can replace this line on:
//      import import mongoose from 'mongoose';
//      const { Schema } = mongoose;

// If you use IMPORT on first comment set:
//      ... = new Schema({...
const user = mongoose.Schema({
    time: {type: 'string', required: true},
    name: {type: 'string', required: true},
    email: {type: 'string', required: true},
    tel: {type: 'string', required: true},
    language: {type: 'string', required: true},
    image: {type: 'string', required: true}
});

// If you use IMPORT set replace bottom line to:
//      export default mongoose.model(...)
module.exports = mongoose.model('Users', user);
