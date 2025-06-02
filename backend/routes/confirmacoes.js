const express = require("express");
const router = express.Router();
const Confirmacao = require("../models/Confirmacao");

router.post("/", async (req, res) => {
  try {
    const { nome, telefone, email } = req.body;

    if (!nome || !telefone) {
      return res.status(400).json({ error: "Nome e telefone são obrigatórios" });
    }

    const novaConfirmacao = new Confirmacao({ nome, telefone, email });
    await novaConfirmacao.save();

    res.status(201).json({ message: "Confirmação registrada com sucesso!" });
  } catch (err) {
    console.error("Erro ao salvar confirmação:", err);
    res.status(500).json({ error: "Erro no servidor" });
  }
});

module.exports = router;
