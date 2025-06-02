import { Card, CardContent } from "@/components/ui/card";

export default function SecaoLocal() {
  return (
    <Card className="bg-[#2c261f] border-none text-[#f5edda] font-serif rounded-none">
      <CardContent className="space-y-2 py-4">
        <div className="flex justify-between">
          <strong>📍 Local</strong>
          <a
            href="https://www.google.com/maps/place/R.+Guaruj%C3%A1,+30+-+Jardim+Atlantico+Sul+%2F+Jardim+Simoes,+Varginha+-+MG,+37064-020/@-21.5848404,-45.4313405,620m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94ca92b55dc9b57b:0x674431466553c059!8m2!3d-21.5848404!4d-45.4313405!16s%2Fg%2F11tdlc7zkf?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 underline hover:text-orange-300 transition"
          >
            Rua: Guruja, 30 Rezende
          </a>
        </div>
      </CardContent>
    </Card>
  );
}


