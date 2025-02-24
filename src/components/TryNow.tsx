import React from 'react';
import { motion } from 'framer-motion';

const TryNow: React.FC = () => {
  const exampleWallets = [
    {
      address: 'CkUZV387xnoGpF7wC2moMa6mPmAgCvTT4pWgzq4M9fCD',
      description: 'Example Wallet 1'
    },
    {
      address: 'o7RY6P2vQMuGSu1TrLM81weuzgDjaCRTXYRaXJwWcvc',
      description: 'Example Wallet 2'
    },
    {
      address: 'Dm2Ds8sBzaCgbEq4ndyxgF43ggjrg42bXbVia56uy8qS',
      description: 'Example Wallet 3'
    }
  ];

  const handleWalletClick = (address: string) => {
    const botUrl = `https://t.me/PulseTrackerSol_bot?start=${address}`;
    window.open(botUrl, '_blank');
  };

  return (
    <section id="try-now" className="py-12 sm:py-20 bg-background-darker relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Try Now</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0">
            Experience the power of our wallet analysis tool firsthand. Click on any of the example wallets below to see detailed analytics through our Telegram bot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {exampleWallets.map((wallet, index) => (
            <motion.div 
              key={wallet.address}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(18,174,149,0.2)",
                transition: { duration: 0.2 }
              }}
              onClick={() => handleWalletClick(wallet.address)}
              className="bg-white/5 p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/5 hover:border-primary/50 group"
            >
              <h3 className="font-semibold text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{wallet.description}</h3>
              <p className="text-xs sm:text-sm text-gray-300 break-all mb-3 sm:mb-4">{wallet.address}</p>
              <div className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">Click to analyze →</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TryNow; 