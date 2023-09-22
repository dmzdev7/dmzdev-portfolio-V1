import React from 'react';

// components
import NavLinks from './NavLinks';

const MenuOverlay = ({ links }) => {
	return (
		<ul className="h-screen flex flex-col items-center py-4 ease-in duration-500 backdrop-blur-lg">
			{links.map((link, index) => (
				<li key={index} className="!text-3xl">
					<NavLinks href={link.path} name={link.name} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
