import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, FileSpreadsheet, Wallet, Trophy, Bell, Users, History, Star, RefreshCw, LucideIcon, MousePointerClick } from 'lucide-react';
import { VideoModal } from './VideoModal';

// Import video assets
import profitableWalletsVideo from '@assets/videos/profitable_solana_wallets.mp4';
import scanLiveTradersVideo from '@assets/videos/how_to_scan_live_traders_solana.mp4';
import analyzeWalletVideo from '@assets/videos/how_to_analyze_solana_wallet.mp4';
import excelDownloadVideo from '@assets/videos/get_an_excel_download_full_of_solana_trade_data.mp4';
import useFiltersVideo from '@assets/videos/how_to_use_filters_for_solana_wallets.mp4';
import analyzeMultipleWalletsVideo from '@assets/videos/how_to_analyze_mulitple_solana_wallets.mp4';
import findInsiderWalletsVideo from '@assets/videos/how_to_find_insider_solana_wallets.mp4';
import findWinningWalletsVideo from '@assets/videos/how_to_find_winning_wallets_dexscreener.mp4';
import paymentVideo from '@assets/videos/how_to_pay_for_pulsetrackersol.mp4';

type Feature = {
  icon: LucideIcon;
  name: string;
  description: string;
  longDescription: string;
  demoVideo: string;
  tier: "Standard" | "Premium";
};

type BasicFeature = {
  icon: LucideIcon;
  name: string;
  description: string;
  longDescription: string;
  demoVideo: string;
};

const groupTools: Feature[] = [
  { 
    icon: Trophy, 
    name: 'Daily Winning Wallets', 
    description: 'Daily curated document of wallets of top-performing Solana traders, filtered by ROI, win rate, and key performance metrics.',
    longDescription: 'Get access to a daily-updated list of the most successful crypto wallets. Our advanced algorithms analyze thousands of wallets to identify those with consistent performance, high ROI, and proven trading strategies. Stay ahead of the market by following the best traders.',
    demoVideo: profitableWalletsVideo,
    tier: "Premium"
  },
  { 
    icon: Bell, 
    name: 'Real-time Trader Alerts', 
    description: 'Automated scanning of active traders, alerting when wallets achieve 80% win rate and 20% ROI thresholds.',
    longDescription: 'Never miss a profitable trading opportunity with our real-time alert system. Get instant notifications when top traders make moves or when wallets meet our strict performance criteria. Our alerts help you stay informed and ready to act on the most promising opportunities.',
    demoVideo: scanLiveTradersVideo,
    tier: "Premium"
  },
];

const tools: Feature[] = [
  { 
    icon: Wallet, 
    name: 'Unlimited Wallet Analysis', 
    description: 'Enjoy unrestricted analysis of wallets with no usage limits.',
    longDescription: 'Access detailed wallet analysis without restrictions. Study trading histories, calculate performance metrics, and track success rates for any number of wallets. Our comprehensive analysis tools help you understand what makes successful traders profitable.',
    demoVideo: analyzeWalletVideo,
    tier: "Standard"
  },
  { 
    icon: History, 
    name: '30-Day Trader History', 
    description: 'Review up to 30 days of a trader\'s complete trading history.',
    longDescription: 'Dive deep into a trader\'s recent history with our 30-day historical analysis. See every trade, track performance over time, and understand their strategy evolution. Identify patterns and learn from both successful and unsuccessful trades.',
    demoVideo: analyzeWalletVideo,
    tier: "Standard"
  },
  { 
    icon: FileSpreadsheet, 
    name: 'Excel Trade History Export', 
    description: 'Download a comprehensive Excel report of a trader\'s activity, including purchase amounts, trade duration, summaries, and helpful charts.',
    longDescription: 'Export detailed trading data for further analysis. Our Excel reports include comprehensive trade histories, performance metrics, and visual charts. Perfect for those who want to conduct their own analysis or maintain detailed records of trading activities.',
    demoVideo: excelDownloadVideo,
    tier: "Standard"
  },
  { 
    icon: Filter, 
    name: 'Custom Trader Filters', 
    description: 'Apply custom filters to our database of scanned wallets to find traders matching your specific criteria.',
    longDescription: 'Take control of your trader discovery with our powerful filtering system. Set custom parameters for ROI, trade frequency, token preferences, and more. Find exactly the type of traders you want to follow and analyze their strategies in detail.',
    demoVideo: useFiltersVideo,
    tier: "Premium"
  },
  { 
    icon: Search, 
    name: 'Batch Wallet Analysis', 
    description: 'Quickly analyze multiple wallets simultaneously and get a summarized performance report.',
    longDescription: 'Save time by analyzing multiple wallets at once. Our batch analysis tool provides comprehensive reports on trading patterns, performance metrics, and risk assessments for multiple wallets. Compare strategies and identify the most successful approaches efficiently.',
    demoVideo: analyzeMultipleWalletsVideo,
    tier: "Premium"
  },
  { 
    icon: Eye, 
    name: 'Insider Search', 
    description: 'Identify early buyers before significant price pumps by analyzing token price movements on DEXScreener tokens.',
    longDescription: 'Get ahead of the market by identifying early buyers and potential price movements. Our insider search tool analyzes on-chain data to spot patterns and unusual trading activity that might indicate upcoming price action. Stay informed about potential opportunities before they become widely known.',
    demoVideo: findInsiderWalletsVideo,
    tier: "Premium"
  },
  { 
    icon: Users, 
    name: 'Top Token Trader Finder', 
    description: 'Provide a token, and we\'ll identify and analyze the top-performing traders for that specific token.',
    longDescription: 'Find the most successful traders for any specific token. Enter a token address, and our system will identify wallets with the best trading history for that token. Understand who the experts are and learn from their trading patterns.',
    demoVideo: findWinningWalletsVideo,
    tier: "Premium"
  },
];

