import React from 'react';

const TabsBtn = ({ active, selectTab, children }) => {
	const btnClasses = active
		? 'text-purple-500 border-purple-500 border-b'
		: 'text-[#adb7be]';

	return (
		<button onClick={selectTab}>
			<p className={`mr-6 font-semibold hover:text-purple-500 ${btnClasses}`}>
				{children}
			</p>
		</button>
	);
};

export default TabsBtn;
