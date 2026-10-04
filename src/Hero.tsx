import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenCampaignModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCampaignModal }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center pt-32 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden w-full max-w-full purple-glow-top">
      {/* Background ambient radial glows strictly contained */}
      <div className="glow -top-24 left-1/2 -translate-x-1/2 opacity-75" />
      <div className="glow -bottom-48 right-0 opacity-50" />

      {/* Large background typography watermark safely contained */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[70px] sm:text-[120px] md:text-[160px] lg:text-[190px] font-black tracking-tighter text-white/[0.025] select-none pointer-events-none whitespace-nowrap overflow-hidden z-0">
        PERFORMANCE
      </div>

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10 w-full">
        {/* Eyebrow badge matching the Bold Typography theme */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-[#AE94FF] font-semibold tracking-[0.25em] uppercase mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#AE94FF] animate-pulse shadow-[0_0_8px_#AE94FF]" />
          <span>Lead Generation Advertising</span>
        </motion.div>

        {/* Main Headline with high-impact Bold Typography scale */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-7xl md:text-8xl lg:text-[5.8rem] font-bold tracking-[-0.04em] text-white leading-[0.92] sm:leading-[0.9] uppercase max-w-4xl"
        >
          <span>DON&apos;T PAY US</span>
          <br />
          <span className="serif-italic font-normal text-[#AE94FF] lowercase px-1 sm:px-2">
            until we
          </span>
          <br />
          <span>PERFORM.</span>
        </motion.h1>

        {/* Subtext with muted palette */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-[#8E9299] font-normal max-w-xl tracking-tight leading-relaxed px-2"
        >
          We run your ads.{' '}
          <span className="text-white font-medium">You pay when they perform.</span>{' '}
          Lead generation advertising built around measurable results.
        </motion.p>

        {/* CTA Buttons with pill shape from Bold Typography theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-primary-cta-btn"
            onClick={onOpenCampaignModal}
            className="group btn-pill w-full sm:w-auto bg-[#AE94FF] text-black font-semibold text-sm tracking-tight transition-all duration-300 hover:bg-[#bfaaff] hover:shadow-[0_0_35px_rgba(174,148,255,0.45)] active:scale-[0.98] cursor-pointer"
          >
            <span>Start a Campaign</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="hero-secondary-cta-btn"
            onClick={() => handleScrollToSection('how-it-works')}
            className="btn-pill w-full sm:w-auto bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/20 hover:border-white/40 backdrop-blur-sm text-sm tracking-tight transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            <span>See How It Works</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
