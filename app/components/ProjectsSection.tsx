"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();
  const [xPos, setXPos] = useState(0);

  // auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setXPos((prev) => prev - 1); // moves left slowly
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ x: xPos });
  }, [xPos, controls]);

  // button handlers
  const handleLeft = () => setXPos((prev) => prev + 100); // move right
  const handleRight = () => setXPos((prev) => prev - 100); // move left

  return (
	<div className="w-full max-w-5xl mx-auto py-6 relative px-2 md:px-4">
	<div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
		
    <div className="w-full bg-gray-900 text-white relative">
      
	<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
      {/* Banner View */}
      {!showAll ? (
        <div className="overflow-hidden relative mt-4">
          <motion.div
            className="flex gap-6"
            animate={controls}
            transition={{ repeat: Infinity, type: "tween", ease: "linear", duration: 0.2 }}
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
		  {/* Left Button */}
      <button
        onClick={handleLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={handleRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight />
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
