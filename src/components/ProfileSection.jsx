import Image from 'next/image';
import React from 'react';

// icons
import { HiOutlineDownload, HiOutlineChat } from 'react-icons/hi';

const Profile = () => {
	return (
		<section>
			<div className="grid grid-cols-1 lg:grid-cols-12">
				<div className="col-span-7 place-self-center">
					<h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-700">
							Hi there! I&apos;m{' '}
						</span>
						David
					</h1>
					<p className="text-[#adb7be] mb-6 text-base sm:text-lg lg:text-xl">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
						ipsum id dicta autem eum nihil, quidem quaerat, suscipit in
						asperiores ea obcaecati placeat animi et dolorum excepturi ipsa
						voluptatem quasi?
					</p>
					<div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
						<button className="w-full sm:w-fit px-6 py-3 rounded-full text-black font-semibold bg-white/75 hover:bg-gradient-to-br from-green-500 via-emerald-400 to-blue-700">
							<span className="flex items-center justify-center gap-x-2">
								Hire Me
								<HiOutlineChat className="text-xl" />
							</span>
						</button>
						<button className="w-full sm:w-fit px-6 py-3 rounded-full text-white font-semibold border border-white bg-transparent hover:bg-black/100">
							<span className="flex items-center justify-center gap-x-2">
								Download CV
								<HiOutlineDownload className="text-xl" />
							</span>
						</button>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#181818]  ">
						<Image
							src={'/images/developer-pic1.png'}
							alt="dmzdev profile"
							width={300}
							height={300}
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
