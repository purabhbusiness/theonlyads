import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { CampaignFormData } from '../types';

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<CampaignFormData>({
    businessName: '',
    website: '',
    productOrService: '',
    monthlyBudget: '$5,000 - $10,000',
    targetLeadGoal: '30 - 50 Qualified Leads / mo',
    platforms: ['Meta (FB/IG)', 'Google Ads'],
    contactEmail: '',
    contactName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
  ];

  const platformOptions = [
    'Meta (FB/IG)',
    'Google Ads',
    'LinkedIn Ads',
    'YouTube Ads',
  ];

  const handlePlatformToggle = (platform: string) => {
    if (formData.platforms.includes(platform)) {
      setFormData({
        ...formData,
        platforms: formData.platforms.filter((p) => p !== platform),
      });
    } else {
      setFormData({
        ...formData,
        platforms: [...formData.platforms, platform],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate campaign milestone proposal generation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#AE94FF]/20 blur-[100px] pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                {/* Modal Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AE94FF]/10 border border-[#AE94FF]/30 text-xs font-semibold text-[#AE94FF] uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    Zero Upfront Retainer
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    Start a <span className="font-serif-italic font-normal text-[#AE94FF]">Campaign</span>
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2">
                    Tell us what you sell. We will review your offer and propose a tailored performance milestone within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#AE94FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#AE94FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* What do you sell? */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      What do you sell? *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formData.productOrService}
                      onChange={(e) => setFormData({ ...formData, productOrService: e.target.value })}
                      placeholder="e.g. B2B Enterprise SaaS for logistics teams, high-ticket solar installation, luxury real estate advisory..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#AE94FF] transition-colors resize-none"
                    />
                  </div>

                  {/* Monthly Planned Ad Budget */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Monthly Ad Budget (Funded by You)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((budget) => (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => setFormData({ ...formData, monthlyBudget: budget })}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all text-center border ${
                            formData.monthlyBudget === budget
                              ? 'bg-[#AE94FF] text-black border-[#AE94FF] shadow-sm'
                              : 'bg-zinc-900/60 text-neutral-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Target Ad Channels
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {platformOptions.map((plat) => {
                        const isSelected = formData.platforms.includes(plat);
                        return (
                          <button
                            type="button"
                            key={plat}
                            onClick={() => handlePlatformToggle(plat)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-colors border ${
                              isSelected
                                ? 'bg-[#AE94FF]/20 text-[#AE94FF] border-[#AE94FF]/50'
                                : 'bg-zinc-900/50 text-neutral-400 border-white/10 hover:border-white/20'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '} {plat}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Zero Risk Assurance */}
                  <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#AE94FF] shrink-0" />
                    <p className="text-xs text-neutral-300">
                      <span className="font-semibold text-white">Milestone Protection:</span> We agree on the target lead volume upfront. If we don’t perform, you pay $0.
                    </p>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#AE94FF] text-black font-semibold text-base tracking-tight transition-all duration-200 hover:bg-[#bfaaff] hover:shadow-[0_0_30px_rgba(174,148,255,0.4)] disabled:opacity-50 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Preparing proposal...</span>
                    ) : (
                      <>
                        <span>Submit Campaign Inquiry</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#AE94FF]/20 border border-[#AE94FF]/40 flex items-center justify-center text-[#AE94FF] mb-6 shadow-[0_0_30px_rgba(174,148,255,0.3)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  Inquiry <span className="font-serif-italic font-normal text-[#AE94FF]">Received</span>
                </h3>
                <p className="mt-3 text-neutral-300 text-sm max-w-md leading-relaxed">
                  Thanks <span className="text-white font-semibold">{formData.contactName || 'there'}</span>! We’re reviewing your product details for{' '}
                  <span className="text-[#AE94FF]">{formData.monthlyBudget}</span> ad spend. We will reach out to <span className="text-white font-medium">{formData.contactEmail}</span> within 24 hours with our recommended test angles and milestone proposal.
                </p>

                <div className="mt-8 p-4 rounded-2xl bg-zinc-900 border border-white/10 text-left w-full max-w-md">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Your Performance Guarantee
                  </div>
                  <div className="text-sm font-semibold text-white">
                    $0 Upfront Fee • Milestone-gated payout
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-8 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 text-sm font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
