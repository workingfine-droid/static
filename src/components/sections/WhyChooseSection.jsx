import { motion } from "framer-motion";
import { Section } from "../shared/SharedComponents";

export default function WhyChooseSection() {
  return (
    <Section id="why-choose">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-8 uppercase tracking-widest">
          Why Organizations Trust Technotouch
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              text: "Established in 2014 with over 10+ years of industry experience",
            },
            {
              text: "ISO 9001:2008 certified processes and quality standards",
            },
            {
              text: "Proven expertise in education, universities, government and enterprises",
            },
            {
              text: "In-house teams for software, data processing and technical support",
            },
            { text: "Infrastructure to process 1 lakh+ forms per day" },
            { text: "Complete end-to-end project execution capabilities" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 flex items-start gap-4 hover:border-[#00f2ff]/40 transition-colors"
            >
              <div className="text-[#00f2ff] text-xl mt-1">✓</div>
              <p className="text-[#e0e0ff]/90 text-sm leading-relaxed font-orbitron">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
