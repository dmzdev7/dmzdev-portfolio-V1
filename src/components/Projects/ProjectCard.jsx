import Link from 'next/link';
import React from 'react';

// icons
import { HiOutlineCode, HiOutlineEye } from 'react-icons/hi';

const ProjectCard = ({ imgUrl, title, description, githubUrl, previewUrl }) => {
	return (
		<div>
			<div
				className="relative group h-52 md:h-72 bg-center overflow-hidden rounded-t-xl"
				src={imgUrl}
				alt={title}
				width={300}
				height={200}
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500">
					<Link
						href={githubUrl}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
					>
						<HiOutlineEye className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
					</Link>
					<Link
						href={previewUrl}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<HiOutlineCode className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
					</Link>
				</div>
			</div>
			<div className="py-6 px-4 text-white rounded-b-xl bg-[#181818]">
				<h5 className="font-xl font-semibold">{title}</h5>
				<p className="text-[#adb7be]">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
