import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		name: 'Kris',
		age: 26
	};
};
