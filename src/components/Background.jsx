import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

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
        trigger: document.body,
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
      requestAnimationFrame(animate);

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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
