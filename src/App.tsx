import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroApproach } from './components/IntroApproach';
import { HowItWorks } from './components/HowItWorks';
import { PricingModel } from './components/PricingModel';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CampaignModal } from './components/CampaignModal';

export default function App() {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);

  const handleOpenCampaignModal = () => {
    setIsCampaignModalOpen(true);
  };

  const handleCloseCampaignModal = () => {
    setIsCampaignModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-black text-white selection:bg-[#AE94FF] selection:text-black flex flex-col justify-between font-sans">
      {/* Navigation */}
      <Navbar onOpenCampaignModal={handleOpenCampaignModal} />

      {/* Main Content Flow */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Hero onOpenCampaignModal={handleOpenCampaignModal} />
        <IntroApproach />
        <HowItWorks onOpenCampaignModal={handleOpenCampaignModal} />
        <PricingModel onOpenCampaignModal={handleOpenCampaignModal} />
        <FAQ />
        <FinalCTA onOpenCampaignModal={handleOpenCampaignModal} />
      </main>

      {/* Footer */}
      <Footer onOpenCampaignModal={handleOpenCampaignModal} />

      {/* Interactive Campaign Modal */}
      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={handleCloseCampaignModal}
      />
    </div>
  );
}
