const { Router } = require("express");
const {
  setMonthlyTemp,
  getMonthlyReport,
} = require("../controller/monthlyTemp");

const router = Router();

router.post("/set", setMonthlyTemp).get("/get", getMonthlyReport);

module.exports = router;
