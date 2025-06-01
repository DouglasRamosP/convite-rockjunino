import { Card, CardContent } from "@/components/ui/card";

export default function SecaoDoacao() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-2xl font-semibold">🎁 Doação Solidária</h2>
        <p>Ao invés de presentes, traga um pacote de ração ou leite em caixa para doação.</p>
      </CardContent>
    </Card>
  );
}
