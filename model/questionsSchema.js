const { Schema, model } = require("mongoose");

const QuestionsSchema = new Schema({
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
});

const QuestionModel = model("question", QuestionsSchema);

module.exports = { QuestionModel };
