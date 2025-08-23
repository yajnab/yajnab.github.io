"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface Tech {
  id: string;
  name: string;
  logoUrl: string;
}

export default function SkillsSection() {
  const [expanded, setExpanded] = useState(false);

  const techs: Tech[] = [
    { id: "c", name: "C", logoUrl: "/icons/C.svg" },
    { id: "cpp", name: "C++", logoUrl: "/icons/C++-(CPlusPlus).svg" },
    { id: "java", name: "Java", logoUrl: "/icons/Java.svg" },
    { id: "python", name: "Python", logoUrl: "/icons/Python.svg" },
    { id: "csharp", name: "C#", logoUrl: "/icons/CSharp.svg" },
    { id: "mysql", name: "MySQL", logoUrl: "/icons/MySQL.svg" },
    { id: "postgresql", name: "PostgreSQL", logoUrl: "/icons/PostgresSQL.svg" },
    { id: "sqlite", name: "SQLite", logoUrl: "/icons/SQLite.svg" },
    { id: "android", name: "Android", logoUrl: "/icons/Android.svg" },
    { id: "linux", name: "Linux", logoUrl: "/icons/Arch-Linux.svg" },
    { id: "opencv", name: "OpenCV", logoUrl: "/icons/OpenCV.svg" },
    { id: "keras", name: "Keras", logoUrl: "/icons/Keras.svg" },
    { id: "tensorflow", name: "TensorFlow", logoUrl: "/icons/TensorFlow.svg" },
    { id: "pytorch", name: "PyTorch", logoUrl: "/icons/PyTorch.svg" },
    { id: "typescript", name: "TypeScript", logoUrl: "/icons/TypeScript.svg" },
    { id: "electron", name: "Electron", logoUrl: "/icons/Electron.svg" },
    { id: "playwright", name: "Playwright", logoUrl: "/icons/Playwrite.svg" },
    { id: "aws", name: "AWS", logoUrl: "/icons/AWS.svg" },
  ];

  return (
  <main className="relative w-full pt-6 pb-16 bg-gray-900/50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
          My Tech Stack
        </h2> */}

        {/* Moving Banner */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...techs, ...techs].map((tech, idx) => (
              <div
                key={tech.id + idx}
                className="flex flex-col items-center min-w-[80px]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700 shadow-md">
                  <Image
                    src={tech.logoUrl}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Down Arrow Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mx-auto mb-6 flex items-center gap-2 text-gray-200 hover:text-white transition"
        >
          <ChevronDown
            size={28}
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
          <span className="font-semibold">
            {expanded ? "Show Less" : "Show All"}
          </span>
        </button>

        {/* Expanded Grid */}
        {expanded && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {techs.map((tech, idx) => (
              <motion.div
                key={tech.id}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.05, type: "spring" }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg hover:bg-gray-800/80 transition duration-300">
                  <Image
                    src={tech.logoUrl}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-semibold text-gray-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
