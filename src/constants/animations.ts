export const pageAnimation = {
	hidden: {
		scale: 1.01,
		opacity: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.7,
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		scale: 1.01,
		transition: {
			duration: 0.5,
		},
	},
};

