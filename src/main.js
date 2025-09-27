const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const sessionRoutes = require('./routes/sessions');
require('./config/passport');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);

app.get('/', (req, res) => {
  res.send('Ecommerce API funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
