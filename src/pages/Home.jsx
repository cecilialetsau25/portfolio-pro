import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Sparkles } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <ThreeScene />
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
          <div className="max-w-4xl">
            {/* Small badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Sparkles size={16} className="text-[var(--color-accent)]" />
              <span className="text-sm text-white/70 font-light">Available for work</span>
            </div>

            {/* Main heading */}
            <h1 
              className={`text-6xl text-white md:text-8xl lg:text-9xl font-light tracking-tight mb-8 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-9 translate-y-8'
              }`}
            >
              Creative
              <br />
              <span className="text-[var(--color-accent)]">Developer</span>
            </h1>

            {/* Description */}
            <p 
              className={`text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Crafting exceptional digital experiences through elegant code and innovative design. 
              Specializing in web applications that merge aesthetics with functionality.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                to={createPageUrl('Projects')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-black font-medium rounded-full hover:bg-[var(--color-accent)]/90 transition-all duration-300 hover:gap-5"
              >
                View Projects
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-light rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/10 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <div className="text-4xl md:text-5xl font-light text-[var(--color-accent)] mb-2">10+</div>
                <div className="text-sm text-white/50 font-light uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light text-[var(--color-accent)] mb-2">1+</div>
                <div className="text-sm text-white/50 font-light uppercase tracking-wider">Years Exp</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light text-[var(--color-accent)] mb-2">3+</div>
                <div className="text-sm text-white/50 font-light uppercase tracking-wider">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <div className="text-xs text-white/40 uppercase tracking-widest">Scroll</div>
        </div>
      </div>
    </div>
  );
}