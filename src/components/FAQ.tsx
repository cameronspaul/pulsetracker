import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is PulseTrackerSol?',
    answer: 'PulseTrackerSol is a comprehensive Solana wallet analytics platform that helps traders discover and track profitable wallets. Our platform provides real-time insights, analytics, and tools to help you make informed trading decisions.',
  },
  {
    question: 'How does the wallet tracking work?',
    answer: 'Our platform continuously monitors Solana blockchain activity to identify and track successful trading wallets. We analyze various metrics including ROI, trading volume, and success rates to provide you with actionable insights.',
  },
  {
    question: 'Can I try PulseTracker Bot before committing to a subscription?',
    answer: 'Absolutely! You can enjoy 3 free checks per day to explore the basic features of PulseTracker before committing to a subscription.',
  },
  {
    question: 'What happens after I buy?',
    answer: 'Standard users will instantly gain access to the bots features. Premium users will receive a link to a Telegram group where they can download daily winning wallets.',
  },
  {
    question: 'How does the renewal process work?',
    answer: 'After the 31-day period, the renewal process is manual. You will get reminded to purchase again to continue using the service on PayBot.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'Due to the nature of our digital service, we do not offer refunds. All sales are final. Please carefully consider your purchase before subscribing.',
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-20 bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Find answers to common questions about PulseTrackerSol
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/5 rounded-lg sm:rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center"
              >
                <span className="text-base sm:text-lg font-medium text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                </motion.div>
              </button>
              <AnimatePresence mode="sync">
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: "easeOut" },
                        opacity: { duration: 0.2, ease: "linear" }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeIn" },
                        opacity: { duration: 0.2, ease: "linear" }
                      }
                    }}
                    className="px-4 sm:px-6 overflow-hidden"
                  >
                    <div className="pb-3 sm:pb-4">
                      <p className="text-sm sm:text-base text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};