const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
const userImage = Schema({
    name: String,
    image: Buffer
})

let User = new Schema({
    username: {
        type: String
    },
    userAddress: {
        type: String
    },
    userMobileNumber: {
        type: Number
    },
    userImage: userImage
});

module.exports = mongoose.model('user', User);