
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Por que devo regularizar meu imóvel com você?",
      a: "Um imóvel irregular não pode ser vendido através de financiamento, sofre desvalorização e está sujeito a multas. Eu garanto a você a segurança jurídica necessária para proteger seu patrimônio."
    },
    {
      q: "Você me ajuda com o Habite-se?",
      a: "Sim! Eu cuido de todo o processo técnico para obter esse certificado, garantindo que sua obra esteja em conformidade e possa ser registrada corretamente."
    },
    {
      q: "Você atende pessoalmente em Garça-SP?",
      a: "Com certeza! Sou especialista no mercado local e conheço profundamente as leis de Garça, o que me permite agilizar seus processos junto à prefeitura."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#757575] font-bold uppercase tracking-widest text-sm">Tire suas dúvidas</h2>
          <h3 className="text-4xl font-bold text-[#1B334B]">Perguntas que recebo com frequência</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-[#1B334B]" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-600 bg-slate-50/50 leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#1B334B] rounded-3xl text-center text-white shadow-2xl">
          <h4 className="text-xl font-bold mb-4">Ainda tem alguma dúvida?</h4>
          <p className="text-slate-300 mb-6">Estou pronta para analisar seu caso pessoalmente e oferecer a melhor solução técnica.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/5514981392320" className="bg-white text-[#1B334B] px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all">Fale diretamente comigo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
