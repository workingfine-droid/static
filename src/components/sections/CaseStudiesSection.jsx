import { motion } from "framer-motion";
import { Section } from "../shared/SharedComponents";

export default function CaseStudiesSection() {
  return (
    <Section id="case-studies">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-2 uppercase tracking-widest">
          Case Studies
        </h3>
        <p className="text-[#e0e0ff]/70 mb-8 text-lg">
          Real-world implementations and measurable results
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg"
          >
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-3 uppercase tracking-wide">
              University Examination Automation
            </h4>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Client
              </div>
              <p className="text-[#e0e0ff]/90 text-sm">
                State University with 50,000+ students
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Problem
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Manual exam processing taking 45+ days with high error rates
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Solution
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Implemented complete OMR/ICR examination system with automated
                evaluation
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Technology
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                OMR/ICR processing, custom evaluation software, cloud storage
              </p>
            </div>
            <div className="border-t border-[#00f2ff]/20 pt-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                Results
              </div>
              <ul className="text-[#e0e0ff]/90 text-sm space-y-1">
                <li>✓ Processing time reduced from 45 days to 7 days</li>
                <li>✓ 99.8% accuracy achieved</li>
                <li>✓ 60% cost reduction in evaluation</li>
                <li>✓ Real-time result tracking enabled</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg"
          >
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-3 uppercase tracking-wide">
              Custom ERP System
            </h4>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Client
              </div>
              <p className="text-[#e0e0ff]/90 text-sm">
                Educational Institute with multiple campuses
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Problem
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Fragmented systems across departments, data inconsistency
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Solution
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Developed unified college management system integrating
                admissions, academics, finance, and HR
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Technology
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                React, Node.js, MongoDB, AWS
              </p>
            </div>
            <div className="border-t border-[#00f2ff]/20 pt-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                Results
              </div>
              <ul className="text-[#e0e0ff]/90 text-sm space-y-1">
                <li>✓ All departments unified on single platform</li>
                <li>✓ 75% reduction in administrative time</li>
                <li>✓ Real-time data access across campuses</li>
                <li>✓ Improved decision-making capabilities</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg"
          >
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-3 uppercase tracking-wide">
              Document Digitization Project
            </h4>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Client
              </div>
              <p className="text-[#e0e0ff]/90 text-sm">Government Agency</p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Problem
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                10+ years of paper records consuming massive storage space
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Solution
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                High-speed scanning, ICR extraction, and digital archiving with
                searchable database
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Technology
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Industrial scanners, ICR/OCR software, cloud storage
              </p>
            </div>
            <div className="border-t border-[#00f2ff]/20 pt-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                Results
              </div>
              <ul className="text-[#e0e0ff]/90 text-sm space-y-1">
                <li>✓ 2 million+ documents digitized</li>
                <li>✓ 90% reduction in physical storage</li>
                <li>✓ Document retrieval time: 5 minutes vs 2 hours</li>
                <li>✓ Secure, searchable digital archive created</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 shadow-lg"
          >
            <h4 className="font-orbitron text-xl text-[#00f2ff] mb-3 uppercase tracking-wide">
              24/7 IT Infrastructure Support
            </h4>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Client
              </div>
              <p className="text-[#e0e0ff]/90 text-sm">
                Large Corporate with 500+ employees
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Problem
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Frequent downtime affecting business operations
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Solution
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Dedicated 24/7 technical support team with proactive monitoring
              </p>
            </div>
            <div className="mb-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                Technology
              </div>
              <p className="text-[#e0e0ff]/80 text-sm">
                Remote monitoring tools, ticketing system, on-site support
              </p>
            </div>
            <div className="border-t border-[#00f2ff]/20 pt-4">
              <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                Results
              </div>
              <ul className="text-[#e0e0ff]/90 text-sm space-y-1">
                <li>✓ 95% reduction in system downtime</li>
                <li>✓ Average response time: under 15 minutes</li>
                <li>✓ Proactive issue detection preventing failures</li>
                <li>✓ Improved employee productivity</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
