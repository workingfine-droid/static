import { Section, GlassCard } from "../shared/SharedComponents";

export default function HomeSection() {
  return (
    <Section id="home" className="py-4 sm:py-6 md:py-10 lg:py-14">
      <GlassCard
        tag="ISO 9001:2008 CERTIFIED"
        title={<span className="font-orbitron">Innovative IT Solutions</span>}
        subtitle={
          <span className="font-orbitron">
            for Data Processing, Examination Automation & Custom Software
          </span>
        }
      >
        <p className="text-base sm:text-lg md:text-xl mb-4 text-center md:text-left font-century-gothic">
          Technotouch Solutions Pvt. Ltd. helps organizations transform manual
          processes into accurate, scalable, and secure digital systems using
          cutting-edge technology.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-[#00f2ff] text-black font-orbitron text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 transition-all w-full sm:w-auto text-center"
          >
            Book a Free Consultation
          </a>
          <a
            href="#case-studies"
            className="px-6 sm:px-8 py-3 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-xs sm:text-sm uppercase tracking-widest hover:bg-[#00f2ff]/10 transition-all w-full sm:w-auto text-center"
          >
            View Our Portfolio
          </a>
        </div>
      </GlassCard>
    </Section>
  );
}
