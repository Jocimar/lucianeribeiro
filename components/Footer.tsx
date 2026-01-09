
import React from 'react';
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter">LUCIANE RIBEIRO</span>
              <span className="text-[10px] uppercase tracking-widest text-[#757575]">Regularização Imobiliária</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialista em tornar seu imóvel legal e valorizado em Garça - SP. Experiência e segurança para sua família.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1B334B] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1B334B] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1B334B] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Serviços</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Obras e Projetos</li>
              <li>Gestão Documental</li>
              <li>Negócios Imobiliários</li>
              <li>Atos Jurídicos</li>
              <li>Contratos Especiais</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contato</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1B334B] shrink-0" />
                <span>Atendimento em Garça - SP e Região</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#1B334B] shrink-0" />
                <span>(14) 98139-2320</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1B334B] shrink-0" />
                <span>luenandes@hotmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center">
          <p>© 2024 Luciane Ribeiro - Regularização Imobiliária, Negócios & Soluções.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
