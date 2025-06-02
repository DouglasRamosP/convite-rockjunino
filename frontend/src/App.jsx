import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConviteAniversario from "./pages/ConviteAniversario";
import RecordacoesPage from "./pages/RecordacoesPage"; // <-- crie esse depois

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConviteAniversario />} />
        <Route path="/recordacoes" element={<RecordacoesPage />} />
      </Routes>
    </BrowserRouter>
  );
}


