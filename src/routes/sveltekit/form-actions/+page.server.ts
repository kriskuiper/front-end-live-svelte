import { fetchPokemon } from '$lib/components/api.js';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		// Umh, testing purposes 🤷‍♂️
		const { name } = Object.fromEntries(form) as { name: string };
		const pokemon = await fetchPokemon(name);

		if (!pokemon) {
			return {
				pokemon: {
					name: '',
					sprite: ''
				},
				success: false
			};
		}

		return {
			pokemon,
			success: true
		};
	}
};
