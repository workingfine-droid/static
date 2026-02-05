import { motion } from "framer-motion";
import { Section } from "../shared/SharedComponents";

export default function AboutSection() {
  return (
    <Section id="about" className="pt-20 md:pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-2 uppercase tracking-widest">
          About Technotouch Solutions
        </h3>
        <p className="text-[#e0e0ff]/70 mb-8 text-lg">
          ISO 9001:2008 Certified IT Solutions Company
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg"
          >
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-4 uppercase tracking-wide">
              Who We Are
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed mb-4">
              Technotouch Solutions Pvt. Ltd. is an ISO 9001:2008 certified IT
              solutions company established in 2014, specializing in form
              processing and automated data capture.
            </p>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed mb-4">
              We are registered under the Companies Act, 1956, Government of
              India as a privately held limited liability firm.
            </p>
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-4 mt-6 uppercase tracking-wide">
              What We Do
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed mb-3">
              We deliver complete data management solutions including:
            </p>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-sm space-y-1">
              <li>OMR / ICR / OCR systems</li>
              <li>Document imaging and archiving</li>
              <li>Examination automation platforms</li>
              <li>Custom software development</li>
              <li>24/7 technical support services</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg"
          >
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-4 uppercase tracking-wide">
              Industries Served
            </h4>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-sm space-y-1 mb-6">
              <li>Education & Universities</li>
              <li>Government Organizations</li>
              <li>Enterprises & Corporations</li>
              <li>Recruitment Agencies</li>
              <li>Survey & Research Organizations</li>
            </ul>
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-4 mt-6 uppercase tracking-wide">
              Why We Exist
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed">
              To eliminate manual work, improve accuracy, and enable
              organizations to scale efficiently through intelligent automation
              and cutting-edge technology solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg col-span-1 md:col-span-2"
          >
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-4 uppercase tracking-wide">
              Our Expertise & Capabilities
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm leading-relaxed mb-4">
              With over a decade of experience in form processing and automated
              data capture, we represent the cutting edge of document imaging
              technology. We have in-house facilities to develop custom
              applications and provide complete solutions including software,
              backlog conversion, hardware integration, training, and technical
              support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h5 className="font-orbitron text-sm text-[#00f2ff] mb-2 uppercase tracking-wide">
                  Core Competencies
                </h5>
                <ul className="list-disc list-inside text-[#e0e0ff]/90 text-sm space-y-1">
                  <li>Automated OMR/ICR/OCR processing</li>
                  <li>Custom software development</li>
                  <li>Examination systems & consultancy</li>
                  <li>Document imaging & archiving</li>
                  <li>Security printing & packaging</li>
                  <li>Technical support & IT services</li>
                </ul>
              </div>
              <div>
                <h5 className="font-orbitron text-sm text-[#00f2ff] mb-2 uppercase tracking-wide">
                  Infrastructure
                </h5>
                <ul className="list-disc list-inside text-[#e0e0ff]/90 text-sm space-y-1">
                  <li>Process 1 lakh+ forms per day</li>
                  <li>State-of-the-art scanning equipment</li>
                  <li>In-house development teams</li>
                  <li>Secure data processing facilities</li>
                  <li>24/7 technical support center</li>
                  <li>Cloud infrastructure capabilities</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
