import { motion } from "framer-motion";
import { Section } from "../shared/SharedComponents";
import styles from "./ClientsSection.module.css";

export default function ClientsSection() {
  return (
    <Section id="clients">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-2 uppercase tracking-widest text-center"
        >
          Trusted by Leading Institutions
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#e0e0ff]/70 mb-12 text-lg font-orbitron text-center"
        >
          Organizations across education, government, and enterprise sectors
          rely on our solutions
        </motion.p>

        {/* Floating Carousel with Controls */}
        <div
          className={`relative overflow-x-auto py-6 sm:py-8 select-none ${styles["hide-scrollbar"]}`}
        >
          {/* Navigation Arrows: Hide on mobile */}
          <button
            onClick={() => {
              const carousel = document.getElementById("client-carousel");
              if (carousel) {
                carousel.style.animationPlayState = "paused";
                carousel.scrollBy({ left: -300, behavior: "smooth" });
                setTimeout(() => {
                  carousel.style.animationPlayState = "running";
                }, 1000);
              }
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#00f2ff]/20 border border-[#00f2ff]/50 rounded-full items-center justify-center hover:bg-[#00f2ff]/30 transition-all duration-300 group hidden sm:flex"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 text-[#00f2ff] group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              const carousel = document.getElementById("client-carousel");
              if (carousel) {
                carousel.style.animationPlayState = "paused";
                carousel.scrollBy({ left: 300, behavior: "smooth" });
                setTimeout(() => {
                  carousel.style.animationPlayState = "running";
                }, 1000);
              }
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#00f2ff]/20 border border-[#00f2ff]/50 rounded-full items-center justify-center hover:bg-[#00f2ff]/30 transition-all duration-300 group hidden sm:flex"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 text-[#00f2ff] group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <motion.div
            id="client-carousel"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`flex items-center gap-3 sm:gap-6 md:gap-8 whitespace-nowrap overflow-x-auto touch-pan-x ${styles["hide-scrollbar"]}`}
            style={{
              width: "200%",
            }}
          >
            {[
              // Clients with logos
              {
                src: "/clientLogo/mmmut_logo.webp",
                name: "Mahamaya Technical University",
                location: "Noida, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/deen_dayal_gorakhpur.webp",
                name: "Deen Dayal Upadhyaya Gorakhpur University",
                location: "Gorakhpur, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/mg_gorakhnath_ayush.webp",
                name: "Mahayogi Guru Gorakhnath Ayush University",
                location: "Gorakhpur, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/niftem_kundli.webp",
                name: "NIFTEM",
                location: "New Delhi",
                hasLogo: true,
              },
              {
                src: "/clientLogo/hnbumu_logo.webp",
                name: "HNB Uttarakhand Medical University",
                location: "Dehradun, Uttarakhand",
                hasLogo: true,
              },
              {
                src: "/clientLogo/himalayan_university_logo.webp",
                name: "Himalayan University",
                location: "Uttarakhand",
                hasLogo: true,
              },
              {
                src: "/clientLogo/uttarakhand_ayurved_university.webp",
                name: "Uttarakhand Ayurved University",
                location: "Dehradun, Uttarakhand",
                hasLogo: true,
              },
              {
                src: "/clientLogo/up_govt_logo.webp",
                name: "UP Government",
                location: "Uttar Pradesh",
                hasLogo: true,
              },
              {
                src: "/clientLogo/rmpsu_logo.webp",
                name: "RMPSU",
                location: "Uttar Pradesh",
                hasLogo: true,
              },
              // Clients without logos (name only)
              {
                src: "/clientLogo/mgkvp_logo.webp",
                name: "Mahatma Gandhi Kashi Vidyapith",
                location: "Varanasi, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/aktu_logo.webp",
                name: "Dr. APJ Abdul Kalam Technical University",
                location: "Lucknow, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/csjmu_kanpur.webp",
                name: "Chhatrapati Shahu Ji Maharaj University",
                location: "Kanpur, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/Final-Logo-300x300.webp",
                name: "Bhimrao Ambedkar University",
                location: "Agra, UP",
                hasLogo: true,
              },
              {
                name: "Sri Dev Suman Uttarakhand Vishwavidhyalay",
                location: "Chamba, Uttarakhand",
                hasLogo: false,
              },
              {
                src: "/clientLogo/dr_shakuntala_misra_university.webp",
                name: "Dr. Shakuntala Mishra National Rehabilitation University",
                location: "Lucknow, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/nehru_group_logo.webp",
                name: "Kamla Nehru Institute of Technology (KNIT)",
                location: "Sultanpur, UP",
                hasLogo: true,
              },
              {
                src: "/clientLogo/orange_logo.webp",
                name: "Tilka Majhi Bhagalpur University",
                location: "Bhagalpur, Bihar",
                hasLogo: true,
              },
              {
                src: "/clientLogo/ram_manohar_lohia_ayush.webp",
                name: "Dr. Ram Manohar Lohia Institute of Medical Sciences",
                location: "Lucknow, UP",
                hasLogo: true,
              },
            ]
              .concat([
                // Duplicate for seamless loop
                {
                  src: "/clientLogo/mmmut_logo.webp",
                  name: "Mahamaya Technical University",
                  location: "Noida, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/deen_dayal_gorakhpur.webp",
                  name: "Deen Dayal Upadhyaya Gorakhpur University",
                  location: "Gorakhpur, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/mg_gorakhnath_ayush.webp",
                  name: "Mahayogi Guru Gorakhnath Ayush University",
                  location: "Gorakhpur, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/niftem_kundli.webp",
                  name: "NIFTEM",
                  location: "New Delhi",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/hnbumu_logo.webp",
                  name: "HNB Uttarakhand Medical University",
                  location: "Dehradun, Uttarakhand",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/himalayan_university_logo.webp",
                  name: "Himalayan University",
                  location: "Uttarakhand",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/uttarakhand_ayurved_university.webp",
                  name: "Uttarakhand Ayurved University",
                  location: "Dehradun, Uttarakhand",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/up_govt_logo.webp",
                  name: "UP Government",
                  location: "Uttar Pradesh",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/rmpsu_logo.webp",
                  name: "RMPSU",
                  location: "Uttar Pradesh",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/mgkashi_vidyapith.webp",
                  name: "Mahatma Gandhi Kashi Vidyapith",
                  location: "Varanasi, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/aktu_logo.webp",
                  name: "Dr. APJ Abdul Kalam Technical University",
                  location: "Lucknow, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/csjmu_kanpur.webp",
                  name: "Chhatrapati Shahu Ji Maharaj University",
                  location: "Kanpur, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/Final-Logo-300x300.webp",
                  name: "Bhimrao Ambedkar University",
                  location: "Agra, UP",
                  hasLogo: true,
                },
                {
                  name: "Sri Dev Suman Uttarakhand Vishwavidhyalay",
                  location: "Chamba, Uttarakhand",
                  hasLogo: false,
                },
                {
                  src: "/clientLogo/dr_shakuntala_misra_university.webp",
                  name: "Dr. Shakuntala Mishra National Rehabilitation University",
                  location: "Lucknow, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/nehru_group_logo.webp",
                  name: "Kamla Nehru Institute of Technology (KNIT)",
                  location: "Sultanpur, UP",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/orange_logo.webp",
                  name: "Tilka Majhi Bhagalpur University",
                  location: "Bhagalpur, Bihar",
                  hasLogo: true,
                },
                {
                  src: "/clientLogo/ram_manohar_lohia_ayush.webp",
                  name: "Dr. Ram Manohar Lohia Institute of Medical Sciences",
                  location: "Lucknow, UP",
                  hasLogo: true,
                },
              ])
              .map((client, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-[#10131a]/90 border border-[#00f2ff]/30 rounded-xl p-2 sm:p-3 md:p-5 shadow-2xl hover:border-[#00f2ff]/70 transition-all duration-500 group backdrop-blur-sm min-w-[120px] sm:min-w-[160px] md:min-w-[200px] max-w-[80vw] flex-shrink-0 overflow-hidden"
                >
                  {client.hasLogo ? (
                    /* Logo Card */
                    <>
                      <div className="flex justify-center mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center p-1 md:p-2 shadow-lg">
                          <img
                            src={client.src}
                            alt={client.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-orbitron text-white text-[0.7rem] sm:text-xs md:text-sm mb-0.5 sm:mb-1 md:mb-2 group-hover:text-[#00f2ff] transition-colors duration-300 leading-tight uppercase">
                          {client.name}
                        </h4>
                        <p className="text-[#e0e0ff]/70 text-[0.55rem] sm:text-[0.65rem] md:text-xs font-orbitron uppercase">
                          {client.location}
                        </p>
                      </div>
                    </>
                  ) : (
                    /* Name Only Card */
                    <>
                      <div className="flex justify-center mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-[#00f2ff]/10 border-2 border-[#00f2ff]/30 rounded-lg flex items-center justify-center">
                          <div className="text-[#00f2ff] text-base sm:text-lg md:text-2xl font-orbitron font-bold">
                            {client.name.charAt(0)}
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-orbitron text-white text-[0.7rem] sm:text-xs md:text-sm mb-0.5 sm:mb-1 md:mb-2 group-hover:text-[#00f2ff] transition-colors duration-300 leading-tight uppercase">
                          {client.name}
                        </h4>
                        <p className="text-[#e0e0ff]/70 text-[0.55rem] sm:text-[0.65rem] md:text-xs font-orbitron uppercase">
                          {client.location}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
        >
          {[
            { number: "20+", label: "Universities" },
            { number: "5+", label: "Government Bodies" },
            { number: "15+", label: "Private Institutions" },
            { number: "10+", label: "Years Partnership" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl text-[#00f2ff] mb-1">
                {stat.number}
              </div>
              <div className="text-[#e0e0ff]/70 text-xs uppercase tracking-wider font-orbitron">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
