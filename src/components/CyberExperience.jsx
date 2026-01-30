import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Section = ({ children, className = "" }) => (
  <section className={`min-h-screen flex items-center px-[10%] pointer-events-none ${className}`}>
    <div className="pointer-events-auto w-full max-w-[1200px] mx-auto">
      {children}
    </div>
  </section>
);

const GlassCard = ({ title, subtitle, tag, children, delay = 0, align = "left" }) => (
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
      {subtitle && <span className="block text-[#00f2ff] mt-2 text-2xl md:text-3xl opacity-80">{subtitle}</span>}
    </h2>
    <div className="h-[2px] w-12 bg-gradient-to-r from-[#00f2ff] to-transparent mb-8 group-hover:w-24 transition-all duration-500" />
    <div className="text-[#e0e0ff]/70 leading-relaxed font-light text-base md:text-lg space-y-4">
      {children}
    </div>
  </motion.div>
);

export default function CyberExperience() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 6;

    // --- Particles (Neural Net) ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 60;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00f2ff,
      size: 0.03,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // --- The Core (Hexagonal/Geometric Shield) ---
    const coreGroup = new THREE.Group();
    
    // Outer Shell - Geometric lines
    const outerGeo = new THREE.IcosahedronGeometry(2.5, 1);
    const edges = new THREE.EdgesGeometry(outerGeo);
    const lineMat = new THREE.LineBasicMaterial({ 
      color: 0x00f2ff, 
      transparent: true, 
      opacity: 0.4,
      linewidth: 2
    });
    const outerShield = new THREE.LineSegments(edges, lineMat);
    coreGroup.add(outerShield);

    // Middle Shell - More detailed
    const midGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const midEdges = new THREE.EdgesGeometry(midGeo);
    const midLineMat = new THREE.LineBasicMaterial({ 
      color: 0x7000ff, 
      transparent: true, 
      opacity: 0.2 
    });
    const midShield = new THREE.LineSegments(midEdges, midLineMat);
    coreGroup.add(midShield);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2ff,
      transparent: true,
      opacity: 0.05
    });
    const coreSphere = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(coreSphere);

    scene.add(coreGroup);

    // --- Lighting ---
    const pLight = new THREE.PointLight(0x00f2ff, 10, 20);
    pLight.position.set(2, 3, 4);
    scene.add(pLight);
    
    const pLight2 = new THREE.PointLight(0x7000ff, 8, 20);
    pLight2.position.set(-2, -3, 2);
    scene.add(pLight2);

    scene.add(new THREE.AmbientLight(0x101020));

    // --- Scroll Animations ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
      }
    });

    tl.to(camera.position, { z: 3, y: 0.5, ease: "none" })
      .to(coreGroup.rotation, { y: Math.PI * 2, x: Math.PI / 2, ease: "none" })
      .to(camera.position, { z: 12, y: -2, ease: "none" })
      .to(coreGroup.scale, { x: 3, y: 3, z: 3, ease: "none" })
      .to(particles.rotation, { y: -Math.PI, ease: "none" }, 0);

    // --- Interaction ---
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) - 0.5;
      mouse.y = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      const raf = requestAnimationFrame(animate);
      
      coreGroup.rotation.y += 0.002;
      coreGroup.rotation.z += 0.001;
      midShield.rotation.y -= 0.004;
      particles.rotation.y += 0.0002;

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#020205] text-[#e0e0ff] font-inter overflow-x-hidden selection:bg-[#00f2ff] selection:text-black">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none" />
      
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-[100] bg-gradient-to-b from-[#020205] to-transparent">
        <div className="font-orbitron font-bold text-2xl tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-[#00f2ff] rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#00f2ff]/50" />
          </div>
          AEGIS.SYS
        </div>
        <div className="hidden md:flex gap-8 font-orbitron text-[0.7rem] tracking-widest text-[#e0e0ff]/60 uppercase">
          {["Home", "Services", "Features", "Portfolio", "About", "Team"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#00f2ff] transition-colors cursor-pointer">{item}</a>
          ))}
        </div>
        <button className="px-6 py-2 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.6rem] uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black hover:border-[#00f2ff] transition-all duration-300 shadow-lg shadow-[#00f2ff]/5">
          Login / Secure
        </button>
      </nav>

      <div className="relative z-20">
        {/* HOME / HERO */}
        <Section id="home">
          <GlassCard 
            tag="SYSTEM STATUS: OPTIMIZED"
            title="Next-Gen"
            subtitle="Quantum Defense"
          >
            <p>We provide autonomous cybersecurity solutions that evolve in real-time. Our neural-link AI detects threats before they materialize, ensuring total digital dominance.</p>
            <div className="pt-4 flex gap-4">
              <button className="px-8 py-3 bg-[#00f2ff] text-black font-orbitron text-xs uppercase tracking-widest hover:brightness-110 transition-all">Get Started</button>
              <button className="px-8 py-3 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-xs uppercase tracking-widest hover:bg-[#00f2ff]/10 transition-all">Documentation</button>
            </div>
          </GlassCard>
        </Section>

        {/* SERVICES */}
        <Section id="services" className="justify-end">
          <GlassCard 
            align="right"
            tag="OPERATIONAL PROTOCOLS"
            title="Precision"
            subtitle="Services"
          >
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1 h-12 bg-[#00f2ff] shrink-0" />
                <div>
                  <h4 className="text-[#00f2ff] font-orbitron text-sm mb-1 uppercase">Quantum Encryption</h4>
                  <p className="text-sm opacity-60">End-to-end data obfuscation utilizing post-quantum cryptographic standards.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1 h-12 bg-[#7000ff] shrink-0" />
                <div>
                  <h4 className="text-[#7000ff] font-orbitron text-sm mb-1 uppercase">AI Threat Hunting</h4>
                  <p className="text-sm opacity-60">Continuous monitoring of network patterns to isolate zero-day vulnerabilities.</p>
                </div>
              </li>
            </ul>
          </GlassCard>
        </Section>

        {/* FEATURES */}
        <Section id="features">
          <GlassCard 
            tag="CORE CAPABILITIES"
            title="Core"
            subtitle="Features"
          >
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="p-4 border border-[#00f2ff]/10 bg-white/5">
                <h5 className="font-orbitron text-[0.6rem] text-[#00f2ff] mb-2 uppercase">Zero-Trust</h5>
                <p className="text-[0.75rem] opacity-50 font-inter">Verified identity for every packet.</p>
              </div>
              <div className="p-4 border border-[#00f2ff]/10 bg-white/5">
                <h5 className="font-orbitron text-[0.6rem] text-[#00f2ff] mb-2 uppercase">Self-Healing</h5>
                <p className="text-[0.75rem] opacity-50 font-inter">Instant reconstruction of environments.</p>
              </div>
              <div className="p-4 border border-[#00f2ff]/10 bg-white/5">
                <h5 className="font-orbitron text-[0.6rem] text-[#00f2ff] mb-2 uppercase">Edge Ops</h5>
                <p className="text-[0.75rem] opacity-50 font-inter">Distributed defense at global scale.</p>
              </div>
              <div className="p-4 border border-[#00f2ff]/10 bg-white/5">
                <h5 className="font-orbitron text-[0.6rem] text-[#00f2ff] mb-2 uppercase">Neural Link</h5>
                <p className="text-[0.75rem] opacity-50 font-inter">Cognitive threat response systems.</p>
              </div>
            </div>
          </GlassCard>
        </Section>

        {/* PORTFOLIO */}
        <Section id="portfolio" className="justify-end">
          <GlassCard 
            align="right"
            tag="DEPLOYED SOLUTIONS"
            title="Active"
            subtitle="Portfolio"
          >
            <div className="space-y-4">
              <div className="relative h-32 w-full bg-gradient-to-r from-[#00f2ff]/10 to-transparent border border-[#00f2ff]/20 p-6">
                <span className="text-[0.6rem] font-orbitron text-[#00f2ff] block mb-2">PROJECT: NEXUS_VAULT</span>
                <p className="text-xs opacity-60 font-inter">Securing over $50B in digital assets for Tier-1 financial institutions.</p>
              </div>
              <div className="relative h-32 w-full bg-gradient-to-r from-[#7000ff]/10 to-transparent border border-[#7000ff]/20 p-6">
                <span className="text-[0.6rem] font-orbitron text-[#7000ff] block mb-2">PROJECT: TITAN_GRID</span>
                <p className="text-xs opacity-60 font-inter">Global decentralized power grid defense for 12 sovereign nations.</p>
              </div>
            </div>
          </GlassCard>
        </Section>

        {/* ABOUT */}
        <Section id="about">
          <GlassCard 
            tag="MISSION_LOG"
            title="About"
            subtitle="The Mission"
          >
            <p>AEGIS was founded on the principle that digital safety is a fundamental human right. In an era of quantum computing and weaponized AI, we serve as the ultimate firewall for the modern world.</p>
            <p className="text-sm border-l-2 border-[#00f2ff] pl-4 italic">"Securing the future, one node at a time."</p>
          </GlassCard>
        </Section>

        {/* TEAM */}
        <Section id="team" className="justify-end">
          <GlassCard 
            align="right"
            tag="THE ARCHITECTS"
            title="Lead"
            subtitle="Engineers"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto border border-[#00f2ff] mb-4 rotate-45 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <div className="w-16 h-16 bg-[#00f2ff]/20" />
                </div>
                <h6 className="font-orbitron text-[0.7rem] text-white">X-42</h6>
                <span className="text-[0.5rem] text-[#00f2ff]">Core Arch</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto border border-[#7000ff] mb-4 rotate-45 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <div className="w-16 h-16 bg-[#7000ff]/20" />
                </div>
                <h6 className="font-orbitron text-[0.7rem] text-white">V-09</h6>
                <span className="text-[0.5rem] text-[#7000ff]">AI Lead</span>
              </div>
            </div>
          </GlassCard>
        </Section>
      </div>

      <footer className="relative z-20 py-20 px-[10%] border-t border-white/5 bg-[#020205]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-orbitron font-bold text-xl tracking-tighter text-white">AEGIS.SYS</div>
          <div className="text-[0.6rem] text-[#e0e0ff]/40 tracking-widest uppercase">
            &copy; 2026 AEGIS DIGITAL DEFENSE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-[0.6rem] text-[#00f2ff] tracking-[0.3em] font-orbitron">
            <span className="cursor-pointer hover:text-white transition-colors">TERMINAL</span>
            <span className="cursor-pointer hover:text-white transition-colors">STATUS</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 left-8 hidden lg:block z-50">
        <div className="h-24 w-[1px] bg-gradient-to-t from-[#00f2ff] to-transparent mb-4" />
        <div className="rotate-90 origin-left text-[0.5rem] tracking-[0.5em] text-[#00f2ff] font-orbitron uppercase opacity-50 whitespace-nowrap">
          SYNCING_WITH_CORE
        </div>
      </div>
    </div>
  );
}
