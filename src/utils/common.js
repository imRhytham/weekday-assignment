export const generateId = () => {
	const timestamp = new Date().getTime();
	const randomSuffix = Math.random().toString(36).substring(2, 8);

	return `${timestamp}${randomSuffix}`;
};

export const experienceMenuOptions = [
	{ label: "1 yr", value: 1 },
	{ label: "2 yrs", value: 2 },
	{ label: "3 yrs", value: 3 },
	{ label: "4 yrs", value: 4 },
	{ label: "5 yrs", value: 5 },
	{ label: "6 yrs", value: 6 },
	{ label: "7 yrs", value: 7 },
	{ label: "8 yrs", value: 8 },
	{ label: "9 yrs", value: 9 },
	{ label: "10 yrs", value: 10 },
];

export const salaryMenuOptions = [
	{ label: "USD 10k", value: 10 },
	{ label: "USD 20k", value: 20 },
	{ label: "USD 30k", value: 30 },
	{ label: "USD 40k", value: 40 },
	{ label: "USD 50k", value: 50 },
	{ label: "USD 60k", value: 60 },
	{ label: "USD 70k", value: 70 },
	{ label: "USD 80k", value: 80 },
	{ label: "USD 90k", value: 90 },
	{ label: "USD 100k", value: 100 },
];

export const modesOptions = [
	{ label: "Onsite", value: "onsite" },
	{ label: "Remote", value: "remote" },
];

export const jobRolesOptions = [
	{ label: "Frontend", value: "frontend" },
	{ label: "Backend", value: "backend" },
	{ label: "FullStack", value: "fullStack" },
	{ label: "Ios", value: "ios" },
	{ label: "Tech Lead", value: "tech lead" },
];
