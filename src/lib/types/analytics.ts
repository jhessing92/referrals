export interface ReferralAnalytics {
  dailyStats: DailyStats[];
  conversionFunnel: ConversionStep[];
  topReferrers: TopReferrer[];
  rewardDistribution: RewardTier[];
}

export interface DailyStats {
  date: string;
  referrals: number;
  conversions: number;
  rewards: number;
}

export interface ConversionStep {
  stage: string;
  count: number;
  percentage: number;
}

export interface TopReferrer {
  id: string;
  name: string;
  referralCount: number;
  conversionRate: number;
  totalRewards: number;
}

export interface RewardTier {
  range: string;
  count: number;
  percentage: number;
}