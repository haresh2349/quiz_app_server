const { Router } = require("express");
const { QuestionModel } = require("../model/questionsSchema");

const QuestionsRouter = Router();

QuestionsRouter.post("/upload", async (req, res) => {
  try {
    let newQuestion = new QuestionModel(req.body);
    await newQuestion.save();
    return res
      .status(200)
      .send({ type: "success", message: "Question Uploaded successfully" });
  } catch (error) {
    return res
      .status(501)
      .send({ type: "error", message: "Something went wrong" });
  }
});

QuestionsRouter.get("/getAll", async (req, res) => {
  try {
    const { category, difficulty, numberOfQuestions } = req.body;
    let questions = [];
    if (category && difficulty && numberOfQuestions) {
      questions = await QuestionModel.find({
        category: category,
        difficulty: difficulty,
        numberOfQuestions: numberOfQuestions,
      });
    } else {
      questions = await QuestionModel.find({});
    }

    return res.status(200).send({ type: "success", questions: questions });
  } catch (error) {
    console.log(error);
    return res
      .status(501)
      .send({ type: "error", message: "Something went wrong" });
  }
});

module.exports = { QuestionsRouter };
