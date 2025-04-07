const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string if needed
    const conn = await mongoose.connect('mongodb://localhost:27017/node_auth_app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
