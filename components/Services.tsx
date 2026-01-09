
import React from 'react';
import { Construction, FileText, Search, Scale, PencilLine, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Construction size={32} />,
      title: "Obras e Projetos",
      desc: "Ofereço suporte em projetos, desmembramentos e aprovações de obras com acompanhamento técnico completo."
    },
    {
      icon: <FileText size={32} />,
      title: "Gestão Documental",
      desc: "Presto assessoria junto à Prefeitura, Receita Federal (INSS) e Cartórios para sua regularização total."
    },
    {
      icon: <Search size={32} />,
      title: "Negócios Imobiliários",
      desc: "Acompanho você na compra ou venda do seu patrimônio, com análise minuciosa de documentos para um negócio seguro."
    },
    {
      icon: <Scale size={32} />,
      title: "Atos Jurídicos",
      desc: "Cuido de escrituras, inventários, separação e registro de imóveis, garantindo a proteção da sua família."
    },
    {
      icon: <PencilLine size={32} />,
      title: "Contratos Especiais",
      desc: "Elaboro contratos CDHU, COHAB, CEF e outros instrumentos particulares com total rigor técnico."
    },
    {
      icon: <Users size={32} />,
      title: "Rede de Apoio",
      desc: "Mantenho parcerias estratégicas com advogados e engenheiros para entregar a você uma solução integral."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-[#757575] font-bold uppercase tracking-widest text-sm">Minhas Soluções</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1B334B]">Como eu posso ajudar você hoje?</h3>
          <p className="text-slate-600">Serviços técnicos especializados com o meu selo de qualidade e compromisso.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-[#1B334B]/20 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#1B334B] mb-6 group-hover:bg-[#1B334B] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              <button className="mt-6 text-[#1B334B] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Quero saber mais <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
