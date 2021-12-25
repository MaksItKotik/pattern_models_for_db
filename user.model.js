const mongoose = require('mongoose');

const user = mongoose.Schema({
    time: {type: 'string', required: true},
    name: {type: 'string', required: true},
    email: {type: 'string', required: true},
    tel: {type: 'string', required: true},
    language: {type: 'string', required: true},
    image: {type: 'string', required: true}
});

module.exports = mongoose.model('Users', user);