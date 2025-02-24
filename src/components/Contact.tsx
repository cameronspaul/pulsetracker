import { motion } from 'framer-motion';
import { Mail, MessageCircle, Twitter } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "pulsetrackersolana@proton.me";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-background-darker relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Have questions or business inquiries? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-16">
          <motion.a
            href="https://t.me/cameronsol"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-xl p-4 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 min-h-[160px] sm:min-h-[200px] flex flex-col items-center justify-center border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1"
          >
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Telegram</h3>
            <p className="text-gray-300">@cameronsol</p>
          </motion.a>

          <motion.a
            href="mailto:pulsetrackersolana@proton.me"
            onClick={handleCopyEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 rounded-xl p-4 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 min-h-[160px] sm:min-h-[200px] flex flex-col items-center justify-center border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1"
          >
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 break-all text-sm sm:text-base">
              {copied ? "Copied!" : email}
            </p>
          </motion.a>

          <motion.a
            href="https://twitter.com/PulseTrackerSol"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 rounded-xl p-4 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 min-h-[160px] sm:min-h-[200px] flex flex-col items-center justify-center border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1"
          >
            <Twitter className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Twitter</h3>
            <p className="text-gray-300">@PulseTrackerSol</p>
          </motion.a>
        </div>


      </div>
    </section>
  );
};