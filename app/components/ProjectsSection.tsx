"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { animate, motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectsBanner() {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "Deep Learning Model for Image Classification",
      description:
        "A convolutional neural network (CNN) trained on a large dataset to classify images into various categories",
      image: "/laptop.jpg",
      tags: ["Python", "PyTorch", "Keras", "CNN"],
    },
    {
      title: "Urban Connectivity Analysis",
      description:
        "Analyzed urban connectivity using graph theory for Urban System Optimization",
      image: "/code.jpg",
      tags: ["Python", "NetworkX", "Data Analysis"],
    },
    {
      title: "Rhino Temple Plugin",
      description:
        "A custom suite of C#-based Grasshopper components designed to generate and parametrize architectural elements of Indian temples in both Nagara and Dravidian styles.",
      image: "/workspace.jpg",
      tags: ["C#", "Grasshopper", "Rhino3D"],
    },
    {
      title: "pySteel",
      description:
        "A Python library for structural steel design and analysis, adhering to international standards.",
      image: "/robot.jpg",
      tags: ["Python", "Structural Engineering", "Genetic Algorithms", "Optimization"],
    },
  ];
const baseX = useMotionValue(0);
const trackRef = useRef<HTMLDivElement>(null);
const half = useRef(0);             // width of one set (px)
const speed = useRef(100);          // px/sec (increase for faster scroll)

useLayoutEffect(() => {
  const el = trackRef.current;
  if (!el) return;
  const calc = () => (half.current = el.scrollWidth / 2); // because we render two sets
  calc();
  const ro = new ResizeObserver(calc);
  ro.observe(el);
  return () => ro.disconnect();
}, []);

useAnimationFrame((t, delta) => {
  const moveBy = (speed.current * delta) / 1000; // px to move this frame
  baseX.set(baseX.get() - moveBy);
});

const x = useTransform(baseX, (v) => {
  const h = half.current || 1;
  return `${wrap(-h, 0, v)}px`;  // wrap between [-half, 0]
});
const NUDGE = 180; // px; match one-card width-ish

const handleLeft = () => {
  const current = baseX.get();
  animate(baseX, current + NUDGE, { duration: 0.5, ease: "easeOut" });
};

const handleRight = () => {
  const current = baseX.get();
  animate(baseX, current - NUDGE, { duration: 0.5, ease: "easeOut" });
};

  return (
	<div className="w-full max-w-5xl mx-auto py-6 relative px-2 md:px-4">
	<div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
		
    <div className="w-full bg-gray-900 text-white relative">
      
	<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
      {/* Banner View */}
      {!showAll ? (
        <div className="relative overflow-hidden relative mt-4 group">
          <motion.div
            className="flex gap-6 will-change-transform"
            style={{ x }}
            ref={trackRef}
          >
            {[...projects, ...projects].map((proj, i) => (
              <div
                key={i}
                className="relative min-w-[320px] max-w-[350px] bg-gray-800 rounded-2xl shadow-lg flex-shrink-0 overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={400}
                  height={220}
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{proj.title}</h3>
                  {/* Truncated description in banner mode */}
                  <p className="text-sm text-gray-300 line-clamp-3">
                    {proj.description}
                  </p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
		 <button
    onClick={handleLeft}
    className="absolute left-2 top-1/2 -translate-y-1/2 
               bg-white hover:bg-gray-100 text-gray-700 
               shadow-lg p-2 rounded-full 
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>

  {/* Right Button */}
  <button
    onClick={handleRight}
    className="absolute right-2 top-1/2 -translate-y-1/2 
               bg-white hover:bg-gray-100 text-gray-700 
               shadow-lg p-2 rounded-full 
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
        </div>
      ) : (
        // Grid View
        <div className="grid md:grid-cols-3 gap-6 mt-6 px-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                width={500}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{proj.title}</h3>
                {/* Full description in grid mode */}
                <p className="text-sm text-gray-300 mb-3">{proj.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
	</div>
	{/* Header */}
      <div className="flex justify-center items-center py-4 px-6">
        {/* <h2 className="text-xl font-bold">My Projects</h2> */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
        >
          {showAll ? "Minimal" : "See All Projects"}
        </button>
      </div>
	</div>
	</div>
  );
}
