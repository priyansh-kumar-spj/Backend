const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://NOTES:notesNotes22@cluster0.w4wgdq7.mongodb.net/halley",
  );

  console.log("Connected To DB");
}

module.exports = connectDB;
