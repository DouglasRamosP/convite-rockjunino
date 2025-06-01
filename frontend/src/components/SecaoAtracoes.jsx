import { Card, CardContent } from "@/components/ui/card";

export default function SecaoAtracoes() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-2xl font-semibold">🎤 Atrações</h2>
        <ul className="list-disc pl-6">
          <li>Banda de Rock Junino</li>
          <li>Quadrilha com Guitarra</li>
          <li>Concurso de melhor look "caipira rockstar"</li>
        </ul>
      </CardContent>
    </Card>
  );
}
