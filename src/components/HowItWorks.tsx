import React from 'react';
import { motion } from 'motion/react';
import { Wallet, PlayCircle, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { HowItWorksStep } from '../types';

interface HowItWorksProps {
  onOpenCampaignModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenCampaignModal }) => {
  const steps: HowItWorksStep[] = [
    {
      stepNumber: '01',
      title: 'YOU FUND THE ADS',
      description: 'You maintain direct ownership and billing on your ad accounts (Meta, Google, LinkedIn). Your ad budget is invested directly into platform media spend.',
      details: [
        'Direct account access & transparency',
        'No media markups or hidden fees',
        'Full asset ownership from day one',
      ],
    },
    {
      stepNumber: '02',
      title: 'WE RUN THE CAMPAIGNS',
      description: 'Our team crafts high-converting copy, designs custom creative angles, builds dedicated conversion funnels, and manages daily bidding.',
      details: [
        'Custom creative hooks & copy testing',
        'High-converting landing page optimization',
        'Continuous audience testing & bid management',
      ],
    },
    {
      stepNumber: '03',
      title: 'WE HIT THE AGREED MILESTONE',
      description: 'Before launching, we define a concrete, transparent milestone (e.g. 50 qualified booked demos, or target CPA threshold) that we must achieve.',
      details: [
        'Strict lead qualification criteria',
        'Live pipeline tracking dashboard',
        'Zero ambiguity on what counts as a lead',
      ],
    },
    {
      stepNumber: '04',
      title: 'YOU PAY',
      description: 'Once the agreed milestone is verified in your CRM/inbox, our performance fee is unlocked. If we fail to hit the agreed outcome, you owe us nothing.',
      details: [
        'Zero upfront retainer fee',
        'Performance-aligned partnership',
        'Pay exclusively for real results',
      ],
    },
  ];

  return (
    <section id="how-it-works" className="relative py-28 px-5 sm:px-8 bg-black overflow-hidden w-full max-w-full">
      {/* Subtle purple background ambient glow */}
      <div className="absolute top-1/3 right-0 w-80 max-w-[80vw] h-80 bg-[#AE94FF]/8 blur-[140px] pointer-events-none rounded-full" />

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
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-[-0.035em] text-white max-w-3xl leading-[0.98] uppercase"
          >
            Simple. <br className="sm:hidden" />
            You{' '}
            <span className="serif-italic font-normal text-[#AE94FF] lowercase">
              fund.
            </span>{' '}
            We{' '}
            <span className="serif-italic font-normal text-white lowercase">
              perform.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#8E9299] max-w-2xl font-normal leading-relaxed"
          >
            A 4-step performance framework eliminating retainer risk and maximizing lead generation accountability.
          </motion.p>
        </div>

        {/* 4 Steps Grid (Styled like the reference's feature cards) */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-[#AE94FF]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Step Number & Glow Marker */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[#AE94FF]">
                    {step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-[#AE94FF] group-hover:border-[#AE94FF]/30 transition-colors">
                    {idx === 0 && <Wallet className="w-4 h-4" />}
                    {idx === 1 && <PlayCircle className="w-4 h-4" />}
                    {idx === 2 && <Target className="w-4 h-4" />}
                    {idx === 3 && <CheckCircle2 className="w-4 h-4 text-[#AE94FF]" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#AE94FF] transition-colors mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-col space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#AE94FF]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button underneath */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenCampaignModal}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 hover:border-[#AE94FF]/50 text-sm font-medium tracking-tight transition-all duration-200"
          >
            <span>Agree on your custom milestone</span>
            <ArrowRight className="w-4 h-4 text-[#AE94FF]" />
          </button>
        </div>
      </div>
    </section>
  );
};
