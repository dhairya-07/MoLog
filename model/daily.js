const {Schema, model} = require('mongoose')

const dailySchema = new Schema({
    date:{
        type: Date,
        required:true,
    },
    temp_readings:Array,
    avg_temperature:{
        type:Number,
        required:[true,'Please provide the average temperature']
    }
})

const Daily = model('Daily',dailySchema)
module.exports ={Daily}