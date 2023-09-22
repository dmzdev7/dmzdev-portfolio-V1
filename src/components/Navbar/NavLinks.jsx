import Link from 'next/link';
import React from 'react';


const NavLinks = ({ href, name }) => {
	return (
		<Link
			href={href}
			className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-md rounded md:bg-transparent md:p-0 hover:text-white "
			aria-current="page"
		>
			{name}
		</Link>
	);
};

export default NavLinks;
