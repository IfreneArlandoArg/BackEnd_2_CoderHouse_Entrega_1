const passport = require('passport');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/passport');

// Login y generación de JWT
exports.login = (req, res, next) => {
  passport.authenticate('login', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: info ? info.message : 'Login fallido' });
    }
    req.login(user, { session: false }, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    });
  })(req, res, next);
};

// Ruta /current
exports.current = (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'No autenticado' });
  const { _id, first_name, last_name, email, age, cart, role } = req.user;
  res.json({ _id, first_name, last_name, email, age, cart, role });
};
