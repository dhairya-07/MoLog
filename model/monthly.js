const {Schema, model} = require('mongoose')

const monthlySchema = new Schema({
    year:{
        type:Date,
        required:true
    },
    month:{
        type:Number,
        required:true
    },
    average_temperature:{
        type:Number,
        required:[true,'Please provide the temperature reading for today']
    }
})

const Monthly = model('Monthly',monthlySchema)
module.exports ={Monthly}