import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenCampaignModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCampaignModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'About Us', href: '#approach' },
    { label: 'Contact Us', onClick: onOpenCampaignModal },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-12 px-5 sm:px-8 overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto">
        {/* Bold Stats Row from Theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-14 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">100%</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8E9299] mt-1 font-medium">Performance Based</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">$0</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8E9299] mt-1 font-medium">Upfront Retainer</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">4-Step</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8E9299] mt-1 font-medium">Clear Framework</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">24/7</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8E9299] mt-1 font-medium">Pipeline Tracking</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-12 border-b border-white/10">
          {/* Brand & Slogan */}
          <div className="flex flex-col space-y-2">
            <Logo size="md" />
            <p className="text-sm text-[#8E9299] font-normal">
              We turn ad spend into qualified leads.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-[#8E9299]">
            {navLinks.map((link) => {
              if (link.onClick) {
                return (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#8E9299] hover:text-white hover:border-[#AE94FF]/40 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9299]">
          <div>
            © {new Date().getFullYear()} THE ONLY ADS. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="text-[#AE94FF]">Performance Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
