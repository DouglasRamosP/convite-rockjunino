const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Usar variáveis de ambiente
const ADMIN_USER = {
  username: process.env.ADMIN_USER,
  password: process.env.ADMIN_PASSWORD,
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return res.json({ token });
  }

  res.status(401).json({ error: "Credenciais inválidas" });
});

module.exports = router;
