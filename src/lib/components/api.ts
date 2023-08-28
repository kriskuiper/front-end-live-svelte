interface PokemonResponse {
	name: string;
	sprites: {
		front_default: string;
	};
}

export interface Pokemon {
	name: string;
	sprite: string;
}

export const fetchPokemon = async (slug: string): Promise<Pokemon | null> => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + slug);

	if (!response.ok) {
		return null;
	}

	// Not ideal but this is for testing purposes so 🤷‍♂️
	const result = (await response.json()) as unknown as PokemonResponse;

	return {
		name: result.name,
		sprite: result.sprites.front_default
	};
};
