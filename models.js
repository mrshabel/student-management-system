const mongoose = require("mongoose")

// create Student schema
const StudentSchema = new mongoose.Schema({
    studentID: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    sex: { type: String, required: true, enum: ["M", "F"] },
    level: { type: String, required: true, enum: ["100", "200", "300", "400", "500", "600", "700"] },
    createdAt: { type: Date, required: true, default: Date.now },
});

// create Student model
const Student = mongoose.model("Student", StudentSchema);

// export the model
module.exports = Student;