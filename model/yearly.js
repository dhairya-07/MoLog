const {Schema, model} = require('mongoose')

const yearlySchema = new Schema({
    year:{
        type: Date,
        required:true,
        unique:true
    },
    average_temperature:{
        type:Number,
        required:[true,'Please provide the temperature reading for today']
    }
})

const Yearly = model('Yealy',yearlySchema)
module.exports ={Yearly}