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
	title: 'Yajnavalkya Bandyopadhyay - Engineer, Researcher, and Builder',
	description:
		'Putting soul into technology -> Engineer, Researcher, and Builder crafting technology to empower people and reimagine systems.',
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
		'Yajnavalkya Bandyopadhyay',
	],
	authors: [{ name: 'Yajnavalkya Bandyopadhyay' }],
	creator: 'Yajnavalkya Bandyopadhyay',
	openGraph: {
	title: 'Yajnavalkya Bandyopadhyay - Engineer, Researcher, and Builder',
		description: 'Engineer, Researcher, and Builder -> crafting technology to empower people and reimagine systems.',
		url: 'yajnab.github.io',
	siteName: 'Yajnavalkya Bandyopadhyay - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				   alt: 'Yajnavalkya Bandyopadhyay - Frontend Developer with AI/QA Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Yajnavalkya Bandyopadhyay - AI and Automation Developer',
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
