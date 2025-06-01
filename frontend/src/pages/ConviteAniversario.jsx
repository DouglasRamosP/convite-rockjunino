import Cabecalho from "@/components/Cabecalho";
import SecaoLocal from "@/components/SecaoLocal";
import SecaoHorario from "@/components/SecaoHorario";
import SecaoAtracoes from "@/components/SecaoAtracoes";
import SecaoComidas from "@/components/SecaoComidas";
import SecaoDoacao from "@/components/SecaoDoacao";
import ConfirmacaoPresenca from "@/components/ConfirmacaoPresenca";

export default function ConviteAniversario() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <Cabecalho />
      <SecaoLocal />
      <SecaoHorario />
      <SecaoAtracoes />
      <SecaoComidas />
      <SecaoDoacao />
      <ConfirmacaoPresenca />
    </div>
  );
}
