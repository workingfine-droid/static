import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import section components
import HomeSection from "./sections/HomeSection";
import SolutionsSection from "./sections/SolutionsSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import ImpactSection from "./sections/ImpactSection";
import ClientsSection from "./sections/ClientsSection";
import CTASection from "./sections/CTASection";
import ServicesSection from "./sections/ServicesSection";
import CaseStudiesSection from "./sections/CaseStudiesSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import TeamSection from "./sections/TeamSection";

gsap.registerPlugin(ScrollTrigger);

export default function CyberExperience() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
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
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00f2ff,
      size: 0.03,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
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
      linewidth: 2,
    });
    const outerShield = new THREE.LineSegments(edges, lineMat);
    coreGroup.add(outerShield);

    // Middle Shell - More detailed
    const midGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const midEdges = new THREE.EdgesGeometry(midGeo);
    const midLineMat = new THREE.LineBasicMaterial({
      color: 0x7000ff,
      transparent: true,
      opacity: 0.2,
    });
    const midShield = new THREE.LineSegments(midEdges, midLineMat);
    coreGroup.add(midShield);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2ff,
      transparent: true,
      opacity: 0.05,
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
        scrub: 1.5,
      },
    });

    tl.to(camera.position, { z: 3, y: 0.5, ease: "none" })
      .to(coreGroup.rotation, { y: Math.PI * 2, x: Math.PI / 2, ease: "none" })
      .to(camera.position, { z: 12, y: -2, ease: "none" })
      .to(coreGroup.scale, { x: 3, y: 3, z: 3, ease: "none" })
      .to(particles.rotation, { y: -Math.PI, ease: "none" }, 0);

    // --- Interaction ---
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
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

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.08;
      camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.08;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#020205] text-[#e0e0ff] font-inter overflow-x-hidden selection:bg-[#00f2ff] selection:text-black cursor-none"
    >
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 border-2 border-[#00f2ff] rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: "0px",
          top: "0px",
          transform: "translate(-50%, -50%)",
        }}
        ref={(el) => {
          if (el) {
            const updateCursor = (e) => {
              el.style.left = e.clientX + "px";
              el.style.top = e.clientY + "px";
            };
            const handleMouseEnter = () => {
              el.style.transform = "translate(-50%, -50%) scale(1.5)";
              el.style.backgroundColor = "#00f2ff";
            };
            const handleMouseLeave = () => {
              el.style.transform = "translate(-50%, -50%) scale(1)";
              el.style.backgroundColor = "transparent";
            };
            document.addEventListener("mousemove", updateCursor);
            document.querySelectorAll("a, button").forEach((elem) => {
              elem.addEventListener("mouseenter", handleMouseEnter);
              elem.addEventListener("mouseleave", handleMouseLeave);
            });
          }
        }}
      />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
      />

      <nav
        className={`fixed top-0 w-full px-8 py-2 flex justify-between items-center z-[100] transition-all duration-300 
          bg-gradient-to-b from-[#00f2ff]/15 via-white/15 to-transparent
          ${navSolid ? "bg-gradient-to-b from-[#00f2ff]/15 via-white/15 to-transparent backdrop-blur-md" : "bg-transparent"}
        `}
      >
        <div className="flex items-center gap-2">
          <img
            src="/companylogo/ttspl.png"
            alt="TTSPL Logo"
            className="w-20 h-20 object-contain"
          />
          TTSPL
        </div>
        {/* Desktop Menu + Get Started */}
        <div className="hidden lg:flex items-center gap-8 font-orbitron text-[0.7rem] tracking-widest text-[#e0e0ff]/60 uppercase">
          {["Home", "Solutions", "Services", "Clients", "About", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#00f2ff] transition-colors cursor-pointer"
              >
                {item}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.6rem] uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black hover:border-[#00f2ff] transition-all duration-300 shadow-lg shadow-[#00f2ff]/5"
          >
            Get Started
          </a>
        </div>
        {/* Mobile/Tablet Layout: Get Started next to menu button */}
        <div className="lg:hidden flex flex-1 items-center justify-end w-full gap-2">
          <button
            type="button"
            className="text-[#00f2ff] focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-nav-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#00f2ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a
            href="#contact"
            className="px-6 py-2 border border-[#00f2ff]/30 text-[#00f2ff] font-orbitron text-[0.6rem] uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black hover:border-[#00f2ff] transition-all duration-300 shadow-lg shadow-[#00f2ff]/5"
          >
            Get Started
          </a>
        </div>
        {/* Mobile/Tablet Menu Dropdown */}
        <div
          id="mobile-nav-menu"
          className="absolute top-full left-0 w-full bg-[#020205] border-t border-[#00f2ff]/10 py-4 px-8 flex flex-col gap-4 font-orbitron text-xs text-[#e0e0ff]/80 uppercase tracking-widest shadow-lg hidden lg:hidden z-[101]"
        >
          {["Home", "Solutions", "Services", "Clients", "About", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#00f2ff] transition-colors cursor-pointer"
                onClick={() => {
                  const menu = document.getElementById("mobile-nav-menu");
                  if (menu) menu.classList.add("hidden");
                }}
              >
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      <div className="relative z-20 mt-24 md:mt-28">
        <HomeSection />
        <div className="my-4 md:my-8 lg:my-12"></div>
        <SolutionsSection />
        <WhyChooseSection />
        <ImpactSection />
        <ClientsSection />
        <CTASection />
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        <ContactSection />
        <TeamSection />
      </div>

      <footer className="relative z-20 py-20 px-[10%] border-t border-white/5 bg-[#020205]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-orbitron font-bold text-xl tracking-tighter text-white">
            TECHNOTOUCH SOLUTIONS
          </div>
          <div className="text-[0.6rem] text-[#e0e0ff]/40 tracking-widest uppercase">
            &copy; 2026 TECHNOTOUCH SOLUTIONS PVT. LTD. ALL RIGHTS RESERVED. ISO
            9001:2008 CERTIFIED
          </div>
          <div className="flex gap-6 text-[0.6rem] text-[#00f2ff] tracking-[0.3em] font-orbitron">
            <a
              href="#contact"
              className="cursor-pointer hover:text-white transition-colors"
            >
              CONTACT
            </a>
            <a
              href="#about"
              className="cursor-pointer hover:text-white transition-colors"
            >
              ABOUT
            </a>
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
