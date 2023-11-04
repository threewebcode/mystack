import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Swiper from 'swiper';

const ThreeSwiperComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    // Initialize three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    // Create 3D model and animation
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Initialize swiper/carousel component
    swiperRef.current = new Swiper('.swiper-container', {
      // Swiper configuration options
      // ...
      direction: "horizontal"
    });

    // Handle scroll events
    function handleScroll(event: WheelEvent) {
      if (event.deltaY > 0) {
        // Slide left when scrolling down
        swiperRef.current?.slideNext();
      } else {
        // Slide right when scrolling up
        swiperRef.current?.slidePrev();
      }
    }

    // Attach scroll event listener
    window.addEventListener('wheel', handleScroll);

    // Clean up event listener and swiper instance
    return () => {
      window.removeEventListener('wheel', handleScroll);
      swiperRef.current?.destroy();
    };
  }, []);

  return <div className="swiper-container" ref={containerRef}>
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <svg width="200" height="200">
          <rect width="200" height="200" fill="red" />
        </svg>
      </div>
      <div className="swiper-slide">
        <svg width="200" height="200">
          <rect width="200" height="200" fill="blue" />
        </svg>
      </div>
    </div>
  </div>;
};

export default ThreeSwiperComponent;

