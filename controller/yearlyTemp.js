const {Yearly} = require('../model/yearly')
const {Monthly} = require('../model/monthly')
const catchAsync = require('../utils/catchAsync')

const setYearlyTemp = catchAsync(async(req, res, next)=>{
    const {year}= req.body
    const monthlyTemp = await Monthly.find({year})
    const yearly_average_temp = monthlyTemp.map(el=>el.average_temperature).reduce((sum, acc)=>sum+acc,0)/12
    await Yearly.create({
        year,
        average_temperature:yearly_average_temp
    })
    return res.status(201).json({msg:'Success'})
})

const getYearlyReport=catchAsync(async(req, res, next)=>{
    const yearlyReport = await Yearly.find({year})
    return res.status(200).json({
        msg:'Success',
        data:{
            yearlyReport
        }
    })
})

module.exports ={
    setYearlyTemp,
    getYearlyReport
}