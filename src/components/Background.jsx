import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

    scene.fog = new THREE.Fog(0x020205, 12, 40);

    /* ---------------- PARTICLES ---------------- */

    const particleCount = 2500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 70;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00eaff,
      size: 0.03,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    particles.position.z = -12;
    scene.add(particles);

    /* ---------------- DOUBLE SHELL WITH DEPTH ---------------- */

    const coreGroup = new THREE.Group();

    const geoOuter = new THREE.IcosahedronGeometry(3.2, 1);
    const edgesOuter = new THREE.EdgesGeometry(geoOuter);

    const outerShell = new THREE.LineSegments(
      edgesOuter,
      new THREE.LineBasicMaterial({
        color: 0x00f2ff,
        transparent: true,
        opacity: 0.7,
      }),
    );
    outerShell.position.z = -2;

    const geoInner = new THREE.IcosahedronGeometry(2.2, 2);
    const edgesInner = new THREE.EdgesGeometry(geoInner);

    const innerShell = new THREE.LineSegments(
      edgesInner,
      new THREE.LineBasicMaterial({
        color: 0x00f2ff,
        transparent: true,
        opacity: 0.35,
      }),
    );
    innerShell.position.z = -6;

    coreGroup.add(outerShell);
    coreGroup.add(innerShell);
    scene.add(coreGroup);

    /* ---------------- LIGHTING ---------------- */

    const light1 = new THREE.PointLight(0x00eaff, 8, 20);
    light1.position.set(3, 3, 5);

    const light2 = new THREE.PointLight(0x6a00ff, 6, 20);
    light2.position.set(-3, -3, 4);

    scene.add(light1);
    scene.add(light2);
    scene.add(new THREE.AmbientLight(0x0a0a15, 0.4));

    /* ---------------- SCROLL CAMERA TRAVEL ---------------- */

    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      })
      .to(camera.position, { z: 0, ease: "power2.inOut" }, 0)
      .to(camera.position, { z: -5, ease: "power2.inOut" }, 0.4)
      .to(camera.position, { z: -10, ease: "power2.inOut" }, 0.8)
      .to(coreGroup.rotation, { y: Math.PI * 1.5 }, 0);

    /* ---------------- INTERACTION ---------------- */

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    /* ---------------- ANIMATION LOOP ---------------- */

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.003;

      mouse.x += (target.x - mouse.x) * 0.04;
      mouse.y += (target.y - mouse.y) * 0.04;

      coreGroup.rotation.y += 0.0006;
      outerShell.rotation.x += 0.0003;
      innerShell.rotation.y -= 0.0008;

      particles.rotation.y += 0.0002;

      outerShell.material.opacity = 0.7 + Math.sin(time * 2) * 0.08;

      light1.position.x = 3 + Math.sin(time) * 1.5;
      light2.position.y = -3 + Math.cos(time) * 1.5;

      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.04;
      camera.position.y += (-mouse.y * 1.5 - camera.position.y) * 0.04;

      camera.lookAt(0, 0, -6);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
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
