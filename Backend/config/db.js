// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/ey_scooters', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://aishwarya11g:Aisu1123@cluster0.7azbrd8.mongodb.net/eco_db?retryWrites=true&w=majority&appName=cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Atlas Connected...');
    
    // Optional: List all collections in the database
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📋 Available Collections:');
    collections.forEach(col => console.log(`- ${col.name}`));
    
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;