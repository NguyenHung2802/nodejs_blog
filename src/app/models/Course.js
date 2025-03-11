const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, maxLenght: 255},
    description: { type: Number, maxLenght: 600 },
    image: { type: String, maxLenght: 255},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);