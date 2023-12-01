const { Daily } = require('../model/daily')
const {Weekly}=require('../model/weekly')
const catchAsync = require('../utils/catchAsync')

const setWeeklyAverage=catchAsync(async(req, res, next)=>{
    const {month} = req.body
    const weeklyData = await Daily.find().sort({date:-1}).skip(0).limit(7)
    const weekly_average_temp = weeklyData.reduce((sum, entry)=>sum+entry.avg_temperature,0)/7

    const thisMonthWeeklyData = await Weekly.find({month})

    if(!thisMonthWeeklyData){
        await Weekly.create({
            month,
            weekly_average:[{
                week_number:1,
                weekly_average:weekly_average_temp
            }]
        })
        return res.status(201).json({
            msg:'Success'
        })
    }
    else{
        await Weekly.updateOne({month},{
            $push:{
                week_number: thisMonthWeeklyData.weekly_average.length+1,
                weekly_average:weekly_average_temp
            },
        })
    }
    return res.status(200).json({msg:'Success'})
    
})

const getWeeklyReport = catchAsync(async(req, res, next)=>{
    const weeklyReport = await Weekly.find({month})
    return res.status(200).json({msg:'Success',data:{weeklyReport}})
})

module.exports = {
    setWeeklyAverage,
    getWeeklyReport
}