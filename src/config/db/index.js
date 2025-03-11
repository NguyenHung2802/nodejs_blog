
const mongoose = require('mongoose');
async function connect() {
    try{    
        await mongoose.connect('mongodb://localhost:27017/Blog_education_dev', {
            useUnifiedTopology: true
        });
        console.log('Successfully connected');
    } catch (error) {
        console.log('Error connecting', error);
    }
}

module.exports = {connect};