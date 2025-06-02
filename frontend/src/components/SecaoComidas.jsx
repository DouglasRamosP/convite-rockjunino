import { Card, CardContent } from "@/components/ui/card";

export default function SecaoComidas() {
  return (
    <Card className="bg-[#2c261f] border-none text-[#f5edda] font-serif rounded-none">
      <CardContent className="space-y-2 py-4">
        <strong>🍽️Comidas 🍻Bebidas</strong>
        <ul className="list-disc list-inside">
          <li>Churrasco</li>
          <li>Pé-de-moleque</li>
          <li>Quentão</li>
          <li>Cerveja</li>
        </ul>
      </CardContent>
    </Card>
  );
}
