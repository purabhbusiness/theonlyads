export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}

export interface CampaignFormData {
  businessName: string;
  website: string;
  productOrService: string;
  monthlyBudget: string;
  targetLeadGoal: string;
  platforms: string[];
  contactEmail: string;
  contactName: string;
}
