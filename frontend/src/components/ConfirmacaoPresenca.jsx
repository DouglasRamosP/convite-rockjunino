import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ConfirmacaoPresenca() {
  const [confirmado, setConfirmado] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirmarPresenca = async () => {
    if (!nome || !telefone) {
      alert("Preencha nome e telefone!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/confirmacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, telefone, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Erro ao confirmar presença.");
        return;
      }

      setConfirmado(true);
      setNome("");
      setTelefone("");
      setEmail("");
    } catch (error) {
      console.error("Erro ao enviar confirmação:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <Card className="bg-[#2c261f] border-none text-[#f5edda] font-serif backdrop-blur-md">
      <CardContent className="py-4 space-y-2">
        <h2 className="text-xl font-semibold">Solicite seu ingresso</h2>

        {confirmado ? (
          <p className="text-green-400">
            📩 Sua solicitação foi recebida com sucesso! Ela será analisada com
            carinho, e em breve você receberá o retorno pelo e-mail ou WhatsApp
            informado. Fique de olho… a festa continua por aqui também! 🎉🤘
          </p>
        ) : (
          <div className="space-y-2">
            <Input
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="bg-[#f5edda] text-black placeholder:text-gray-500"
            />
            <Input
              placeholder="Telefone (WhatsApp)"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="bg-[#f5edda] text-black placeholder:text-gray-500"
            />
            <Input
              placeholder="Email (opcional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#f5edda] text-black placeholder:text-gray-500"
            />
            <Button
              onClick={handleConfirmarPresenca}
              className="bg-orange-500 rounded-lg hover:bg-orange-600 text-white px-4"
            >
              Confirmar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
