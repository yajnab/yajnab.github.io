'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Deep Learning Model for Image Classification',
		description: 'A convolutional neural network (CNN) trained on a large dataset to classify images into various categories',
		image: '/laptop.jpg',
		tags: ['Python', 'PyTorch', 'Keras', 'CNN'],
	},
	{
		title: 'Urban Connectivity Analysis',
		description: 'Analyzed urban connectivity using graph theory for Urban System Optimization',
		image: '/code.jpg',
		tags: ['Python', 'NetworkX', 'Data Analysis'],
	},
	{
		title: 'Rhino Temple Plugoin',
		description: 'A custom suite of C#-based Grasshopper components designed to generate and parametrize architectural elements of Indian temples in both Nagara and Dravidian styles.',
		image: '/workspace.jpg',
		tags: ['C#', 'Grasshopper', 'Rhino3D'],
	},
	{
		title: 'pySteel',
		description: 'A Python library for structural steel design and analysis, adhering to international standards.',
		image: '/robot.jpg',
		tags: ['Python', 'Structural Engineering', 'Genetic Algorithms', "Optimization"],
	}
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
