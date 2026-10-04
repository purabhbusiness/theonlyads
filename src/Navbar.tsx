import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, Menu } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenCampaignModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCampaignModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Approach', href: '#approach' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = useCallback((href: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 shadow-lg'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="nav-logo-link"
            className="flex items-center group cursor-pointer transition-opacity hover:opacity-90"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              id="desktop-nav-cta-btn"
              onClick={onOpenCampaignModal}
              className="btn-pill bg-[#AE94FF] text-black font-semibold text-xs tracking-tight transition-all duration-300 hover:bg-[#bfaaff] hover:shadow-[0_0_24px_rgba(174,148,255,0.4)] active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Campaign &rarr;</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            id="mobile-hamburger-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900/90 border border-white/15 text-white active:scale-95 transition-all focus:outline-none cursor-pointer"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#AE94FF]/15 blur-[100px] pointer-events-none" />

            {/* Mobile Menu Top Header with Logo and PROMINENT Close Button */}
            <div className="relative z-10 flex items-center justify-between w-full pb-6 border-b border-white/10">
              <Logo size="md" />

              <button
                id="mobile-menu-close-btn"
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/20 text-white hover:bg-zinc-800 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <X className="w-4 h-4 text-[#AE94FF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Close</span>
              </button>
            </div>

            {/* Nav links section */}
            <div className="relative z-10 flex flex-col space-y-6 my-auto py-8">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#AE94FF] font-semibold">
                Navigation
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05, duration: 0.25 }}
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#AE94FF] transition-colors py-2 flex items-center justify-between border-b border-white/5 active:text-[#AE94FF]"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom CTA and reassurance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.25 }}
              className="relative z-10 flex flex-col space-y-4 pt-6 border-t border-white/10"
            >
              <button
                id="mobile-menu-cta-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCampaignModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#AE94FF] text-black font-semibold text-sm shadow-[0_0_25px_rgba(174,148,255,0.4)] active:scale-[0.98] cursor-pointer"
              >
                <span>Start a Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-[#8E9299] tracking-wide">
                Zero Upfront Retainer • 100% Performance Aligned
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
