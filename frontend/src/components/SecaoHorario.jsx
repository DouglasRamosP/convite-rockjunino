import { Card, CardContent } from "@/components/ui/card";

export default function SecaoHorario() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-2xl font-semibold">🕒 Horário</h2>
        <p>Dia 15 de Julho de 2025 às 18h00</p>
      </CardContent>
    </Card>
  );
}
