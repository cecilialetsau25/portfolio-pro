import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // NOTE: Replace 'YOUR_FORM_ID' with the ID you get from Formspree.io
      const response = await fetch('https://formspree.io/f/mlgwlkwk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError("Message couldn't be sent. Please check your connection or Formspree ID.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
            Let's <span className="text-[var(--color-accent)]">Connect</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl">
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 border border-white/10 rounded-3xl bg-white/5">
                <div className="w-20 h-20 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-3xl font-light mb-4 text-white">Message Sent!</h3>
                <p className="text-white/60 mb-8">I'll get back to you at {formData.email || 'your email'} soon.</p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-[var(--color-accent)] text-black">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 ml-1">Name</label>
                  <Input name="name" value={formData.name} onChange={handleChange} required className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-[var(--color-accent)]" placeholder="Your name" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 ml-1">Email</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-[var(--color-accent)]" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 ml-1">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} required className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-[var(--color-accent)]" placeholder="Project Inquiry" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 ml-1">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--color-accent)] resize-none" placeholder="Tell me about your project..." />
                </div>

                {error && <p className="text-red-500 text-sm font-light">{error}</p>}

                <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-black font-bold rounded-xl transition-all">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          {/* Details Side */}
          <div className="space-y-12">
            <div className="space-y-8">
              <ContactInfoItem icon={<Mail size={24}/>} label="Email" value="cmletsau@gmail.com" link="mailto:cmletsau@gmail.com" />
              <ContactInfoItem icon={<Phone size={24}/>} label="Phone" value="+27 (72) 484-1337" link="tel:+27724841337" />
              <ContactInfoItem icon={<MapPin size={24}/>} label="Location" value="Johannesburg, South Africa" link="#" />
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-white/5">
              <h3 className="text-2xl font-light mb-4 text-white">Availability</h3>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                I'm currently accepting new projects and freelance opportunities.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-500/80 font-medium uppercase tracking-tighter">Ready for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, label, value, link }) {
  return (
    <div className="flex gap-6 items-center group">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
        <a href={link} className="text-xl text-white hover:text-[var(--color-accent)] transition-colors">{value}</a>
      </div>
    </div>
  );
}