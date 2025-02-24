import { motion } from 'framer-motion';

const roadmapItems = [
  {
    quarter: 'Q2 2024',
    name: 'Alpha Launch',
    description: 'Initial alpha release of PulseTracker.  Free access for community testing and feedback.',
    completed: true,
    features: [
      'Free access to all features for community members',
      'Feedback collection for future development',
      'Alpha testing of core functionalities',
    ],
  },
  {
    quarter: 'Q3 2024',
    name: 'Official Launch',
    description: 'Official launch of PulseTracker with tiered access options.',
    completed: true,
    features: [
      'Tiered access options catering to different users',
      'Range of features and tools for traders and investors',
      'Platform available for general use',
    ],
  },
  {
    quarter: 'Q1 2025',
    name: 'New Feature Additions',
    description: 'Introduction of the Live Trader Alert and advanced analytics.',
    completed: true,
    features: [
      'Live trader alert functionality.',
      'Enhanced analytics for PulseTracker.',
      'More in-depth data analysis capabilities.',
    ],
  },
  {
    quarter: 'Q2 2025',
    name: 'Web Application',
    description: 'Launch of PulseTracker as a comprehensive web application',
    completed: false,
    features: [
      'Full-featured web interface',
      'Real-time dashboard and monitoring',
      'Enhanced user experience and accessibility',
    ],
  },
  {
    quarter: 'Q3 2025',
    name: 'API Integration',
    description: 'Launch of the API for third-party integrations and developers',
    completed: false,
    features: [
      'RESTful API endpoints for developers',
      'Access to wallet data and transaction histories',
      'Real-time data streaming capabilities',
    ],
  },
  {
    quarter: 'Q4 2025',
    name: 'Notification Bot',
    description: 'Advanced notification system with multi-platform support',
    completed: false,
    features: [
      'Discord and Telegram integration',
      'Customizable alert parameters',
      'Automated trading signals and notifications',
    ],
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Roadmap = () => {
  return (
    <section id="roadmap" className="pt-12 sm:pt-20 pb-16 sm:pb-32 bg-background-darker relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />
        </div>
      </div>

      <div className="relative max-w-[150rem] mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Project Roadmap</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2">
            Track our journey and upcoming features as we continue to enhance your trading experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline lines */}
          <div className="absolute top-[16px] left-0 right-0 hidden md:block">
            {/* Base line */}
            <div className="absolute h-0.5 w-full bg-white/10" />
            
            {/* Completed line with gradient fade */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute h-0.5 w-[50%] bg-gradient-to-r from-primary via-primary to-transparent origin-left"
              style={{
                backgroundSize: '100% 100%',
                backgroundPosition: 'left',
              }}
            />
          </div>
          
          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6">
            {roadmapItems.map((phase, index) => (
              <motion.div key={index} variants={item} className="relative">
                {/* Timeline point */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 hidden md:flex">
                  <motion.div
                    initial={{ 
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                    whileInView={phase.completed ? {
                      backgroundColor: ['transparent', 'transparent', 'rgb(18, 174, 149)'],
                      borderColor: ['rgba(255, 255, 255, 0.2)', 'rgb(18, 174, 149)', 'rgb(18, 174, 149)'],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ 
                      duration: 0.3,
                      delay: index === 0 ? 0.2 : index === 1 ? 0.6 : index === 2 ? 1.1 : 1.4,
                      times: [0, 0.5, 1]
                    }}
                    viewport={{ once: true }}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2"
                  />
                </div>

                <motion.div 
                  initial={{ 
                    opacity: 0,
                  }}
                  whileInView={{ 
                    opacity: 1,
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: index === 0 ? 0.2 : index === 1 ? 0.6 : index === 2 ? 1.1 : 1.4
                  }}
                  viewport={{ once: true }}
                  className={`mt-0 md:mt-12 group bg-white/5 p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border hover:border-primary/30 hover:shadow-[0_0_20px_rgba(18,174,149,0.1)] transform hover:-translate-y-1 ${
                    phase.completed ? 'border-primary/30' : 'border-white/5'
                  }`}
                >
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="mb-2 sm:mb-3">
                          <h3 className="text-sm sm:text-base font-medium text-primary/80 mb-1">
                            {phase.quarter}
                          </h3>
                          <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-primary transition-colors">
                            {phase.name}
                          </h4>
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ 
                            duration: 0.3,
                            delay: index === 0 ? 0.2 : index === 1 ? 0.6 : index === 2 ? 1.1 : 1.4
                          }}
                          viewport={{ once: true }}
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            phase.completed
                              ? 'bg-primary/20 text-primary'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}
                        >
                          {phase.completed ? 'COMPLETED' : 'PLANNED'}
                        </motion.span>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{phase.description}</p>
                      <ul className="space-y-3 sm:space-y-4">
                        {phase.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start text-gray-300 text-xs sm:text-sm leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};