import { motion } from "framer-motion";
import { Section } from "../shared/SharedComponents";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaDocker,
  FaMicrosoft,
  FaDatabase,
  FaSearch,
  FaCode,
  FaClipboardCheck,
  FaHeadset,
  FaImage,
  FaUniversity,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiSpring,
  SiDotnet,
  SiDjango,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiOracle,
  SiJavascript,
  SiKubernetes,
} from "react-icons/si";

export default function ServicesSection() {
  return (
    <Section id="services">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-2 uppercase tracking-widest">
          Our Services
        </h3>
        <p className="text-[#00f2ff] mb-8 text-lg font-orbitron">
          Complete solutions tailored to your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Service 1: Custom Software */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg hover:border-[#00f2ff]/50 transition-all"
          >
            <SiJavascript className="text-[#00f2ff] mb-4" size={32} />
            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              Custom Software Development
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm mb-3">
              Fully customized software solutions covering the entire lifecycle.
            </p>
            <div className="mb-3">
              <div className="font-orbitron text-xs text-[#00f2ff] mb-2">
                Our Process
              </div>
              <p className="text-[#e0e0ff]/70 text-xs mb-2">
                Requirements Gathering → System Design → Development & Coding →
                Testing & Deployment
              </p>
            </div>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Benefits
            </h5>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>Tailored to your business</li>
              <li>Scalable architecture</li>
              <li>Secure applications</li>
              <li>Full documentation</li>
            </ul>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Tech Stack
            </h5>
            <p className="text-[#e0e0ff]/70 text-xs mb-3">
              React, Next.js, Angular, Node.js, Python, Java, MongoDB, AWS,
              Azure, Docker
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.65rem] uppercase tracking-widest hover:bg-[#00f2ff]/20 transition-all mt-2"
            >
              Start Your Project
            </a>
          </motion.div>
          {/* Service 2: Image Technology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg hover:border-[#00f2ff]/50 transition-all"
          >
            <FaImage className="text-[#00f2ff] mb-4" size={32} />
            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              Document Imaging & Image Technology
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm mb-3">
              High-speed document scanning, ICR extraction, and digital
              archiving solutions.
            </p>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Benefits
            </h5>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>Reduced physical storage</li>
              <li>Faster document retrieval</li>
              <li>Secure electronic records</li>
              <li>Lower operational cost</li>
            </ul>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Solutions
            </h5>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>Electronic filing systems</li>
              <li>Digital archiving</li>
              <li>ICR data extraction</li>
              <li>High-speed scanning</li>
            </ul>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.65rem] uppercase tracking-widest hover:bg-[#00f2ff]/20 transition-all mt-2"
            >
              Transform Documents
            </a>
          </motion.div>
          {/* Service 3: End to End Examination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg hover:border-[#00f2ff]/50 transition-all"
          >
            <FaUniversity className="text-[#00f2ff] mb-4" size={32} />

            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              Examination & Result Automation
            </h4>

            <p className="text-[#e0e0ff]/80 text-sm mb-3">
              End-to-end university examination automation platform covering
              exam forms, payments, admit cards, digital evaluation, and result
              processing.
            </p>

            <div className="mb-3">
              <div className="font-orbitron text-xs text-[#00f2ff] mb-2">
                Workflow
              </div>
              <p className="text-[#e0e0ff]/70 text-xs mb-2">
                Registration → Exam Forms → Payments → Admit Cards → Marks Entry
                → Evaluation → Results
              </p>
            </div>

            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Key Features
            </h5>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>Automated exam form & fee management</li>
              <li>Digital evaluation system</li>
              <li>Marks entry with validation</li>
              <li>Result processing & one-view portal</li>
              <li>Reporting dashboard</li>
            </ul>

            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.65rem] uppercase tracking-widest hover:bg-[#00f2ff]/20 transition-all mt-2"
            >
              Request Demo
            </a>
          </motion.div>
          {/* Service 4: Data Capture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg hover:border-[#00f2ff]/50 transition-all"
          >
            <FaDatabase className="text-[#00f2ff] mb-4" size={32} />
            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              Data Capture & Automation
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm mb-3">
              Replace manual data entry with intelligent workflows.
            </p>
            <div className="mb-3">
              <div className="font-orbitron text-xs text-[#00f2ff] mb-2">
                How It Works
              </div>
              <p className="text-[#e0e0ff]/70 text-xs mb-2">
                Data collection → Cleaning → Transformation → Analysis →
                Reporting
              </p>
            </div>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Benefits
            </h5>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>Faster processing with automation</li>
              <li>Higher accuracy (99%+)</li>
              <li>Secure handling and storage</li>
              <li>Real-time dashboards</li>
            </ul>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Use Cases
            </h5>
            <p className="text-[#e0e0ff]/70 text-xs mb-3">
              Surveys, examinations, registrations, recruitment forms,
              institutional records
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.65rem] uppercase tracking-widest hover:bg-[#00f2ff]/20 transition-all mt-2"
            >
              Request a Demo
            </a>
          </motion.div>
          {/* Service 5: Examination Systems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg hover:border-[#00f2ff]/50 transition-all"
          >
            <SiSpring className="text-[#00f2ff] mb-4" size={32} />
            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              ICR/OMR Examination Systems
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm mb-3">
              Complete end-to-end examination consultancy and processing.
            </p>
            <div className="mb-3">
              <div className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
                Capacity
              </div>
              <p className="text-[#e0e0ff]/70 text-xs mb-2">
                Process 1 lakh+ forms per day
              </p>
            </div>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Services Include
            </h5>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>OMR/ICR form design</li>
              <li>Question paper setting</li>
              <li>Printing & scanning</li>
              <li>Centre management</li>
              <li>Data extraction & evaluation</li>
              <li>Merit list generation</li>
              <li>Secure printing & delivery</li>
            </ul>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.65rem] uppercase tracking-widest hover:bg-[#00f2ff]/20 transition-all mt-2"
            >
              Streamline Your Process
            </a>
          </motion.div>
          {/* Service 6: Technical Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg hover:border-[#00f2ff]/50 transition-all"
          >
            <FaTools className="text-[#00f2ff] mb-4" size={32} />
            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              24/7 Technical Support
            </h4>
            <p className="text-[#e0e0ff]/80 text-sm mb-3">
              Comprehensive hardware, network, and software support services.
            </p>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Coverage
            </h5>
            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>Hardware support (servers, PCs, tablets, laptops)</li>
              <li>Network equipment support</li>
              <li>Software support</li>
              <li>Remote & on-site assistance</li>
            </ul>
            <h5 className="font-orbitron text-xs text-[#00f2ff] mb-1 uppercase">
              Process
            </h5>
            <p className="text-[#e0e0ff]/70 text-xs mb-3">
              Issue identification → Root cause analysis → Fix → Verification
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.65rem] uppercase tracking-widest hover:bg-[#00f2ff]/20 transition-all mt-2"
            >
              Get Expert Support
            </a>
          </motion.div>
          <motion.div className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg hover:border-[#00f2ff]/50 transition-all">
            <FaNetworkWired className="text-[#00f2ff] mb-4" size={32} />

            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              Smart Campus & Infrastructure Solutions
            </h4>

            <p className="text-[#e0e0ff]/80 text-sm mb-3">
              End-to-end infrastructure implementation for educational
              institutions and organizations.
            </p>

            <ul className="list-disc list-inside text-[#e0e0ff]/90 text-xs mb-3">
              <li>CCTV smart surveillance systems</li>
              <li>Campus Wi-Fi network design</li>
              <li>IP-PBX communication systems</li>
              <li>Public Address (PA) systems</li>
              <li>Smart classroom setup</li>
              <li>Biometric attendance integration</li>
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
            className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-6 shadow-lg col-span-1 md:col-span-2 lg:col-span-3"
          >
            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
              Technologies
            </h4>
            {/* Animated Tech Stack Carousels */}
            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <div className="font-orbitron text-xs text-[#00f2ff] mb-2">
                  Frontend
                </div>
                <div
                  className="overflow-x-auto hide-scrollbar w-full py-2"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <div
                    className="flex items-center gap-4 sm:gap-8 md:gap-10 animate-scroll-x-frontend"
                    style={{
                      animation: "scroll-x-frontend 28s linear infinite",
                    }}
                  >
                    {[
                      { name: "React.js", icon: <FaReact color="#61DBFB" /> },
                      { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
                      { name: "Angular", icon: <FaAngular color="#dd0031" /> },
                      {
                        name: "TypeScript",
                        icon: <SiTypescript color="#3178c6" />,
                      },
                      {
                        name: "JavaScript",
                        icon: <SiJavascript color="#f7df1e" />,
                      },
                      { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
                      { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-3 flex flex-col items-center justify-center shadow-lg"
                        style={{ minWidth: "90px", minHeight: "80px" }}
                      >
                        <div className="h-10 w-10 mb-2 flex items-center justify-center text-3xl">
                          {tech.icon}
                        </div>
                        <span className="text-xs font-orbitron text-[#e0e0ff]/80 text-center">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Backend */}
              <div>
                <div className="font-orbitron text-xs text-[#00f2ff] mb-2">
                  Backend
                </div>
                <div
                  className="overflow-x-auto hide-scrollbar w-full py-2"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <div
                    className="flex items-center gap-4 sm:gap-8 md:gap-10 animate-scroll-x-backend"
                    style={{
                      animation: "scroll-x-backend 32s linear infinite",
                    }}
                  >
                    {[
                      { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
                      { name: "Express", icon: <SiExpress color="#fff" /> },
                      { name: "Python", icon: <FaPython color="#3776ab" /> },
                      { name: "Java", icon: <FaJava color="#f89820" /> },
                      {
                        name: ".NET Framework",
                        icon: <SiDotnet color="#512bd4" />,
                      },
                      { name: "Spring", icon: <SiSpring color="#6db33f" /> },
                      { name: "Django", icon: <SiDjango color="#092e20" /> },
                      { name: "PHP", icon: <FaPhp color="#777bb4" /> },
                      {
                        name: "RESTful APIs",
                        icon: <FaDatabase color="#00f2ff" />,
                      },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-3 flex flex-col items-center justify-center shadow-lg"
                        style={{ minWidth: "90px", minHeight: "80px" }}
                      >
                        <div className="h-10 w-10 mb-2 flex items-center justify-center text-3xl">
                          {tech.icon}
                        </div>
                        <span className="text-xs font-orbitron text-[#e0e0ff]/80 text-center">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Database & Cloud */}
              <div>
                <div className="font-orbitron text-xs text-[#00f2ff] mb-2">
                  Database & Cloud
                </div>
                <div
                  className="overflow-x-auto hide-scrollbar w-full py-2"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <div
                    className="flex items-center gap-4 sm:gap-8 md:gap-10 animate-scroll-x-dbcloud"
                    style={{
                      animation: "scroll-x-dbcloud 36s linear infinite",
                    }}
                  >
                    {[
                      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
                      { name: "Azure", icon: <FaMicrosoft color="#0089d6" /> },
                      { name: "AWS", icon: <FaAws color="#ff9900" /> },
                      {
                        name: "Firebase",
                        icon: <SiFirebase color="#ffcb2b" />,
                      },
                      { name: "Docker", icon: <FaDocker color="#2496ed" /> },
                      {
                        name: "Kubernetes",
                        icon: <SiKubernetes color="#326ce5" />,
                      },
                      { name: "MS SQL", icon: <FaDatabase color="#cc2927" /> },
                      { name: "MySQL", icon: <SiMysql color="#00758f" /> },
                      { name: "Oracle", icon: <SiOracle color="#f80000" /> },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-3 flex flex-col items-center justify-center shadow-lg"
                        style={{ minWidth: "90px", minHeight: "80px" }}
                      >
                        <div className="h-10 w-10 mb-2 flex items-center justify-center text-3xl">
                          {tech.icon}
                        </div>
                        <span className="text-xs font-orbitron text-[#e0e0ff]/80 text-center">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
