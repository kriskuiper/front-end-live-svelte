import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import ExampleComponent from './ExampleComponent.svelte';

describe('ExampleComponent', () => {
	it('should have visible text', () => {
		render(ExampleComponent);

		const text = screen.getByText(/example/i);

		expect(text).toBeVisible();
	});
});
