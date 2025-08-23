'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative p-12 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-900/50"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
					<div className="relative z-10">
						<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
							<h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
								Let&apos;s Connect
							</h2>
							<p className="text-gray-400 text-center mb-4">Ready to collaborate or have a project in mind? Let&apos;s make something amazing together.</p>
							<div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>San Francisco, CA</span>
							</div>
						</motion.div>
						<div className="flex flex-col items-center gap-6 mb-8">
							<motion.a
								href="mailto:sarah.parker@example.com"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium text-white"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								Get in Touch
							</motion.a>
							<motion.a
								href="/resume.pdf"
								target="_blank"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-500/10 to-gray-500/20 rounded-2xl hover:from-gray-500/20 hover:to-gray-500/30 border border-gray-500/20 hover:border-gray-500/30 transition-all duration-300"
							>
								<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								<span className="font-medium text-gray-400">View Resume</span>
							</motion.a>
						</div>
						<div className="flex flex-wrap justify-center gap-6">
							<motion.a
								href="#"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="group flex items-center justify-center p-4 bg-gradient-to-r from-blue-500/10 to-blue-500/20 rounded-xl hover:from-blue-500/20 hover:to-blue-500/30 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
							>
								<svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</motion.a>
							<motion.a
								href="#"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="group flex items-center justify-center p-4 bg-gradient-to-r from-purple-500/10 to-purple-500/20 rounded-xl hover:from-purple-500/20 hover:to-purple-500/30 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
							>
								<svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</motion.a>
							<motion.a
								href="#"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="group flex items-center justify-center p-4 bg-gradient-to-r from-pink-500/10 to-pink-500/20 rounded-xl hover:from-pink-500/20 hover:to-pink-500/30 border border-pink-500/20 hover:border-pink-500/30 transition-all duration-300"
							>
								<svg className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
