import { motion } from "framer-motion";
import { Section } from "../shared/SharedComponents";
import { FaSearch, FaCode, FaClipboardCheck, FaHeadset } from "react-icons/fa";

export default function SolutionsSection() {
  return (
    <Section id="solutions">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-8 uppercase tracking-widest">
          Our Core Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg hover:border-[#00f2ff]/50 transition-all group"
          >
            <FaHeadset className="text-[#00f2ff] mb-4" size={36} />
            <h4 className="font-orbitron text-xl text-white mb-3 uppercase tracking-wide">
              Complete IT Solution
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed font-century-gothic">
              Comprehensive IT infrastructure services covering campus
              networking, IP surveillance, system integration, and secure
              digital environments for organizations of all sizes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg hover:border-[#00f2ff]/50 transition-all group"
          >
            <FaSearch className="text-[#00f2ff] mb-4" size={36} />
            <h4 className="font-orbitron text-xl text-white mb-3 uppercase tracking-wide">
              Data Capture & Processing Systems
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed font-century-gothic">
              Automated OMR, ICR, OCR and intelligent data workflows for
              high-volume, high-accuracy data processing.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg hover:border-[#00f2ff]/50 transition-all group"
          >
            <FaCode className="text-[#00f2ff] mb-4" size={36} />
            <h4 className="font-orbitron text-xl text-white mb-3 uppercase tracking-wide">
              Custom Software Development
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed font-century-gothic">
              End-to-end development of web and enterprise applications tailored
              to your business needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg hover:border-[#00f2ff]/50 transition-all group"
          >
            <FaClipboardCheck className="text-[#00f2ff] mb-4" size={36} />
            <h4 className="font-orbitron text-xl text-white mb-3 uppercase tracking-wide">
              ICR/OMR Examination Platforms
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed font-century-gothic">
              Complete examination processing solutions from form design to
              result generation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg hover:border-[#00f2ff]/50 transition-all group"
          >
            <FaHeadset className="text-[#00f2ff] mb-4" size={36} />
            <h4 className="font-orbitron text-xl text-white mb-3 uppercase tracking-wide">
              Technical Support & Managed Services
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed font-century-gothic">
              24/7 hardware, network, and software support for uninterrupted
              business operations.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
