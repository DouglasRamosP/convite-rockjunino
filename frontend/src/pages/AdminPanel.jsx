import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import BotaoHome from "@/components/BotaoHome";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [confirmacoes, setConfirmacoes] = useState([]);
  const [filtro, setFiltro] = useState("pendente");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    fetchConfirmacoes();
  }, [filtro]);

  async function fetchConfirmacoes() {
    try {
      const response = await fetch(`https://convite-rockjunino.onrender.com/admin/${filtro}`);
      const data = await response.json();
      setConfirmacoes(data);
    } catch (error) {
      console.error("Erro ao buscar confirmações:", error);
    }
  }

  async function atualizarStatus(id, novoStatus) {
    try {
      await fetch(`https://convite-rockjunino.onrender.com/admin/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: novoStatus }),
      });
      fetchConfirmacoes();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] text-white p-6 font-sans">
      <BotaoHome />

      <h1 className="text-3xl font-bold mb-6">Painel Administrativo</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setFiltro("pendente")}
          className={filtro === "pendente" ? "text-orange-400" : ""}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFiltro("aprovado")}
          className={filtro === "aprovado" ? "text-orange-400" : ""}
        >
          Aprovados
        </button>
        <button
          onClick={() => setFiltro("negado")}
          className={filtro === "negado" ? "text-orange-400" : ""}
        >
          Negados
        </button>
      </div>

      {confirmacoes.length === 0 ? (
        <p>Nenhum registro encontrado.</p>
      ) : (
        confirmacoes.map((c) => (
          <Card
            key={c._id}
            className="mb-4 bg-[#2c261f] border border-[#444] text-[#f5edda]"
          >
            <CardContent className="space-y-2">
              <p>
                <strong>Nome:</strong> {c.nome}
              </p>
              <p>
                <strong>Telefone:</strong> {c.telefone}
              </p>
              {c.email && (
                <p>
                  <strong>Email:</strong> {c.email}
                </p>
              )}
              <p>
                <strong>Status:</strong> {c.status}
              </p>
              <p className="text-sm text-gray-400">
                {new Date(c.createdAt).toLocaleString()}
              </p>

              <div className="flex gap-2 mt-2">
                {filtro === "pendente" && (
                  <>
                    <button
                      onClick={() => atualizarStatus(c._id, "aprovado")}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 text-sm rounded text-white"
                    >
                      Aprovar
                    </button>
                    <button
                      onClick={() => atualizarStatus(c._id, "negado")}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 text-sm rounded text-white"
                    >
                      Negar
                    </button>
                  </>
                )}
                {filtro === "aprovado" && (
                  <button
                    onClick={() => atualizarStatus(c._id, "negado")}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 text-sm rounded text-white"
                  >
                    Negar
                  </button>
                )}
                {filtro === "negado" && (
                  <button
                    onClick={() => atualizarStatus(c._id, "aprovado")}
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 text-sm rounded text-white"
                  >
                    Aprovar
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
