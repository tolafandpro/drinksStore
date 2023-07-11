const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
    },
    size:{
        type:String,
    },
    price:{
        type:Number,
    },
},
{timestamp: true});

//Export the model
module.exports = mongoose.model('Product', productSchema);