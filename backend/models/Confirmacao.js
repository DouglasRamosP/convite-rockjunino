const mongoose = require("mongoose");

const ConfirmacaoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["pendente", "aprovado", "negado"],
      default: "pendente",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Confirmacao", ConfirmacaoSchema);
