export default function ISOStats() {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <span className="text-2xl">✅</span>
        <span className="font-orbitron text-lg text-[#00f2ff]">
          ISO 9001:2008 Certified
        </span>
        <span className="text-xs text-[#e0e0ff]/70">
          Our commitment to quality and excellence is validated by our ISO
          9001:2008 certification, ensuring the highest standards in all our
          services and solutions.
        </span>
      </div>
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <span className="text-[#00f2ff] font-orbitron text-xs bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded px-3 py-1">
          ✓ Quality Management
        </span>
        <span className="text-[#00f2ff] font-orbitron text-xs bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded px-3 py-1">
          ✓ Process Excellence
        </span>
        <span className="text-[#00f2ff] font-orbitron text-xs bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded px-3 py-1">
          ✓ Customer Satisfaction
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <div className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg px-6 py-6 flex flex-col items-center">
          <div className="font-orbitron text-2xl text-[#00f2ff] mb-1">10+</div>
          <div className="text-xs text-[#e0e0ff]/70 uppercase tracking-widest text-center">
            Years Experience
          </div>
        </div>
        <div className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg px-6 py-6 flex flex-col items-center">
          <div className="font-orbitron text-2xl text-[#00f2ff] mb-1">360+</div>
          <div className="text-xs text-[#e0e0ff]/70 uppercase tracking-widest text-center">
            Projects Completed
          </div>
        </div>
        <div className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg px-6 py-6 flex flex-col items-center">
          <div className="font-orbitron text-2xl text-[#00f2ff] mb-1">20+</div>
          <div className="text-xs text-[#e0e0ff]/70 uppercase tracking-widest text-center">
            University Clients
          </div>
        </div>
        <div className="bg-[#10131a]/70 border border-[#00f2ff]/20 rounded-lg px-6 py-6 flex flex-col items-center">
          <div className="font-orbitron text-2xl text-[#00f2ff] mb-1">300+</div>
          <div className="text-xs text-[#e0e0ff]/70 uppercase tracking-widest text-center">
            Team Members
          </div>
        </div>
      </div>
    </div>
  );
}
