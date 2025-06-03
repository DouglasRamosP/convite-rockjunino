import Cabecalho from "@/components/Cabecalho";
import SecaoHorario from "@/components/SecaoHorario";
import SecaoLocal from "@/components/SecaoLocal";
import SecaoAtracoes from "@/components/SecaoAtracoes";
import SecaoComidas from "@/components/SecaoComidas";
import SecaoDoacao from "@/components/SecaoDoacao";
import ConfirmacaoPresenca from "@/components/ConfirmacaoPresenca";
import Recordacoes from "../components/Recordacoes";
import BotaoAdmin from "@/components/BotaoAdmin";

export default function ConviteAniversario() {
  return (
    
    <div className="min-h-screen bg-[#1a1612] text-[#f5edda] font-serif px-0 sm:px-4 md:px-6 py-4 flex flex-col items-center">

      <Cabecalho />
      <h1 className="text-5xl font-bold tracking-wide uppercase text-[#f5edda] mb-4">
        Birthday Party
      </h1>
      <hr className="border-[#a08963] border-t w-full max-w-md mb-6" />
      <div className="w-full max-w-lg space-y-0.5">
        <BotaoAdmin />
        <SecaoHorario />
        <SecaoLocal />
        <SecaoAtracoes />
        <SecaoComidas />
        <SecaoDoacao />
        <Recordacoes />
        <ConfirmacaoPresenca />
      </div>
    </div>
  );
}
