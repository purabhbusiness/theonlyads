import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Zap, BarChart3, ArrowUpRight, Check } from 'lucide-react';

export const IntroApproach: React.FC = () => {
  const pillars = [
    {
      title: 'Precision Targeting',
      italicWord: 'Intent',
      description: 'Zero budget wasted on untargeted vanity impressions. We isolate buyer intent across Google, Meta, and LinkedIn.',
      icon: Target,
    },
    {
      title: 'High-Converting Creatives',
      italicWord: 'Messaging',
      description: 'Bespoke hooks, persuasive angle tests, and dedicated landing page architectures built to convert visitors to leads.',
      icon: Zap,
    },
    {
      title: 'Obsessive Optimisation',
      italicWord: 'Scalability',
      description: 'Daily bid management, negative keyword pruning, and algorithmic budget shifts to squeeze maximum pipeline value.',
      icon: BarChart3,
    },
  ];

  return (
    <section id="approach" className="relative py-28 px-5 sm:px-8 border-t border-white/5 overflow-hidden w-full max-w-full">
      {/* Background soft ambient purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[90vw] h-[400px] bg-[#AE94FF]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="eyebrow inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold text-[#AE94FF] uppercase tracking-[0.25em] mb-6"
          >
            THE ONLY APPROACH
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-[-0.035em] text-white max-w-3xl leading-[0.98] uppercase"
          >
            We turn{' '}
            <span className="serif-italic font-normal text-[#AE94FF] lowercase">
              ad spend
            </span>{' '}
            into{' '}
            <span className="serif-italic font-normal text-white lowercase">
              qualified leads.
            </span>
          </motion.h2>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#8E9299] max-w-2xl font-normal leading-relaxed"
          >
            We build and optimise paid advertising campaigns designed to bring businesses qualified leads.
          </motion.p>
        </div>

        {/* Large Statement Panel (Reference container with deep dark background and rounded edges) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 sm:mt-20 p-8 sm:p-14 rounded-3xl sm:rounded-[36px] bg-zinc-950/90 border border-white/10 relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle top interior glow line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#AE94FF]/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Big Typography Stack */}
            <div className="lg:col-span-7 flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#AE94FF] font-semibold">
                Our Core Formula
              </span>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
                <span className="block text-white hover:text-[#AE94FF] transition-colors">YOUR BUSINESS.</span>
                <span className="block text-neutral-400 hover:text-white transition-colors">YOUR AUDIENCE.</span>
                <span className="block text-[#AE94FF]">YOUR LEADS.</span>
              </h3>
              <p className="pt-4 text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
                Traditional agencies bill retainers regardless of whether phones ring or calendars fill. We align incentives directly: we only earn our fee when real, verified, qualified leads reach your sales pipeline.
              </p>
            </div>

            {/* Pillar badges right column */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-[#AE94FF]/30 transition-all duration-300 flex items-start gap-4 group/card"
                  >
                    <div className="p-2.5 rounded-xl bg-black border border-white/10 text-[#AE94FF] shrink-0 group-hover/card:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {pillar.title}{' '}
                        <span className="font-serif-italic font-normal text-xs text-[#AE94FF]">
                          ({pillar.italicWord})
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
