const {Monthly}= require('../model/monthly')
const {Weekly}= require('../model/weekly')
const catchAsync = require('../utils/catchAsync')

const setMonthlyTemp = catchAsync(async(req, res, next)=>{
    const {month, year} = req.body
    const monthlyTemp = await Weekly.find({month})

    const monthly_avg_temp = monthlyTemp.weekly_average.reduce((sum, entry)=>sum+entry.average)/4

    await Monthly.create({
        year,
        month,
        average_temperature:monthly_avg_temp
    })
    return res.status(201).json({msg:'Success'})
})

const getMonthlyReport= catchAsync(async(req, res, next)=>{
    const {year, month} = req.body
    const monthlyReport = await Monthly.find({year, month})
    return res.status(200).json({
        msg:'Success',
        data:{monthlyReport}
    })
})

module.exports ={
    setMonthlyTemp,
    getMonthlyReport
}