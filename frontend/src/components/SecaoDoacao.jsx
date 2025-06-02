import { Card, CardContent } from "@/components/ui/card";

export default function SecaoDoacao() {
  return (
    <Card className="bg-[#2c261f] border-none text-[#f5edda] font-serif rounded-none ">
      <CardContent className="space-y-2 py-4">
        <strong>🎁 Doação Solidária</strong>
        <p className="text-sm mt-1 text-justify text-justify-last">
          Em vez de presentes tradicionais, o aniversariante convida você a
          participar de um gesto especial: Traga, se puder, um pacote de ração
          ou uma caixa de leite. Todas as doações serão destinadas a quem
          realmente precisa — sejam nossos amigos de quatro patas ou famílias em
          situação de vulnerabilidade. Sua presença já é um presente. Sua
          doação, um ato de amor. ❤️.
        </p>
      </CardContent>
    </Card>
  );
}
