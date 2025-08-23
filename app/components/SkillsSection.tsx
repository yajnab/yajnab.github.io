"use client";

import { motion } from "framer-motion";
import StackIcon, { IconName } from "tech-stack-icons";

const techList: IconName[] = [
  "c",
  "cplusplus",
  "java",
  "python",
  "csharp",
  "mysql",
  "postgresql",
  "sqlite",
  "android",
  "linux",
  "opencv",
  "keras",
  "tensorflow",
  "pytorch",
  "nltk",
  "typescript",
  "electron",
  "playwright",
  "aws",
  "google_earth_engine"
];

export default function SkillsSection() {
  return (
    <main className="relative w-full py-16 bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
      {/* Plasma Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl -bottom-32 -right-32" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">My Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {techList.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-[0_0_25px_rgba(255,0,255,0.6)] hover:shadow-[0_0_45px_rgba(255,0,255,0.9)] transition duration-300">
                <StackIcon name={name} variant="light" />
              </div>
              <span className="mt-2 text-sm text-gray-300">{name.replace(/_/g, " ").toUpperCase()}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
