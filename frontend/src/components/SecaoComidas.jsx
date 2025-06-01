import { Card, CardContent } from "@/components/ui/card";

export default function SecaoComidas() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-2xl font-semibold">🍻 Bebidas e Comidas</h2>
        <ul className="list-disc pl-6">
          <li>Churrasco, milho, pipoca e caldos</li>
          <li>Cerveja, refrigerante, caipirinha e drinks temáticos</li>
        </ul>
      </CardContent>
    </Card>
  );
}
