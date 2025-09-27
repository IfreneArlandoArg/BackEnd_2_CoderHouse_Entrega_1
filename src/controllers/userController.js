const bcrypt = require('bcrypt');
const User = require('../models/User');

// Crear usuario
exports.createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, age, password, cart, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
      first_name,
      last_name,
      email,
      age,
      password: hashedPassword,
      cart,
      role
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Leer usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Leer usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    let update = { ...rest };
    if (password) {
      update.password = bcrypt.hashSync(password, 10);
    }
    const user = await User.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
