import { motion } from 'framer-motion';
import { UserPlus, Bot, Search, Wallet } from 'lucide-react';

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

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />,
      title: "Subscribe via Telegram",
      description: <>Send SOL payment through our secure <a href="https://t.me/PulseTrackerSolPay_bot?start=1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Paybot</a> to instantly activate your premium access.</>
    },
    {
      icon: <UserPlus className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />,
      title: "Join Premium Group",
      description: "Get immediate access to our exclusive Telegram group and advanced trading bot features as soon as you subscribe."
    },
    {
      icon: <Search className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />,
      title: "Live Trading Scanner",
      description: "Watch real-time analysis of active traders and their positions as they happen."
    },
    {
      icon: <Bot className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />,
      title: "Daily Success Recap",
      description: "Review detailed analysis of the day's most successful traders and their winning strategies."
    }
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-16 lg:py-20 bg-background-dark relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">How Premium Works</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-4">
            Get started with PulseTracker Premium in four simple steps
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/5 p-2 sm:p-3 lg:p-4 rounded-lg mb-2 sm:mb-3 lg:mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-1.5 sm:mb-2 lg:mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 