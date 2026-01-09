
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-[#1B334B]' : 'text-white'}`}>LUCIANE RIBEIRO</span>
          <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>Regularização Imobiliária</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-[#1B334B] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5514981392320" 
            className="bg-[#1B334B] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <Phone size={16} /> 14 98139-2320
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-800 text-lg font-medium border-b border-slate-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5514981392320" 
              className="bg-[#1B334B] text-white px-6 py-3 rounded-xl text-center font-bold"
            >
              Fale via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
