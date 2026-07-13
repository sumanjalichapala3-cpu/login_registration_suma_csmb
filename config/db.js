const mongoose = require('mongoose');
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
  try {
    
    await mongoose.connect('mongodb+srv://sumanjalichapala24:suma@1722007@cluster0.fkc7o9w.mongodb.net/');
    
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
