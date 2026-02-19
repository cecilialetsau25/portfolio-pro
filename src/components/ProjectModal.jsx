// @ts-ignore
import React from 'react';
import { X, ExternalLink, Github, Clock, Zap, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[var(--color-surface)] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X size={24} className="text-white" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Title & Category */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-[var(--color-accent)] font-light uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-white/30">•</span>
              <div className="flex items-center gap-1 text-white/60">
                <Clock size={14} />
                <span className="text-xs font-light">{project.duration}</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">{project.title}</h2>
            <p className="text-xl text-white/70 font-light">{project.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <
// @ts-ignore
              Button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-black font-medium rounded-full px-6 py-3">
                <ExternalLink size={18} className="mr-2" />
                View Live Project
              </Button>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <
// @ts-ignore
              Button variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-6 py-3">
                <Github size={18} className="mr-2" />
                View Code
              </Button>
            </a>
          </div>

          {/* About */}
          <div className="mb-8">
            <h3 className="text-2xl font-light mb-4 flex items-center gap-2">
              <Zap size={20} className="text-[var(--color-accent)]" />
              About the Project
            </h3>
            <p className="text-white/70 font-light leading-relaxed">
              {project.about}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-2xl font-light mb-4">Tech Stack & Configuration</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/5 text-white/80 border border-white/10 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.stack && (
              <p className="text-white/60 font-light mt-4 leading-relaxed">
                {project.stack}
              </p>
            )}
          </div>

          {/* Challenges */}
          <div className="mb-8">
            <h3 className="text-2xl font-light mb-4">Challenges Overcome</h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                  <span className="text-white/70 font-light leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Learnings */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-[var(--color-accent)]/20">
            <h3 className="text-2xl font-light mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-[var(--color-accent)]" />
              What I Gained
            </h3>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                  <span className="text-white/80 font-light leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}