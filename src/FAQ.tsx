import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How does your pricing work?',
      answer:
        'We operate on a pure performance model. You fund your ad spend directly inside your own ad platform account. We build the strategy, creative assets, ad copy, and handle all execution and optimisation. You only pay our agreed performance fee after the predefined qualified lead milestone has been achieved.',
    },
    {
      id: 'faq-2',
      question: 'Do I have to pay for the ads?',
      answer:
        'Yes. You fund the ad budget directly through your own Meta, Google, or LinkedIn ad accounts. This guarantees you retain 100% ownership of your pixel data, audiences, and campaign history. We do not take a percentage markup on your media spend.',
    },
    {
      id: 'faq-3',
      question: 'What counts as a result?',
      answer:
        'Before launching any campaigns, we establish an unmistakable, measurable qualification standard in writing (for example: booked sales calls with decision-makers matching your ICP, verified inbound applications with valid contact details, or qualified B2B quotes). If an inquiry does not meet the agreed criteria, it does not count toward the milestone.',
    },
    {
      id: 'faq-4',
      question: 'Do you guarantee results?',
      answer:
        'We guarantee our financial alignment: if we do not hit the pre-agreed milestone, you do not pay us a single dollar for our agency management, strategy, or creative work. You are protected from paying retainer fees for zero outcomes.',
    },
    {
      id: 'faq-5',
      question: "What happens if you don't hit the milestone?",
      answer:
        "If a campaign does not reach the agreed milestone within the agreed test cycle, you pay $0 in agency fees. You keep all the creatives, copy, landing pages, and leads that were generated along the way.",
    },
    {
      id: 'faq-6',
      question: 'Which platforms do you run ads on?',
      answer:
        'We specialize primarily in Meta (Facebook & Instagram Ads), Google Ads (Search, Performance Max, YouTube), and LinkedIn Ads for high-ticket B2B. We select the exact channel mix based on where your ideal buyers are most concentrated.',
    },
    {
      id: 'faq-7',
      question: "Why don't you charge upfront?",
      answer:
        'Because we believe the traditional agency retainer model is broken. Agencies often collect $5,000–$10,000/month regardless of whether you make a return. By charging on performance, we only win when our clients win.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 px-5 sm:px-8 bg-black overflow-hidden w-full max-w-full">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] max-w-[90vw] h-[300px] bg-[#AE94FF]/6 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto">
        {/* Eyebrow and Section Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="eyebrow inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold text-[#AE94FF] uppercase tracking-[0.25em] mb-6"
          >
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-[-0.035em] text-white leading-[0.98] uppercase"
          >
            Frequently{' '}
            <span className="serif-italic font-normal text-[#AE94FF] lowercase">
              asked
            </span>{' '}
            Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#8E9299] max-w-xl font-normal leading-relaxed"
          >
            Everything you need to know about our performance milestone structure.
          </motion.p>
        </div>

        {/* Minimal Accordion List */}
        <div className="mt-16 flex flex-col space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-950/90 border-[#AE94FF]/40 shadow-[0_0_25px_rgba(174,148,255,0.08)]'
                    : 'bg-zinc-950/50 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-semibold tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#AE94FF] text-black border-[#AE94FF]'
                        : 'bg-zinc-900 text-neutral-400 border-white/10'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
