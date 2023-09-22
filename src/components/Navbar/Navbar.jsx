'use client';

import Link from 'next/link';
import React, { useState } from 'react';

// components
import NavLinks from './NavLinks';

// icons
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import MenuOverlay from './MenuOverlay';

// navData
export const navData = [
	{ name: 'About', path: '#about' },
	{ name: 'Services', path: '#services' },
	{ name: 'Projects', path: '#projects' },
	{ name: "Contact", path: '#contact' },
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 backdrop-blur-lg">
			<div className="flex flex-wrap items-center justify-between mx-auto p-8">
				<Link
					href={'/'}
					className="text-2xl md:text-4xl text-white font-semibold"
				>
					Dmzdev
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white ease-in duration-500"
						>
							<HiOutlineMenu className="w-5 h-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white ease-in duration-500"
						>
							<HiOutlineX className="w-5 h-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex md:flex-row md:space-x-8 p-4 md:p-0 mt-0 font-medium">
						{navData.map((link, index) => (
							<li key={index}>
								<NavLinks href={link.path} name={link.name} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navData} /> : null}
		</nav>
	);
};

export default Navbar;
