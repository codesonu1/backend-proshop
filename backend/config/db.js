const mongoose = require("mongoose");

const connectBD = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
  }
};

module.exports = connectBD;
