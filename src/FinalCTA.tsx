import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenCampaignModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenCampaignModal }) => {
  return (
    <section className="relative py-28 sm:py-32 px-5 sm:px-8 border-t border-white/10 bg-black overflow-hidden w-full max-w-full">
      {/* Background glow and large typography watermark */}
      <div className="glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[70px] sm:text-[130px] md:text-[180px] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none whitespace-nowrap overflow-hidden z-0">
        PERFORM
      </div>

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-semibold text-[#AE94FF] uppercase tracking-[0.25em] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#AE94FF]" />
          Zero Upfront Retainer
        </motion.div>

        {/* Large Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-bold tracking-[-0.04em] text-white leading-[0.9] sm:leading-[0.9] uppercase max-w-4xl"
        >
          <span>READY TO MAKE</span> <br />
          <span className="serif-italic font-normal text-[#AE94FF] lowercase px-2">
            your ads
          </span>
          <br />
          <span>PERFORM?</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-[#8E9299] font-normal max-w-xl leading-relaxed"
        >
          Tell us what you sell.{' '}
          <span className="text-white font-medium">We&apos;ll tell you what we&apos;d test.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12"
        >
          <button
            id="final-cta-btn"
            onClick={onOpenCampaignModal}
            className="btn-pill bg-[#AE94FF] text-black font-semibold text-sm tracking-tight transition-all duration-300 hover:bg-[#bfaaff] hover:shadow-[0_0_40px_rgba(174,148,255,0.5)] active:scale-[0.98]"
          >
            <span>Start a Campaign &rarr;</span>
          </button>
        </motion.div>

        {/* Micro note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-xs text-[#8E9299] tracking-widest uppercase"
        >
          No pressure • 100% Performance-aligned • Rapid setup
        </motion.p>
      </div>
    </section>
  );
};
