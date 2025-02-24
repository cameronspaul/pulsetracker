import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    price: 19,
    tagline: 'Perfect for beginners needing basic wallet analysis.',
    features: [
      'Unlimited Wallet Analysis',
      '30-Day Trader History',
      'Excel Trade History Export',
      'Priority Support',
      'Access to Latest Analytics Updates',
    ],
  },
  {
    name: 'Premium',
    price: 49,
    tagline: 'Comprehensive insights for advanced traders.',
    features: [
      'Daily Winning Wallets',
      'Real-time Trader Alerts',
      'Custom Trader Filters',
      'Batch Wallet Analysis',
      'Insider Search',
      'Top Token Trader Finder',
      'Unlimited Wallet Analysis',
      '30-Day Trader History',
      'Excel Trade History Export',
      'Priority Support',
      'Access to Latest Analytics Updates',
    ],
    popular: true,
  },
];

const durations = [
  { months: 1, discount: 0 },
  { months: 3, discount: 0.1 },
  { months: 6, discount: 0.2 },
  { months: 12, discount: 0.3 },
];

export const Pricing = () => {
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, x: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const selectedIndex = durations.findIndex(d => d.months === selectedDuration.months);
    const selectedButton = buttonRefs.current[selectedIndex];
    const containerPadding = 8; // p-2 equals 8px
    
    if (selectedButton) {
      setSliderStyle({
        width: selectedButton.offsetWidth,
        x: selectedButton.offsetLeft - containerPadding
      });
    }
  }, [selectedDuration]);

  return (
    <section id="pricing" className="py-20 bg-background-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}


      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-300 text-lg">Choose the plan that best fits your needs</p>
        </div>

        {/* Duration Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 rounded-lg p-2 inline-flex relative sm:inline-flex sm:flex-row grid grid-cols-4 gap-1">
            <motion.div
              className="absolute inset-y-2 rounded-md bg-primary hidden sm:block"
              initial={false}
              animate={{
                width: sliderStyle.width,
                x: sliderStyle.x,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            {durations.map((duration, index) => (
              <button
                key={duration.months}
                ref={el => buttonRefs.current[index] = el}
                onClick={() => setSelectedDuration(duration)}
                className={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition-colors duration-200 relative z-10 ${
                  selectedDuration.months === duration.months
                    ? 'bg-primary sm:bg-transparent text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {duration.months} {duration.months === 1 ? 'Month' : 'Months'}
                {duration.discount > 0 && (
                  <span className={`block sm:inline ml-0 mt-0.5 sm:ml-2 text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-full transition-colors duration-200 ${
                    selectedDuration.months === duration.months
                      ? 'bg-red-500/70 text-red-100'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    Save {duration.discount * 100}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const monthlyPrice = plan.price;
            const discountedPrice = monthlyPrice * selectedDuration.months * (1 - selectedDuration.discount);

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 rounded-xl p-6 ${
                  plan.popular ? 'border-2 border-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-0.5 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{plan.tagline}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${Math.round(discountedPrice)}
                    </span>
                    {selectedDuration.discount > 0 && (
                      <span className="text-success text-sm">
                        Save ${Math.round(monthlyPrice * selectedDuration.months * selectedDuration.discount)}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-300 text-base">
                    for {selectedDuration.months} {selectedDuration.months === 1 ? 'month' : 'months'}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-success h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  onClick={() => {
                    const planType = plan.name.toLowerCase();
                    window.open(`https://t.me/PulseTrackerSolPay_bot?start=${selectedDuration.months}_${planType}`, '_blank');
                  }}
                >
                  Get {plan.name}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};