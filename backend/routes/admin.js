const express = require("express");
const router = express.Router();
const Confirmacao = require("../models/Confirmacao");

// GET por status
router.get("/:status", async (req, res) => {
  const { status } = req.params;
  try {
    const dados = await Confirmacao.find({ status });
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar confirmações." });
  }
});

// GET /admin/contagem
router.get("/contagem", async (req, res) => {
  try {
    const pendentes = await Confirmacao.countDocuments({ status: "pendente" });
    const aprovados = await Confirmacao.countDocuments({ status: "aprovado" });
    const negados = await Confirmacao.countDocuments({ status: "negado" });

    res.json({ pendentes, aprovados, negados });
  } catch (err) {
    res.status(500).json({ error: "Erro ao contar confirmações." });
  }
});


// PATCH atualizar status
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const atualizado = await Confirmacao.findByIdAndUpdate(id, { status }, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar confirmação." });
  }
});

module.exports = router;
