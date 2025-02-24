import { motion } from 'framer-motion';

const partners = [
  {
    name: 'BullX',
    description: 'Partnered with BullX, a secure DEX platform featuring AI-powered trading bots and seamless asset management. Use our referral link get access now.',
    logo: '/pfp/bullx.jpg',
    referralLink: 'https://t.me/BullXNeoBot?start=access_L7TSAI47QKN'
  },
  {
    name: 'TradeWiz',
    description: 'Partnered with TradeWiz, delivering industry-leading speed and reliable copy trading execution.',
    logo: '/pfp/tradewiz.jpg',
    referralLink: 'https://t.me/TradeWiz_Solbot?start=r-A626XQTRS3'
  },
  {
    name: 'WaveBot',
    description: 'Partnered with WaveBot, offering lightning-fast trading across Solana, Base, and Ethereum with integrated analytics and security tools.',
    logo: '/pfp/wavebot.jpg',
    referralLink: 'https://t.me/onchain_wavebot?start=rs_608akofe'
  },
];

export const Partners = () => {
  return (
    <section className="py-12 sm:py-20 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Partners</h2>
          <p className="text-gray-300 text-base sm:text-lg px-4">
            Click below to get instant access to our partner platforms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-200 group border border-white/5 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] cursor-pointer flex flex-col h-full"
              onClick={() => window.open(partner.referralLink, '_blank', 'noopener noreferrer')}
            >
              <div className="block aspect-square rounded-lg overflow-hidden mb-4 sm:mb-6 max-w-[200px] mx-auto">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors duration-200 text-center">
                  {partner.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 text-center flex-grow">{partner.description}</p>
                <div className="text-center mt-6">
                  <button 
                    className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(partner.referralLink, '_blank', 'noopener noreferrer');
                    }}
                  >
                    Get Access
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};