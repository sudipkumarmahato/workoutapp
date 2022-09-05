const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const router = require("./routes/workouts");
const mongoose = require("mongoose");
//app
const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //port
    // const port = process.env.PORT || 3000;
    app.listen(process.env.PORT, () => {
      console.log(
        "Backend DB connected and is Listening at Port :",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
//connect tot db

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//to keeps the log of getting the requests and sending a response
app.use(morgan("dev"));
//to communicate the backend and frontend and also to remove the cors policy errors
app.use(cors());
//routes
app.use("/api/workouts/", router);
