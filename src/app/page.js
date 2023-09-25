import Image from 'next/image';

// components
import ProfileSection from '@/components/ProfileSection';
import Navbar from '@/components/Navbar/Navbar';
import AboutSection from '@/components/About/AboutSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';

export default function Home() {
	return (
		<main className="flex flex-col w-full min-h-screen bg-[#121212]">
			<Navbar />
			<div className="container mx-auto mt-28 px-12 py-4">
				<ProfileSection />
				<AboutSection />
				<ProjectsSection />
			</div>
		</main>
	);
}
