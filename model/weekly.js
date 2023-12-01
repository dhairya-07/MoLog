const {Schema, model} = require('mongoose')

const weeklySchema = new Schema({
    month:{
        type:String,
    },
    
    weekly_average:[{
        week_number:Number,
        average:Number
    }
    ]
})

const Weekly = model('Weekly',weeklySchema)
module.exports ={Weekly}