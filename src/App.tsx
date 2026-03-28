/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Printer, 
  Globe, 
  Code, 
  FileText, 
  Layout, 
  MessageCircle, 
  ChevronRight, 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  Zap,
  Lock,
  Award
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'it' | 'print';
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

// --- Data ---
const SERVICES: Service[] = [
  // Silo A: IT
  {
    id: 'web-hosting',
    title: 'Web Hosting',
    description: 'High-performance, secure cloud hosting with 99.9% uptime guarantee for your business.',
    icon: <Globe className="w-6 h-6 text-neon-cyan" />,
    category: 'it'
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom web and mobile applications tailored to solve your unique business challenges.',
    icon: <Code className="w-6 h-6 text-neon-cyan" />,
    category: 'it'
  },
  {
    id: 'kra-reg',
    title: 'KRA Registration',
    description: 'Hassle-free KRA PIN registration, tax compliance, and returns filing assistance.',
    icon: <FileText className="w-6 h-6 text-neon-cyan" />,
    category: 'it'
  },
  // Silo B: Printing
  {
    id: 'banners',
    title: 'Banners & Signage',
    description: 'Large format printing that commands attention. Durable materials for indoor and outdoor use.',
    icon: <Printer className="w-6 h-6 text-neon-green" />,
    category: 'print'
  },
  {
    id: 'flyers',
    title: 'Flyers & Brochures',
    description: 'Premium quality marketing materials to spread your message effectively.',
    icon: <Layout className="w-6 h-6 text-neon-green" />,
    category: 'print'
  },
  {
    id: 'branding',
    title: 'Corporate Branding',
    description: 'Complete brand identity design including logos, business cards, and stationery.',
    icon: <Zap className="w-6 h-6 text-neon-green" />,
    category: 'print'
  },
  {
    id: 'eulogies',
    title: 'Eulogies & Programs',
    description: 'Respectful, high-quality printing for funeral programs and memorial materials.',
    icon: <Award className="w-6 h-6 text-neon-green" />,
    category: 'print'
  }
];

const PORTFOLIO: PortfolioItem[] = [
  { id: 1, title: 'Tech Hub Website', category: 'Web Dev', image: 'https://picsum.photos/seed/tech/600/400' },
  { id: 2, title: 'Modern Logo Design', category: 'Branding', image: 'https://picsum.photos/seed/logo/600/400' },
  { id: 3, title: 'Event Banner', category: 'Printing', image: 'https://picsum.photos/seed/banner/600/400' },
  { id: 4, title: 'E-commerce App', category: 'Software', image: 'https://picsum.photos/seed/app/600/400' },
  { id: 5, title: 'Corporate Flyer', category: 'Design', image: 'https://picsum.photos/seed/flyer/600/400' },
  { id: 6, title: 'Restaurant Menu', category: 'Printing', image: 'https://picsum.photos/seed/menu/600/400' },
];

