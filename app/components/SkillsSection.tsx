"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Tech {
  id: string;
  name: string;
  logoUrl: string;
}

export default function SkillsSection() {
  const techs: Tech[] = [
    { id: "c", name: "C", logoUrl: "/logos/c.svg" },
    { id: "cpp", name: "C++", logoUrl: "/logos/cpp.svg" },
    { id: "java", name: "Java", logoUrl: "/logos/java.svg" },
    { id: "python", name: "Python", logoUrl: "/logos/python.svg" },
    { id: "csharp", name: "C#", logoUrl: "/logos/csharp.svg" },
    { id: "mysql", name: "MySQL", logoUrl: "/logos/mysql.svg" },
    { id: "postgresql", name: "PostgreSQL", logoUrl: "/logos/postgresql.svg" },
    { id: "sqlite", name: "SQLite", logoUrl: "/logos/sqlite.svg" },
    { id: "android", name: "Android", logoUrl: "/logos/android.svg" },
    { id: "linux", name: "Linux", logoUrl: "/logos/linux.svg" },
    { id: "opencv", name: "OpenCV", logoUrl: "/logos/opencv.svg" },
    { id: "keras", name: "Keras", logoUrl: "/logos/keras.svg" },
    { id: "tensorflow", name: "TensorFlow", logoUrl: "/logos/tensorflow.svg" },
    { id: "pytorch", name: "PyTorch", logoUrl: "/logos/pytorch.svg" },
    { id: "nltk", name: "NLTK", logoUrl: "/logos/nltk.svg" },
    { id: "typescript", name: "TypeScript", logoUrl: "/logos/typescript.svg" },
    { id: "electronjs", name: "ElectronJS", logoUrl: "/logos/electron.svg" },
    { id: "playwright", name: "Playwright", logoUrl: "/logos/playwright.svg" },
    { id: "aws", name: "AWS", logoUrl: "/logos/aws.svg" },
    { id: "gee", name: "Google Earth Engine", logoUrl: "/logos/google-earth-engine.svg" },
  ];

  return (
    <main className="relative w-full py-16 bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
      {/* Plasma Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl -bottom-32 -right-32" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.id}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-[0_0_25px_rgba(255,0,255,0.6)] hover:shadow-[0_0_45px_rgba(255,0,255,0.9)] transition duration-300">
                <Image
                  src={tech.logoUrl}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-sm text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
