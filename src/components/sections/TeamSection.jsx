import { Section } from "../shared/SharedComponents";
import Journey from "../CyberExperience/Journey";
import ISOStats from "../CyberExperience/ISOStats";

export default function TeamSection() {
  return (
    <Section id="team" className="justify-end pt-20 md:pt-32">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          <div>
            <h4 className="font-orbitron text-lg md:text-xl text-[#00f2ff] mb-3 md:mb-4 uppercase tracking-widest">
              Our Mission
            </h4>
            <p className="text-[#e0e0ff]/80 mb-4 text-sm md:text-base leading-relaxed">
              To be the best in the field of form processing and automated data
              capture solutions — be it paper forms or electronic forms — and to
              be the first choice for all form processing outsourcing. To
              constantly invest in technology and create value propositions to a
              wide spectrum of businesses for their data capture needs.
            </p>
          </div>
          <div>
            <h4 className="font-orbitron text-lg md:text-xl text-[#00f2ff] mb-3 md:mb-4 uppercase tracking-widest">
              Join Our Team
            </h4>
            <p className="text-[#e0e0ff]/80 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
              We're always looking for talented individuals to join our growing
              team. If you're passionate about technology and want to work on
              challenging projects, we'd love to hear from you.
            </p>
            <a
              href="mailto:contact@technotouch.in"
              className="inline-block px-6 md:px-8 py-2 md:py-3 bg-[#00f2ff] text-black font-orbitron text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded"
            >
              Apply Now
            </a>
          </div>
        </div>
        {/* Our Journey Timeline */}
        {/* <Journey /> */}
        {/* Achievements & Stats */}
        <ISOStats />
      </div>
    </Section>
  );
}
