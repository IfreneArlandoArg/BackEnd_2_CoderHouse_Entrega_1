const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const authJWT = require('../middlewares/auth');

router.post('/login', sessionController.login);
router.get('/current', authJWT, sessionController.current);

module.exports = router;