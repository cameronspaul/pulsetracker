import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-r from-background-dark via-background-darker to-background-dark flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-background-darker/50" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Profitable Solana Wallets Used by Successful Traders
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Get all your analysis needs from PulseTracker!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('features')}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary hover:border-primary-dark text-white font-medium rounded-lg transition-colors duration-200"
            >
              View Features
            </motion.button>
          </div>


        </motion.div>
      </div>
    </section>
  );
};