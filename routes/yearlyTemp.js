const { Router } = require("express");
const { setYearlyTemp, getYearlyReport } = require("../controller/yearlyTemp");

const router = Router();

router.post("/set", setYearlyTemp).get("/get", getYearlyReport);

module.exports = router;
