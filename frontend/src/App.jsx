import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConviteAniversario from "./pages/ConviteAniversario";
import RecordacoesPage from "./pages/RecordacoesPage";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConviteAniversario />} />
        <Route path="/recordacoes" element={<RecordacoesPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


