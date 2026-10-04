import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';

interface PricingModelProps {
  onOpenCampaignModal: () => void;
}

export const PricingModel: React.FC<PricingModelProps> = ({ onOpenCampaignModal }) => {
  const flowSteps = [
    {
      title: 'AD BUDGET',
      desc: 'Funded by you directly into your ad account',
      pill: 'Step 1',
    },
    {
      title: 'CAMPAIGN',
      desc: 'Engineered & managed by The Only Ads',
      pill: 'Step 2',
    },
    {
      title: 'MILESTONE',
      desc: 'Reaching the predefined qualified lead volume',
      pill: 'Step 3',
    },
    {
      title: 'PERFORMANCE FEE',
      desc: 'Only paid once verified results are delivered',
      pill: 'Step 4',
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-28 px-5 sm:px-8 border-t border-white/5 bg-black overflow-hidden w-full max-w-full">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90vw] h-[400px] bg-[#AE94FF]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Pill & Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="eyebrow inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold text-[#AE94FF] uppercase tracking-[0.25em] mb-6"
          >
            Pricing & Terms
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.035em] text-white max-w-3xl leading-[0.98] uppercase"
          >
            NO UPFRONT{' '}
            <span className="serif-italic font-normal text-[#AE94FF] lowercase">
              fee.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#8E9299] max-w-2xl font-normal leading-relaxed"
          >
            You fund the advertising. We handle the campaigns. You pay our performance fee only after the agreed lead-generation milestone is achieved.
          </motion.p>
        </div>

        {/* Main Pricing & Flow Container (Matching the reference's premium bordered card style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 sm:mt-20 p-8 sm:p-12 lg:p-16 rounded-3xl sm:rounded-[36px] bg-zinc-950/90 border border-white/10 relative overflow-hidden shadow-2xl"
        >
          {/* Top highlight bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AE94FF]/15 border border-[#AE94FF]/30 text-xs font-semibold text-[#AE94FF] uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                Pure Performance Model
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                For Brands Ready to <span className="font-serif-italic font-normal text-[#AE94FF]">Scale Without Retainer Waste</span>
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-3xl sm:text-4xl font-black text-white">$0 Upfront</div>
              <div className="text-xs text-neutral-400 mt-1">Retainer risk: 100% eliminated</div>
            </div>
          </div>

          {/* Visual Flow: AD BUDGET → CAMPAIGN → MILESTONE → PERFORMANCE FEE */}
          <div className="py-12">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-8 text-center sm:text-left">
              The Performance Sequence
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {flowSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className={`p-6 rounded-2xl relative transition-all duration-300 ${
                    step.highlight
                      ? 'bg-[#AE94FF]/10 border-2 border-[#AE94FF]/50 shadow-[0_0_30px_rgba(174,148,255,0.15)]'
                      : 'bg-zinc-900/60 border border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#AE94FF] font-bold">
                      {step.pill}
                    </span>
                    {idx < 3 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-neutral-600 absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 rounded-full" />
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-black tracking-tight text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee / Value points */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#AE94FF] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Zero Hidden Charges</h5>
                <p className="text-xs text-neutral-400 mt-1">You know the exact performance fee before we launch.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#AE94FF] shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Full Account Ownership</h5>
                <p className="text-xs text-neutral-400 mt-1">All ad creatives, data, pixels, and copy stay yours forever.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#AE94FF] shrink-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">No Milestone = No Fee</h5>
                <p className="text-xs text-neutral-400 mt-1">If we miss the target, we eat our management costs.</p>
              </div>
            </div>
          </div>

          {/* Pricing CTA Button */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-neutral-400">
              Ready to calculate your custom milestone and performance threshold?
            </p>
            <button
              id="pricing-calculate-cta-btn"
              onClick={onOpenCampaignModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#AE94FF] text-black font-semibold text-sm tracking-tight transition-all duration-200 hover:bg-[#bfaaff] hover:shadow-[0_0_30px_rgba(174,148,255,0.4)]"
            >
              <span>Calculate Campaign Milestone</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
