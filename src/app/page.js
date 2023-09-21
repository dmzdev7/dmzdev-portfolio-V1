import Image from 'next/image';

// components
import ProfileSection from '@/components/ProfileSection';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<div className="container mx-auto px-12 py-4">
				<ProfileSection />
			</div>
		</main>
	);
}
