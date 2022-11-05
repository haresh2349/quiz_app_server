const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectDB } = require("./confing/db");
const { QuestionsRouter } = require("./route/questions.route");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("WELCOME TO QUIZ APP");
});
app.use("/questions", QuestionsRouter);
app.listen(PORT, async (req, res) => {
  try {
    await connectDB;
    console.log("connected on port", PORT);
  } catch (error) {
    console.log(error);
  }
});

// "category":"Sports",
// "difficulty":"Easy",
// "question":"What is the sum of 2 and 3 ? ",
// "answer" :"5",
// "option1":"6",
// "option2":"4",
// "option3":"23"
