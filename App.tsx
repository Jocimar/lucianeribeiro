
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Statistics Strip */}
        <section className="bg-[#1B334B] py-12 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-white text-4xl font-bold mb-2">500+</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Imóveis que já Atendi</div>
              </div>
              <div>
                <div className="text-white text-4xl font-bold mb-2">15</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-white text-4xl font-bold mb-2">100%</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Meu Compromisso Técnico</div>
              </div>
              <div>
                <div className="text-white text-4xl font-bold mb-2">Garça</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Meu Atendimento Local</div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* CTA Section */}
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold text-[#1B334B] max-w-3xl mx-auto">
              Eu cuido do seu patrimônio com a segurança que sua família merece.
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Não corra riscos com multas. Deixe que eu valorize seu imóvel em Garça através da regularização correta.
            </p>
            <a 
              href="https://wa.me/5514981392320"
              className="inline-block bg-[#1B334B] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl"
            >
              Fale comigo agora e tire suas dúvidas
            </a>
          </div>
        </section>

        <About />
        <FAQ />
      </main>
      <Footer />
      
      {/* Assistants */}
      <ChatAssistant />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5514981392320" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 border-2 border-white/20"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.268.408 2.445 1.108 3.399l-.718 2.623 2.685-.705c.92.57 2.003.903 3.16.903 3.182 0 5.767-2.586 5.767-5.77 0-3.187-2.585-5.77-5.767-5.77zm4.211 8.212c-.18.505-.902.934-1.243.982-.34.049-.781.087-2.45-.58-2.071-.828-3.411-2.946-3.514-3.083-.103-.137-.828-1.102-.828-2.103 0-1 .521-1.493.707-1.693.185-.2.404-.251.539-.251h.384c.123 0 .288.025.414.331l.56 1.356c.05.12.076.246.024.348-.05.101-.076.166-.153.255-.077.089-.161.201-.231.272-.077.078-.157.163-.068.317.089.153.394.652.846 1.056.582.52 1.072.682 1.226.756.154.073.243.061.332-.041.089-.102.384-.448.487-.601.103-.153.205-.127.346-.077l1.37.645c.14.066.234.113.272.181.038.068.038.397-.142.902z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.115.656 4.077 1.777 5.708L2 22l4.434-1.164C8.038 21.614 9.947 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.877 0-3.63-.504-5.144-1.38l-.368-.212-2.56.673.685-2.503-.234-.372C3.5 15.11 3 13.615 3 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
