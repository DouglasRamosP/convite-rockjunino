export default function RecordacoesPage() {
  return (
    <div className="min-h-screen bg-[#1a1612] text-[#f5edda] font-serif p-6">
      <h1 className="text-3xl font-bold text-center mb-8">📸 Nossos Momentos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/fotos/1.jpg" alt="Foto 1" className="rounded shadow-md" />
        <img src="/fotos/2.jpg" alt="Foto 2" className="rounded shadow-md" />
        {/* Continue com mais imagens */}
      </div>
    </div>
  );
}
