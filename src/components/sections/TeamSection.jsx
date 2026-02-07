import { Section } from "../shared/SharedComponents";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <Section id="team" className="justify-end pt-20 md:pt-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Mission & Careers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 md:p-8"
          >
            <h3 className="font-orbitron text-2xl md:text-3xl text-[#00f2ff] mb-4 uppercase tracking-widest">
              Our Mission
            </h3>
            <p className="font-century-gothic text-[#e0e0ff]/80 text-sm md:text-base leading-relaxed">
              To be the best in the field of form processing and automated data
              capture solutions — be it paper forms or electronic forms — and to
              be the first choice for all form processing outsourcing. To
              constantly invest in technology and create value propositions to a
              wide spectrum of businesses for their data capture needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 md:p-8"
          >
            <h3 className="font-orbitron text-2xl md:text-3xl text-[#00f2ff] mb-4 uppercase tracking-widest">
              Join Our Team
            </h3>
            <p className="font-century-gothic text-[#e0e0ff]/80 mb-6 text-sm md:text-base leading-relaxed">
              We're always looking for talented individuals to join our growing
              team. If you're passionate about technology and want to work on
              challenging projects, we'd love to hear from you.
            </p>
            <a
              href="mailto:hr@technotouch.in"
              className="inline-block px-8 py-3 bg-[#00f2ff] text-black font-orbitron text-xs uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Apply Now
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "360+", label: "Projects Completed" },
            { value: "20+", label: "University Clients" },
            { value: "300+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 text-center hover:border-[#00f2ff]/50 transition-all"
            >
              <div className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-2">
                {stat.value}
              </div>
              <div className="font-century-gothic text-xs md:text-sm text-[#e0e0ff]/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications & Empanelment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 md:p-8 mb-16"
        >
          <h3 className="font-orbitron text-2xl md:text-3xl text-[#00f2ff] mb-6 uppercase tracking-widest text-center">
            Certifications & Standards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "ISO 9001:2015", desc: "Quality Management System" },
              {
                title: "ISO 27001:2018",
                desc: "Information Security Management",
              },
              { title: "CMMI Level 5", desc: "Process Maturity Certification" },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-[#020205]/50 border border-[#00f2ff]/10 rounded-lg p-4 text-center"
              >
                <div className="font-orbitron text-lg text-[#00f2ff] mb-2">
                  {cert.title}
                </div>
                <div className="font-century-gothic text-xs text-[#e0e0ff]/70">
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Quality Management",
              "Process Excellence",
              "Customer Satisfaction",
              "Data Security",
              "Global Standards",
            ].map((pillar, index) => (
              <span
                key={index}
                className="font-orbitron text-xs text-[#00f2ff] bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded px-4 py-2"
              >
                ✓ {pillar}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Government Empanelment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 md:p-8 mb-10"
        >
          <h3 className="font-orbitron text-2xl md:text-3xl text-[#00f2ff] mb-6 uppercase tracking-widest text-center">
            Government Empanelment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#020205]/50 border border-[#00f2ff]/10 rounded-lg p-6">
              <div className="font-orbitron text-base md:text-lg text-[#00f2ff] mb-2">
                U.P. Electronics Corporation (UPLC)
              </div>
              <div className="font-century-gothic text-xs text-[#e0e0ff]/70">
                State Government Empanelment
              </div>
            </div>
            <div className="bg-[#020205]/50 border border-[#00f2ff]/10 rounded-lg p-6">
              <div className="font-orbitron text-base md:text-lg text-[#00f2ff] mb-2">
                Uttar Pradesh Development Systems Corporation (UPDESCO)
              </div>
              <div className="font-century-gothic text-xs text-[#e0e0ff]/70">
                State Government Empanelment
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
