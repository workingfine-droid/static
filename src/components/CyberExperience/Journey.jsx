import { motion } from "framer-motion";

export default function Journey() {
  const milestones = [
    {
      icon: "🚀",
      year: "2014",
      title: "Company Founded",
      desc: "Technotouch Solutions Private Limited, started in the year 2014",
    },
    {
      icon: "👨💼",
      year: "2020",
      title: "Leadership Expansion",
      desc: "Appointed Mr. Bhuwaneshwar Chaudhary as Our CEO",
    },
    {
      icon: "🏆",
      year: "2023",
      title: "Major Milestone",
      desc: "We have now more than 10 well known universities as our client",
    },
  ];

  return (
    <div className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="font-orbitron text-2xl md:text-3xl text-[#00f2ff] mb-2 uppercase tracking-widest"
      >
        Our Journey
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[#e0e0ff]/70 mb-12"
      >
        Navigating through innovation and growth
      </motion.p>
      
      {/* Timeline Container */}
      <div className="relative">
        {/* Animated Path Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00f2ff]/20 via-[#00f2ff] to-[#00f2ff]/20 origin-left hidden md:block"
        />
        
        {/* Journey Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + (i * 0.3),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative flex-1 max-w-xs group"
            >
              {/* Milestone Node */}
              <div className="relative z-10 bg-[#10131a] border-2 border-[#00f2ff]/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:border-[#00f2ff] transition-all duration-300 overflow-hidden">
                <motion.div 
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="text-xl flex items-center justify-center w-full h-full"
                >
                  {milestone.icon}
                </motion.div>
                
                {/* Pulsing Ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7
                  }}
                  className="absolute inset-0 border-2 border-[#00f2ff]/50 rounded-full"
                />
              </div>
              
              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 + (i * 0.3) }}
                className="bg-[#10131a]/80 border border-[#00f2ff]/20 rounded-lg p-6 text-center group-hover:border-[#00f2ff]/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="font-orbitron text-2xl text-[#00f2ff] mb-2 font-bold">
                  {milestone.year}
                </div>
                <div className="text-sm font-orbitron text-white mb-3 uppercase tracking-wider">
                  {milestone.title}
                </div>
                <div className="text-xs text-[#e0e0ff]/70 leading-relaxed">
                  {milestone.desc}
                </div>
              </motion.div>
              
              {/* Moving Dot on Path */}
              {i < milestones.length - 1 && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [0, 100, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut"
                  }}
                  className="absolute top-16 right-0 w-2 h-2 bg-[#00f2ff] rounded-full hidden md:block"
                />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Future Indicator */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 text-center"
        >
          <motion.div
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            className="inline-flex items-center gap-2 text-[#00f2ff]/60 font-orbitron text-xs uppercase tracking-widest"
          >
            <span>Journey Continues</span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}