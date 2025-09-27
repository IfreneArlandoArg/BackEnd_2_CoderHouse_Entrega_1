const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://user_CoderHouse:4vpwU9WnfwHLLy57@cluster-coderhouse-back.k1efd0o.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster-CoderHouse-BackEnd1';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Error al conectar con MongoDB', err);
  }
};

module.exports = connectDB;