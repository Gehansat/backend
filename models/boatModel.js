//Model of Boat collection


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoatSchema = new Schema ({
    Capacity:{
        type : Number,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    Cost:{
        type: Number,
        required: true
    },
    Description:{
        type:String,
        required:true
    },
},{timestamps:true})

const Boa = mongoose.model("Boa" ,BoatSchema );
module.exports = Boa;