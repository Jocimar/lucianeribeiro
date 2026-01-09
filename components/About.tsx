
import React from 'react';
import { Home, ShieldCheck, FileSearch, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Home size={20} />, text: "Meu Atendimento Domiciliar" },
    { icon: <ShieldCheck size={20} />, text: "Minha Consultoria Técnica" },
    { icon: <FileSearch size={20} />, text: "Gestão Documental" },
    { icon: <Handshake size={20} />, text: "Negócios Seguros" },
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/id/64/800/1000" 
                alt="Luciane Ribeiro Especialista" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#1B334B] text-white p-8 rounded-3xl shadow-xl hidden lg:block max-w-[280px]">
              <p className="text-2xl font-bold mb-1">Experiência e Segurança</p>
              <p className="text-sm font-medium opacity-80 leading-tight">Liderando soluções em regularização imobiliária em Garça e região.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#757575] font-bold uppercase tracking-widest text-sm">Sobre Mim</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1B334B]">Tranquilidade para Sua Família</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Olá, sou <strong>Luciane Ribeiro</strong>. Atuo com foco em desburocratizar o complexo mercado de regularização imobiliária em Garça e região.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Com expertise em contratos CDHU, COHAB e CEF, lidero uma rede técnica que garante que seu imóvel saia da irregularidade para a segurança jurídica total. Meu compromisso é transformar processos complexos em soluções simples e seguras para o seu patrimônio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#1B334B]/20 transition-all">
                  <div className="text-[#1B334B] bg-slate-50 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://wa.me/5514981392320" 
                className="inline-flex items-center justify-center bg-[#1B334B] text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Falar com Luciane Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
