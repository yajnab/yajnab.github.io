import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '[Your Name] - AI and Automation Developer',
	description:
		'Engineer, Researcher, and Builder -> crafting technology to empower people and reimagine systems.',
	keywords: [
		'Artificial Intelligence',  
'Large Language Models (LLMs)',  
'Core AI Engineering',  
'Automation',  
'Software Engineering',  
'Data Engineering',  
'RPA Testing',  
'Computer Vision',  
'Urban Systems',  
'System Design',  
'Reasearch & Development',  
'Innovation Engineering',
		'Technology Solutions',  
'AI Integration',  
'Process Optimization',  
'AI-Driven Applications',  
'AI Research',
		'[Your Name]',
	],
	authors: [{ name: '[Your Name]' }],
	creator: '[Your Name]',
	openGraph: {
		title: '[Your Name] - AI and Automation Portfolio',
		description: 'Engineer, Researcher, and Builder -> crafting technology to empower people and reimagine systems.',
		url: 'yajnab.github.io',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - AI and Automation Developer',
		description: 'Engineer, Researcher, and Builder -> crafting technology to empower people and reimagine systems.',
		creator: '@yajnab',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
