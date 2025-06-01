# 🎸 Convite Rock Junino

Site convite de aniversário com o tema **Rock Junino**, desenvolvido com React + Vite no frontend e Node.js + Express no backend. Os convidados podem visualizar informações do evento, atrações, e confirmar presença diretamente pela página.

---

## ✨ Funcionalidades

- 📍 Local e horário do evento
- 🎤 Lista de atrações
- 🍻 Bebidas e comidas disponíveis
- 🎁 Proposta solidária (trazer ração ou leite)
- ✅ Formulário para confirmação de presença (salvo no MongoDB)

---

## 🧱 Tecnologias Utilizadas

### 🔹 Frontend
- React + Vite
- TailwindCSS
- Componentes personalizados (`Card`, `Button`, etc)

### 🔸 Backend
- Node.js + Express
- MongoDB Atlas
- CORS + dotenv

---

## 🚀 Como rodar o projeto localmente

### 🔧 Pré-requisitos
- Node.js 18+
- Conta no MongoDB Atlas

### 📦 Backend

```bash
cd backend
cp .env.example .env
# edite com sua URI do MongoDB

npm install
npm start
```

### 💻 Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse: http://localhost:5173

---

## 📡 API

| Método | Rota                    | Descrição                     |
|--------|-------------------------|-------------------------------|
| POST   | `/api/confirmacoes`     | Envia confirmação de presença |
| GET    | `/api/confirmacoes`     | Lista confirmações recebidas  |

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests!

## 📜 Licença

Este projeto é livre para uso pessoal e educativo.
