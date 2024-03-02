import mongoose from "mongoose";

const schema = new mongoose.Schema({
    externalUserId: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    familyIncome: {
        type: Number,
        required: true
    },
    cgpa: {
        type: String,
        required: true
    },
    majorIncidence: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const Assessment = mongoose.models.User || mongoose.model("Assessment", schema);

export default Assessment;
