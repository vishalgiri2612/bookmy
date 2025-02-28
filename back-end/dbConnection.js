const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://Vishal:1234567890@cluster0.dyypa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;
