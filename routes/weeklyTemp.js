const { Router } = require("express");
const {
  setWeeklyAverage,
  getWeeklyReport,
} = require("../controller/weeklyTemp");

const router = Router();

router.post("/set", setWeeklyAverage).get("/get", getWeeklyReport);

module.exports = router;
