import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyle = isSelected
		? 'text-white border-purple-500'
		: 'text-[#adb7be] border-slate-600 hover:border-white';

	return (
		<button
			onClick={() => onClick(name)}
			className={`px-6 py-3 border-2 rounded-full cursor-pointer ${buttonStyle}`}
		>
			{name}
		</button>
	);
};

export default ProjectTag;
