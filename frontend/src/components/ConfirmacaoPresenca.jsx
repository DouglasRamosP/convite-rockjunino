import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ConfirmacaoPresenca() {
  const [confirmado, setConfirmado] = useState(false);
  const [nome, setNome] = useState("");

  const handleConfirmarPresenca = async () => {
    if (!nome) return;
    await fetch("http://localhost:3000/api/confirmacoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    });
    setConfirmado(true);
  };

  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-2xl font-semibold">✅ Confirme sua Presença</h2>
        {confirmado ? (
          <p className="text-green-600">Presença confirmada! Obrigado 🤘</p>
        ) : (
          <div className="space-y-2">
            <Input
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Button onClick={handleConfirmarPresenca}>Confirmar Presença</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
