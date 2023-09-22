'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState, useTransition } from 'react';

// framer motion
import { useMotionValue, useSpring, useInView } from 'framer-motion';

// components
import TabsBtn from './TabsBtn';

// TabData
const tabData = [
	{
		name: 'Skills',
		id: 'Skills',
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>Sequelize</li>
				<li>MongoDB</li>
				<li>Mongoose</li>
			</ul>
		),
	},
	{
		name: 'Education & Experience',
		id: 'Edu&Exp',
		content: (
			<ul className="list-disc pl-2">
				<li>Fullstack Academy of Code</li>
				<li>University of California, Santa Cruz</li>
			</ul>
		),
	},
	{
		name: 'Certifications',
		id: 'Certifications',
		content: (
			<ul className="list-disc pl-2">
				<li>AWS Cloud Practitioner</li>
				<li>Google Professional Cloud Developer</li>
			</ul>
		),
	},
];

// animated numbers
const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 300 });
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) motionValue.set(value);
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value)
				ref.current.textContent = latest.toFixed(0);
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const AboutSection = () => {
	const [tab, setTab] = useState('Skills');
	const [isPrending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white mt-24" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 lg:px-16">
				<Image
					src={'/images/about-dev.png'}
					alt="About Me"
					width={400}
					height={400}
				/>
				<div className="flex flex-col h-full mt-4 text-left md:mt-0">
					<h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
					<p className="text-white text-base md:text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
						sed, minima neque molestias quisquam voluptate aperiam hic,
						laboriosam maxime, in inventore voluptas dolores id vero?
					</p>
					<div className="flex flex-row items-center justify-between space-x-8 mt-4">
						<div className="flex flex-col items-end justify-center">
							<span className="inline-block text-2xl font-bold">
								<AnimatedNumbers value={20} />+
							</span>
							<h4 className="text-md font-medium capitalize text-[#adb7be]">
								Projects Completed
							</h4>
						</div>
						<div className="flex flex-col items-end justify-center">
							<span className="inline-block text-2xl font-bold">
								<AnimatedNumbers value={2} />+
							</span>
							<h4 className="text-md font-medium capitalize text-[#adb7be]">
								Years of Experience
							</h4>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row justify-start mt-8">
				<TabsBtn
					selectTab={() => handleTabChange('Skills')}
					active={tab === 'Skills'}
				>
					Skills
				</TabsBtn>
				<TabsBtn
					selectTab={() => handleTabChange('Edu&Exp')}
					active={tab === 'Edu&Exp'}
				>
					Education & Experience
				</TabsBtn>
				<TabsBtn
					selectTab={() => handleTabChange('Certifications')}
					active={tab === 'Certifications'}
				>
					Certifications
				</TabsBtn>
			</div>
			<div className="mt-8">{tabData.find((t) => t.id === tab).content}</div>
		</section>
	);
};

export default AboutSection;
