import Image from 'next/image';

// components
import ProfileSection from '@/components/ProfileSection';
import Navbar from '@/components/Navbar/Navbar';
import AboutSection from '@/components/About/AboutSection';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<div className="container mx-auto mt-28 px-12 py-4">
				<ProfileSection />
				<AboutSection />
			</div>
		</main>
	);
}
