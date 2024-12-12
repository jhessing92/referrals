export interface Referral {
  id: string;
  code: string;
  createdAt: Date;
  referrerName: string;
  referrerEmail: string;
  referralCount: number;
  rewardAmount: number;
  status: 'active' | 'paused' | 'expired';
}

export interface ReferralStats {
  totalReferrals: number;
  activeReferrers: number;
  totalRewardsGiven: number;
  conversionRate: number;
}