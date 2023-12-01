const express = require("express");
const mongoose = require("mongoose");
const dailyRouter = require("./routes/dailyTemp");
const weeklyRouter = require("./routes/weeklyTemp");
const monthlyRouter = require("./routes/monthlyTemp");
const yearlyRouter = require("./routes/yearlyTemp");

const app = express();
const PORT = 4004;

const mongoURL = `mongodb://127.0.0.1:27017/MoLog`;
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Server connected");
  })
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});

app.use("/api/daily", dailyRouter);
app.use("/api/weekly", weeklyRouter);
app.use("/api/monthly", monthlyRouter);
app.use("/api/yearly", yearlyRouter);
app.use(globalErrorHandler);
