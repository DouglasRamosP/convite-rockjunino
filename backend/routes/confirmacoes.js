const express = require("express");
const router = express.Router();
const Confirmacao = require("../models/Confirmacao");

router.post("/", async (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ error: "Nome é obrigatório" });

  try {
    await Confirmacao.create({ nome });
    res.status(200).json({ message: "Presença confirmada!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao registrar confirmação" });
  }
});

router.get("/", async (req, res) => {
  try {
    const confirmados = await Confirmacao.find().sort({ data: -1 });
    res.status(200).json(confirmados);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar confirmações" });
  }
});

module.exports = router;
