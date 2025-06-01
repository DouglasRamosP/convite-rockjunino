const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const confirmacoesRoute = require("./routes/confirmacoes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/confirmacoes", confirmacoesRoute);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado ao MongoDB");
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
})
.catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
