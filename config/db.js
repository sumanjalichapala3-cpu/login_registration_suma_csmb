const mongoose = require('mongoose');

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    // MongoDB Atlas connection string
    const connString = "mongodb+srv://KulsumShaik24_db_user:kulsum20@cluster0.nxftcfq.mongodb.net/kulsum?appName=cluster0";
    
    await mongoose.connect(connString);
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
