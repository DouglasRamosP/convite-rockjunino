import { Card, CardContent } from "@/components/ui/card";

export default function SecaoAtracoes() {
  return (
    <Card className="bg-[#2c261f] border-none text-[#f5edda] font-serif rounded-none">
      <CardContent className="space-y-2 py-4">
        <strong>🎸 Atrações</strong>
        <ul className="list-disc list-inside ">
          <li>Banda Pé de Serra</li>
          <li>DJ</li>
        </ul>
      </CardContent>
    </Card>
  );
}
