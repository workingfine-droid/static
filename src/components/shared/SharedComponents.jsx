import { motion } from "framer-motion";

export const Section = ({ children, className = "", id }) => (
  <section
    id={id}
    className={`min-h-screen flex items-center px-[10%] pointer-events-none ${className}`}
    style={{ scrollMarginTop: "100px" }}
  >
    <div className="pointer-events-auto w-full max-w-[1200px] mx-auto">
      {children}
    </div>
  </section>
);

export const GlassCard = ({
  title,
  subtitle,
  tag,
  children,
  delay = 0,
  align = "left",
}) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? -50 : 50, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: false }}
    className={`bg-white/5 backdrop-blur-2xl border border-[#00f2ff]/20 p-8 md:p-12 rounded-lg max-w-[550px] 
      ${align === "right" ? "ml-auto" : ""} 
      hover:border-[#00f2ff]/50 transition-all duration-500 group shadow-2xl`}
  >
    {tag && (
      <div className="text-[0.65rem] text-[#00f2ff] border border-[#00f2ff]/50 px-3 py-1 rounded-full inline-block mb-6 tracking-[0.2em] font-orbitron bg-[#00f2ff]/5">
        {tag}
      </div>
    )}
    <h2 className="font-orbitron text-4xl md:text-5xl uppercase tracking-tighter mb-4 bg-gradient-to-r from-white via-white to-[#00f2ff]/50 bg-clip-text text-transparent leading-none">
      {title}
      {subtitle && (
        <span className="block text-[#00f2ff] mt-2 text-2xl md:text-3xl opacity-80">
          {subtitle}
        </span>
      )}
    </h2>
    <div className="h-[2px] w-12 bg-gradient-to-r from-[#00f2ff] to-transparent mb-8 group-hover:w-24 transition-all duration-500" />
    <div className="text-[#e0e0ff]/70 leading-relaxed font-orbitron text-sm md:text-base space-y-4">
      {children}
    </div>
  </motion.div>
);
