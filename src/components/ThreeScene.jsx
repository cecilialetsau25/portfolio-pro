import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xD4AF37, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create multiple geometric shapes
    const shapes = [];

    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(1, 0);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(-2, 1, 0);
    scene.add(icosahedron);
    shapes.push({ mesh: icosahedron, speed: 0.005 });

    // Torus
    const torusGeometry = new THREE.TorusGeometry(0.8, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(2, -1, -1);
    scene.add(torus);
    shapes.push({ mesh: torus, speed: 0.003 });

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(1);
    const octaMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(0, -2, -2);
    scene.add(octahedron);
    shapes.push({ mesh: octahedron, speed: 0.004 });

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach(({ mesh, speed }) => {
        mesh.rotation.x += speed;
        mesh.rotation.y += speed;
      });

      // Mouse parallax
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  );
}