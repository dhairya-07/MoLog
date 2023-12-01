const { Router } = require("express");
const {
  setTemperatureData,
  getTemperatureData,
} = require("../controller/dailyTemp");

const router = Router();

router.post("/set", setTemperatureData).get("/get", setTemperatureData);

module.exports = router;
