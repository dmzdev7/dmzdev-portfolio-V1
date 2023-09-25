'use client'
import React, { useState } from 'react';

// components
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

// project data
const prjData = [
	{
		id: 1,
		title: 'React Portfolio Website',
		description: 'Project 1 description',
		img: '/images/projects/1.png',
		tag: ['All', 'Web'],
		githubUrl: 'www.google.com',
		previewUrl: 'www.google.com',
	},
	{
		id: 2,
		title: 'Potography Portfolio Website',
		description: 'Project 2 description',
		img: '/images/projects/2.png',
		tag: ['All', 'Web'],
		githubUrl: 'www.google.com',
		previewUrl: 'www.google.com',
	},
	{
		id: 3,
		title: 'E-commerce Application',
		description: 'Project 3 description',
		img: '/images/projects/3.png',
		tag: ['All', 'Web'],
		githubUrl: 'www.google.com',
		previewUrl: 'www.google.com',
	},
	{
		id: 4,
		title: 'Food Ordering Application',
		description: 'Project 4 description',
		img: '/images/projects/4.png',
		tag: ['All', 'Mobile'],
		githubUrl: 'www.google.com',
		previewUrl: 'www.google.com',
	},
	{
		id: 5,
		title: 'React Firebase Template',
		description: 'Authentication and CRUD operations',
		img: '/images/projects/5.png',
		tag: ['All', 'Web'],
		githubUrl: 'www.google.com',
		previewUrl: 'www.google.com',
	},
	{
		id: 6,
		title: 'Full-stack Roadmap',
		description: 'Project 5 description',
		img: '/images/projects/6.png',
		tag: ['All', 'Web'],
		githubUrl: 'www.google.com',
		previewUrl: 'www.google.com',
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState('All');
	const filteredPrj = prjData.filter((project) => project.tag.includes(tag));
	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	return (
		<>
			<h5 className="mt-24 text-white">Browse My Recent</h5>
			<h3 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h3>
			<div className="flex flex-row justify-center items-center gap-2 text-white my-6">
				<ProjectTag
					name={'All'}
					onClick={handleTagChange}
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					name={'Web'}
					onClick={handleTagChange}
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					name={'Mobile'}
					onClick={handleTagChange}
					isSelected={tag === 'Mobile'}
				/>
			</div>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredPrj.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.img}
						githubUrl={project.githubUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectsSection;
