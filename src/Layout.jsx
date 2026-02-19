import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
// Added Linkedin icon to imports
import { Menu, X, Code2, Linkedin } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: createPageUrl('Home') },
    { name: 'Projects', path: createPageUrl('Projects') },
    { name: 'Contact', path: createPageUrl('Contact') },
  ];

  const isActive = (path) => location.pathname === path;

  // Set your LinkedIn URL here
  const linkedInUrl = "https://linkedin.com/in/your-profile";

  return (
    <div className={`min-h-screen transition-colors duration-500 `}>
      <style>{`
        :root {
          --color-accent: #D4AF37;
          --color-bg: ${darkMode ? '#000000' : '#ffffff'};
          --color-surface: ${darkMode ? '#0A0A0A' : '#f8f8f8'};
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        body {
          background: var(--color-bg);
          overflow-x: hidden;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes jumpJump {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-8px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-4px); }
        }

        .jump-jump {
          display: inline-block;
          animation: jumpJump 1s ease-in-out infinite;
        }
        
        .jump-jump:hover {
          animation: jumpJump 0.6s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${
        darkMode ? 'bg-black/30 border-white/5' : 'bg-white/30 border-black/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to={createPageUrl('Home')} 
              className="text-2xl font-light tracking-tight hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center gap-2"
            >
              <Code2 className="jump-jump text-[var(--color-accent)]" size={28} />
              <span className="jump-jump text-[var(--color-accent)]">Cecilia.dev</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-light tracking-wide uppercase relative group transition-colors duration-300 ${
                    isActive(link.path) ? 'text-[var(--color-accent)]' : darkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 ${
                      isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors md:hidden ${darkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b transition-colors duration-500 ${
            darkMode ? 'bg-black/95 border-white/5' : 'bg-white/95 border-black/5'
          }`}>
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-light tracking-wide uppercase transition-colors ${
                    isActive(link.path) ? 'text-[var(--color-accent)]' : darkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className={`border-t py-12 transition-colors duration-500 ${
        darkMode ? 'border-white/5 bg-[var(--color-surface)]' : 'border-black/5 bg-[var(--color-surface)]'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-row justify-between items-center">
            {/* Left Side: Copyright */}
            <p className={`text-sm font-light ${darkMode ? 'text-white/40' : 'text-black/40'}`}>
              © 2025 Cecilia.dev. All rights reserved.
            </p>
            
            {/* Right Side Corner: LinkedIn Icon */}
            <a 
              href={linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`transition-all duration-300 hover:scale-110 ${
                darkMode ? 'text-white/40 hover:text-[var(--color-accent)]' : 'text-black/40 hover:text-[var(--color-accent)]'
              }`}
            >
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}