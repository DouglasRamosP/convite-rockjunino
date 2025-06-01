import { Card, CardContent } from "@/components/ui/card";

export default function SecaoLocal() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-2xl font-semibold">📍 Local</h2>
        <p>Rua dos Festejos, 123 - Bairro Alegria, Cidade/UF</p>
        <a href="https://www.google.com/maps" target="_blank" className="text-blue-500 underline">
          Ver no mapa
        </a>
      </CardContent>
    </Card>
  );
}
