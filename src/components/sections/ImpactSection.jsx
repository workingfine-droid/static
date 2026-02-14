import { motion } from "framer-motion";
import { Section } from "../shared/SharedComponents";

export default function ImpactSection() {
  return (
    <Section id="impact">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 flex flex-col items-center justify-center shadow-lg hover:border-[#00f2ff]/50 transition-all"
            >
              <div className="font-orbitron text-4xl md:text-5xl text-[#00f2ff] mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-[#e0e0ff]/70 uppercase tracking-widest text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
