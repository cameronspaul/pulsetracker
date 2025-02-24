import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check, LucideIcon, Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

type Feature = {
  icon: LucideIcon;
  name: string;
  description: string;
  longDescription: string;
  demoVideo: string;
  tier?: 'Standard' | 'Premium';
};

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  feature: Feature;
};

export const VideoModal = ({ isOpen, onClose, feature }: VideoModalProps) => {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  
  if (!isOpen) return null;

  const handleClose = () => {
    setIsVideoExpanded(false);
    onClose();
  };

  const getKeyPoints = (featureName: string) => {
    const defaultPoints = [
      "Real-time updates and notifications",
      "Detailed analytics and insights",
      "Easy-to-use interface",
      "Customizable settings"
    ];

    const featurePoints: { [key: string]: string[] } = {
      'Unlimited Wallet Analysis': [
        "Analyze unlimited wallets",
        "Accurate and up-to-date data",
        "Metrics and insights for every wallet",
        "Export to Excel"
      ],
      'Daily Winning Wallets': [
        "Daily updated wallet rankings",
        "Performance-based filtering",
        "ROI and win rate tracking",
        "Historical performance data"
      ],
      'Real-time Trader Alerts': [
        "Instant notification system",
        "Customizable alert thresholds",
        "Multi-channel notifications",
        "Smart alert filtering"
      ],
      'Custom Trader Filters': [
        "Advanced filtering options",
        "Multiple criteria selection",
        "Save custom filters",
        "Quick filter templates"
      ],
      'Batch Wallet Analysis': [
        "Analyze multiple wallets",
        "Comparative analytics",
        "Bulk performance metrics",
        "Export capabilities"
      ],
      'Insider Search': [
        "Early buyer detection",
        "Price movement analysis",
        "Token screening",
        "Pattern recognition"
      ]
    };

    return featurePoints[featureName] || defaultPoints;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-5xl bg-background-darker rounded-xl overflow-hidden h-[90vh] lg:h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 lg:top-4 lg:right-4 text-gray-400 hover:text-white z-10"
          >
            <X className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Content */}
          <div className="flex flex-col lg:flex-row h-full">
            {/* Video Section */}
            <div className={`relative bg-black/50 ${isVideoExpanded ? 'h-[80vh]' : 'h-[35vh]'} lg:h-full w-full lg:w-[50%] flex-shrink-0 transition-all duration-300`}>
              <button
                onClick={() => setIsVideoExpanded(!isVideoExpanded)}
                className="absolute top-2 left-2 lg:hidden text-gray-400 hover:text-white z-10 bg-black/30 p-1.5 rounded-lg"
              >
                {isVideoExpanded ? (
                  <Minimize2 className="w-5 h-5" />
                ) : (
                  <Maximize2 className="w-5 h-5" />
                )}
              </button>
              <div className="h-full flex items-center justify-center">
                <video
                  src={feature.demoVideo}
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

            {/* Info Section */}
            <div className={`flex-1 p-4 lg:p-8 overflow-y-auto ${isVideoExpanded ? 'hidden lg:block' : ''} h-[calc(90vh-35vh)] lg:h-full`}>
              <div className="h-full flex flex-col">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">{feature.name}</h3>
                <p className="text-gray-300 text-base lg:text-lg mb-6 lg:mb-8">{feature.longDescription}</p>

                <div className="mb-6 lg:mb-8">
                  <h4 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">Key Features</h4>
                  <ul className="space-y-2 lg:space-y-3">
                    {getKeyPoints(feature.name).map((point, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary mr-2 lg:mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm lg:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 lg:pt-6 flex flex-col lg:flex-row gap-3 lg:gap-4">
                  {feature.name === 'Daily Winning Wallets' && (
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/PulseTrackerSol_daily_wallets.xlsx';
                        link.download = 'PulseTrackerSol_daily_wallets.xlsx';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="w-full lg:flex-1 bg-secondary hover:bg-secondary-dark text-white font-medium py-2.5 lg:py-3 px-4 lg:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm lg:text-base"
                    >
                      Download Example
                      <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                    </button>
                  )}
                  <button
                    onClick={() => window.open('https://t.me/PulseTrackerSol_bot?start=1', '_blank')}
                    className="w-full lg:flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-2.5 lg:py-3 px-4 lg:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm lg:text-base"
                  >
                    Try It Now
                    <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 