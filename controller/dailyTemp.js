const {Daily} = require('../model/daily')
const catchAsync = require('../utils/catchAsync')


const setTemperatureData = catchAsync(async(req, res, next)=>{
    const {date, temp} = req.body
    
    if(!await Daily.exists(date)){
        const dailyTemp = await Daily.create({
            date,
            temp_readings:[temp],
            avg_temperature:temp
        })
        return res.status(201).json({
            status:'Success',
            msg:'First entry!'
        })
    }else{
       const updatedInfo= await Daily.updateOne({date}, {
            $push:{temp_readings:temp},
            $set:{avg_temperature:{$avg:['$avg_temperature',temp]}}
        })
        if(updatedInfo.temp_readings[updatedInfo.temp_readings.length-2]<temp){
            return res.status(200).json({
                status:'Success',
                msg:`Today's temperature is positively different from yesterday's`
            })
        }
        return res.status(200).json({
            status:'Success',
            msg:`Today's temperature is negatively different from yesterday's`
        })
    }
})

const getTemperatureData = catchAsync(async(req, res, next)=>{
    const temp_data= await Daily.findOne({date})
    return res.status(200).json({
        msg:'success',
        data:{
            temp_data
        }
    })
})

module.exports={
    setTemperatureData,
    getTemperatureData
}