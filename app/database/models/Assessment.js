import mongoose from "mongoose";

const schema = new mongoose.Schema({
  externalUserId: String,
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  familyIncome: {
    type: Number,
  },
  cgpa: {
    type: String,
  },
  majorIncidence: {
    type: String,
  },
  gender: {
    type: String,
  },
  year: {
    type: Number,
  },
});

const Assessment =
  mongoose.models.Assessment || mongoose.model("Assessment", schema);

export default Assessment;
