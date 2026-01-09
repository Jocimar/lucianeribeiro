
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, service } = formData;
    
    if (!name || !phone || !service) {
      alert("Por favor, preencha todos os campos para que eu possa te ajudar.");
      return;
    }

    // Formatação da mensagem para o WhatsApp
    const message = `Olá Luciane! Vi seu site e gostaria de uma análise.
*Nome:* ${name}
*WhatsApp:* ${phone}
*Interesse:* ${service}

Você pode me ajudar?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5514981392320?text=${encodedMessage}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://marilianoticia.com.br/wp-content/uploads/2025/09/garca-cidade.jpg" 
          alt="Vista aérea de Garça-SP" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1B334B]/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">Sou sua Especialista em Garça - SP</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Eu trago <span className="text-white italic underline decoration-slate-400">Segurança</span> para o seu patrimônio.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-xl">
            Sou especialista em Regularização Imobiliária, Negócios & Soluções. Ofereço a você consultoria técnica completa para regularização, habite-se e projetos em Garça e região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#1B334B] hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all group shadow-xl"
            >
              Quero que você regularize meu imóvel
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#servicos" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all">
              Meus Serviços
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            {['Minha Experiência Comprovada', 'Sua Segurança Jurídica', 'Meu Atendimento em Garça'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle size={18} className="text-white/60" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="block w-full max-w-md mx-auto lg:ml-auto lg:mr-0" id="hero-form">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl space-y-6 border border-white/20">
            <h3 className="text-3xl font-bold text-[#1B334B]">Peça minha Análise</h3>
            <p className="text-slate-500 text-sm">Preencha os dados e eu entrarei em contato para avaliar pessoalmente a situação do seu imóvel.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo" 
                  className="w-full px-4 py-4 rounded-xl bg-[#333333] text-white placeholder-slate-400 border-none focus:ring-2 focus:ring-[#1B334B] outline-none transition-all shadow-inner" 
                  required
                />
              </div>
              <div className="space-y-1">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Seu WhatsApp" 
                  className="w-full px-4 py-4 rounded-xl bg-[#333333] text-white placeholder-slate-400 border-none focus:ring-2 focus:ring-[#1B334B] outline-none transition-all shadow-inner" 
                  required
                />
              </div>
              <div className="space-y-1 relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl bg-[#333333] text-white border-none focus:ring-2 focus:ring-[#1B334B] outline-none appearance-none cursor-pointer shadow-inner"
                  required
                >
                  <option value="" disabled className="text-slate-400">O que você precisa?</option>
                  <option value="Obras e Projetos">Obras e Projetos</option>
                  <option value="Gestão Documental">Gestão Documental</option>
                  <option value="Negócios Imobiliários">Negócios Imobiliários</option>
                  <option value="Atos Jurídicos">Atos Jurídicos</option>
                  <option value="Contratos Especiais">Contratos Especiais</option>
                  <option value="Outros">Outros</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#1B334B] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#152a3d] transition-all shadow-lg active:scale-95 mt-2"
              >
                Falar comigo agora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
