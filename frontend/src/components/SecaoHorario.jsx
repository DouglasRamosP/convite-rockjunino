import { Card, CardContent } from "@/components/ui/card";

export default function SecaoHorario() {
  return (
    <Card className="bg-[#2c261f] border-none text-[#f5edda] font-serif rounded-none">
      <CardContent className="space-y-2 py-4">
        <div className="flex justify-between">
          <strong>📅 Data</strong>
          <span>Junho 24 • 21:00</span>
        </div>
      </CardContent>
    </Card>
  );
}
