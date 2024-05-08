const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname : {
        type : String,
        required: true
    },
    lname : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    mobilenumber : {
        type : Number,
        required: true
    },
    alternatemobilenumber : {
        type : Number
    },
    email : {
        type: String,
        unique: true
    },
    pastmedicalhistory : {
        type: String,
        required: false
    },
    ongoingpastmedication : {
        type: String,
        required: false
    },
    alergies : {
        type: String,
        required: false
    },
    habits : {
        type: String,
        required: false
    },
    symptoms : {
        type: String,
        required: false
    },
    diagnosis : {
        type: String,
        required: false
    },
    advice : {
        type: String,
        required: false
    },
    medication : {
        type: String,
        required: false
    },
    doctor : {
        type: String,
        required: false
    },
    assdoctor : {
        type: String,
        required: false
    },
    pastappt : {
        type: String,
        required: false
    },
    upcomingappt : {
        type: String,
        required: false
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;