import { Section } from "../shared/SharedComponents";

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h3 className="font-orbitron text-3xl md:text-4xl text-[#00f2ff] mb-4 uppercase tracking-widest">
            Start Your Project
          </h3>
          <p className="text-[#e0e0ff]/80 text-lg mb-8">
            Get in touch with us to discuss your requirements
          </p>
        </div>
        <div className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg p-8 md:p-12 shadow-xl">
          <div className="flex justify-center mb-8">
            <div className="w-full flex flex-col items-center justify-center text-center">
              <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide">
                Contact Information
              </h4>
              <div className="space-y-4 text-[#e0e0ff]/90 text-sm max-w-md w-full">
                <div>
                  <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+918090808050"
                    className="hover:text-[#00f2ff] transition-colors break-all"
                  >
                    +91 8090-808-050
                  </a>
                </div>
                <div>
                  <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:contact@technotouch.in"
                    className="hover:text-[#00f2ff] transition-colors break-all"
                  >
                    contact@technotouch.in
                  </a>
                </div>
                <div>
                  <div className="text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-1">
                    Office Address
                  </div>
                  <p className="leading-relaxed">
                    Technotouch Solutions Pvt. Ltd.
                    <br />
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            {/* Removed contact form and message section as per requirements */}
          </div>

          <div className="border-t border-[#00f2ff]/20 pt-6">
            <h4 className="font-orbitron text-lg text-[#00f2ff] mb-4 uppercase tracking-wide text-center">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/918090808050"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-xs uppercase tracking-widest hover:bg-[#00f2ff]/10 transition-all rounded"
              >
                WhatsApp
              </a>
              <a
                href="#solutions"
                className="px-6 py-2 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-xs uppercase tracking-widest hover:bg-[#00f2ff]/10 transition-all rounded"
              >
                Our Solutions
              </a>
              <a
                href="#case-studies"
                className="px-6 py-2 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-xs uppercase tracking-widest hover:bg-[#00f2ff]/10 transition-all rounded"
              >
                Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
