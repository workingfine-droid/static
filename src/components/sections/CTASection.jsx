import { Section } from "../shared/SharedComponents";

export default function CTASection() {
  return (
    <Section id="cta">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h3 className="font-orbitron text-3xl md:text-5xl text-white mb-4 uppercase tracking-tight">
          Ready to Start Your Project?
        </h3>
        <p className="text-white text-lg mb-8 font-orbitron">
          Let's discuss how Technotouch can help you automate, scale, and
          optimize your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-10 py-4 bg-[#00f2ff] text-black font-orbitron text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-[#00f2ff]/20"
          >
            Start a Project
          </a>
          <a
            href="#case-studies"
            className="px-10 py-4 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-sm uppercase tracking-widest hover:bg-[#00f2ff]/10 transition-all"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </Section>
  );
}