const SERVICE_AREAS = ['Kiambu', 'Thika', 'Nairobi', 'Ruiru', 'Juja'];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-cyan rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.5)]">
            <Cpu className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            CYBER<span className="text-neon-cyan">PRINT</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-neon-cyan transition-colors">Services</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-neon-cyan transition-colors">Portfolio</a>
          <a href="#about" className="text-sm font-medium hover:text-neon-cyan transition-colors">About</a>
          <a href="#contact" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Portfolio</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neon-cyan">Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-neon-cyan mb-6">
            <Zap className="w-3 h-3" /> Digital Command Center
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Your Global Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">
              Command Center
            </span> <br />
            for IT & Creative Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            From high-security software development to premium large-format printing, 
            we bridge the gap between digital excellence and physical branding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-neon-cyan text-black font-bold rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center justify-center gap-2"
            >
              Get IT Support <ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-bold rounded-xl hover:bg-neon-green/10 transition-all flex items-center justify-center gap-2"
            >
              Start a Print Order <Printer className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating UI Elements for Aesthetic */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute top-1/3 right-10 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-neon-green" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">System Status</span>
        </div>
        <div className="text-xl font-mono">FAILSAFE ACTIVE</div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:block absolute bottom-1/4 left-10 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-neon-cyan" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Security Protocol</span>
        </div>
        <div className="text-xl font-mono">ENCRYPTED_v2.0</div>
      </motion.div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const isIT = service.category === 'it';
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={cn(
        "p-8 rounded-3xl border transition-all duration-300 group",
        isIT 
          ? "bg-neon-cyan/5 border-white/10 hover:border-neon-cyan/50" 
          : "bg-neon-green/5 border-white/10 hover:border-neon-green/50"
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
        isIT ? "bg-neon-cyan/20" : "bg-neon-green/20"
      )}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <button className={cn(
        "flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors",
        isIT ? "text-neon-cyan hover:text-white" : "text-neon-green hover:text-white"
      )}>
        Learn More <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Silo A: <span className="text-neon-cyan">Computer & IT</span></h2>
          <p className="text-white/50 max-w-xl">Cutting-edge digital infrastructure and software solutions for the modern era.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SERVICES.filter(s => s.category === 'it').map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Silo B: <span className="text-neon-green">Printing & Design</span></h2>
          <p className="text-white/50 max-w-xl">High-impact physical branding and professional printing with failsafe quality.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.filter(s => s.category === 'print').map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSignals = () => {
  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-neon-cyan/20 rounded-2xl flex items-center justify-center">
            <Lock className="text-neon-cyan w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">File Safe Security</h3>
            <p className="text-white/60">
              Your data is our priority. We implement military-grade encryption and 
              secure protocols for all software development and file handling processes.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center">
            <CheckCircle2 className="text-neon-green w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Failsafe Printing Guarantee</h3>
            <p className="text-white/60">
              We guarantee color accuracy and material durability. If your print 
              doesn't meet our strict quality standards, we'll redo it at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A showcase of our recent digital and physical masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-3xl aspect-[4/3] bg-white/5 border border-white/10"
            >
              <img 
                src={item.image} 
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan mb-2 block">{item.category}</span>
                <h4 className="text-xl font-bold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', service: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/print-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, details: 'General Inquiry' }),
      });
      
      const data = await response.json();
      if (data.success) {
        setSuccessMessage(data.message);
        setFormData({ name: '', service: '', phone: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Transmission failed. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Launch?</h2>
          <p className="text-white/50">Fill out the form below and our command center will reach out.</p>
        </div>

        {successMessage ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-neon-cyan/10 border border-neon-cyan/30 rounded-3xl text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Transmission Successful</h3>
            <p className="text-white/70 mb-6">{successMessage}</p>
            <button 
              onClick={() => setSuccessMessage('')}
              className="px-8 py-3 bg-neon-cyan text-black font-bold rounded-xl"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+254 7XX XXX XXX"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Service Required</label>
              <select 
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan transition-colors appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="" disabled className="bg-black">Select a service</option>
                <option value="it" className="bg-black">IT Support / Software</option>
                <option value="print" className="bg-black">Printing / Design</option>
                <option value="other" className="bg-black">Other Inquiry</option>
              </select>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-5 font-bold rounded-2xl transition-all",
                isSubmitting ? "bg-white/20 text-white/40 cursor-not-allowed" : "bg-white text-black hover:bg-neon-cyan"
              )}
            >
              {isSubmitting ? "Transmitting..." : "Send Transmission"}
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

const PrintOrderModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Banners', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/print-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
          setFormData({ name: '', phone: '', service: 'Banners', details: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting print order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white">
              <X className="w-6 h-6" />
            </button>

            {success ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-20 h-20 text-neon-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2 text-neon-green">Order Received!</h3>
                <p className="text-white/60">Transmission confirmed. Closing in 3 seconds...</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Start a Print Order</h3>
                  <p className="text-white/50 text-sm">Configure your printing requirements below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Print Type</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="Banners" className="bg-black">Banners</option>
                      <option value="Flyers" className="bg-black">Flyers</option>
                      <option value="Branding" className="bg-black">Branding</option>
                      <option value="Eulogies" className="bg-black">Eulogies</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Order Details</label>
                    <textarea 
                      placeholder="Size, quantity, specific requirements..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green min-h-[100px]"
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-4 bg-neon-green text-black font-bold rounded-xl mt-4"
                  >
                    {isSubmitting ? "Transmitting..." : "Initialize Order"}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ServiceAreas = () => {
  return (
    <section className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <MapPin className="text-neon-cyan w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest">Service Areas:</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {SERVICE_AREAS.map(area => (
            <span key={area} className="text-white/40 hover:text-neon-cyan transition-colors cursor-default">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-neon-cyan rounded flex items-center justify-center">
              <Cpu className="text-black w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter">
              CYBER<span className="text-neon-cyan">PRINT</span>
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            The ultimate command center for your digital and physical branding needs. 
            Based in Kenya, serving the world.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">IT Services</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Web Hosting</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Software Development</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">KRA Registration</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Cyber Security</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Print & Design</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-neon-green transition-colors">Large Format Banners</a></li>
            <li><a href="#" className="hover:text-neon-green transition-colors">Flyers & Brochures</a></li>
            <li><a href="#" className="hover:text-neon-green transition-colors">Eulogy Programs</a></li>
            <li><a href="#" className="hover:text-neon-green transition-colors">Brand Identity</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-neon-cyan" /> +254 116 335 366</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-neon-cyan" /> info@cyberprint.co.ke</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-neon-cyan" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
        <p>&copy; 2026 CYBERPRINT COMMAND CENTER. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/254116335366"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)]"
    >
      <MessageCircle className="text-white w-8 h-8" />
    </motion.a>
  );
};

export default function App() {
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-neon-cyan selection:text-black">
      <Navbar />
      <main>
        {/* Hero Section with Modal Trigger */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Futuristic Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-neon-cyan mb-6">
                <Zap className="w-3 h-3" /> Digital Command Center
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                Your Global Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">
                  Command Center
                </span> <br />
                for IT & Creative Solutions
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
                From high-security software development to premium large-format printing, 
                we bridge the gap between digital excellence and physical branding.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-neon-cyan text-black font-bold rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center justify-center gap-2"
                >
                  Get IT Support <ChevronRight className="w-5 h-5" />
                </motion.a>
                <motion.button 
                  onClick={() => setIsPrintModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-bold rounded-xl hover:bg-neon-green/10 transition-all flex items-center justify-center gap-2"
                >
                  Start a Print Order <Printer className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Floating UI Elements for Aesthetic */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute top-1/3 right-10 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-neon-green" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">System Status</span>
            </div>
            <div className="text-xl font-mono">FAILSAFE ACTIVE</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:block absolute bottom-1/4 left-10 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-neon-cyan" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Security Protocol</span>
            </div>
            <div className="text-xl font-mono">ENCRYPTED_v2.0</div>
          </motion.div>
        </section>

        <TrustSignals />
        <Services />
        <Portfolio />
        <ContactForm />
        <ServiceAreas />
      </main>
      <Footer />
      <WhatsAppButton />
      <PrintOrderModal isOpen={isPrintModalOpen} onClose={() => setIsPrintModalOpen(false)} />
    </div>
  );
}
