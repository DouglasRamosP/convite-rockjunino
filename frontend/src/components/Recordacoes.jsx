import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Recordacoes() {
  return (
    <Card className="bg-[#2c261f] border-none text-[#f5edda] font-serif rounded-none">
      <CardContent className="flex flex-col items-center gap-4 py-6 rounded-none">
        <h2 className="text-xl font-bold mb-4">📸 Recordações</h2>

        <Button onClick={() => (window.location.href = "/recordacoes")}>
          Relembre o nosso último evento
        </Button>
        <br />
      </CardContent>
    </Card>
  );
}
