import { fetchPokemon } from '$lib/components/api';

export const load = async ({ params }) => {
	const pokemon = await fetchPokemon(params.slug);

	if (!pokemon) {
		return {
			name: '',
			sprite: ''
		};
	}

	return pokemon;
};