const basicFeatures: BasicFeature[] = [
    {
        icon: Star,
        name: 'Priority Support',
        description: 'Get fast and dedicated customer support.',
        longDescription: 'Enjoy premium support from our dedicated team. Get quick responses to your questions, technical assistance when needed, and priority handling of any issues. We\'re here to ensure you get the most out of our platform.',
        demoVideo: paymentVideo,
    },
    {
        icon: RefreshCw,
        name: 'Access to Latest Analytics Updates',
        description: 'Stay up-to-date with the newest features and analytical tools.',
        longDescription: 'Be the first to access new features and improvements. Our platform is constantly evolving with new analytical tools, metrics, and features to help you make better trading decisions. Regular updates ensure you always have the best tools at your disposal.',
        demoVideo: analyzeWalletVideo,
    },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<(typeof tools[0] | typeof groupTools[0] | typeof basicFeatures[0]) | null>(null);

  return (
    <section id="features" className="py-12 sm:py-20 bg-background-darker relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Features Section (formerly Group Tools) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Key Trading Features</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
            Stay ahead of market movements with our powerful trading analytics and real-time tracking tools.
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16 text-left"
          >
            {groupTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={item}
                onClick={() => setSelectedFeature(tool)}
                className="group bg-white/5 p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1 relative"
              >
                <div className="flex items-start">
                  <div className="bg-white/5 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <tool.icon className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 sm:py-1 rounded ${tool.tier === 'Premium' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'}`}>
                        {tool.tier === 'Premium' ? 'PREMIUM' : 'STANDARD'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{tool.description}</p>
                    <div className="absolute bottom-4 right-4 flex items-center">
                      <span className="text-sm sm:text-base text-primary font-medium mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        View Demo
                      </span>
                      <MousePointerClick className="h-5 w-5 text-gray-500/30 group-hover:text-primary transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Other Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Additional Features</h3>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
            Powerful bot tools and analytics to enhance your trading experience and maximize your potential returns.
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 text-left"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={item}
                onClick={() => setSelectedFeature(tool)}
                className={`group bg-white/5 p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1 relative ${
                  tools.length % 2 !== 0 && index === tools.length - 1 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''
                }`}
              >
                <div className="flex items-start">
                  <div className="bg-white/5 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <tool.icon className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 sm:py-1 rounded ${tool.tier === 'Premium' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'}`}>
                        {tool.tier === 'Premium' ? 'PREMIUM' : 'STANDARD'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{tool.description}</p>
                    <div className="absolute bottom-4 right-4 flex items-center">
                      <span className="text-sm sm:text-base text-primary font-medium mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        View Demo
                      </span>
                      <MousePointerClick className="h-5 w-5 text-gray-500/30 group-hover:text-primary transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Basic Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Support & Updates</h3>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
            Support and access to our latest updates to help you succeed in your trading journey.
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 text-left"
          >
            {basicFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group bg-white/5 p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1 relative"
              >
                <div className="flex items-start">
                  <div className="bg-white/5 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <feature.icon className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <VideoModal
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        feature={selectedFeature || tools[0]}
      />
    </section>
  );
};