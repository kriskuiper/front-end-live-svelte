import type { Meta, StoryObj } from '@storybook/svelte';

import ExampleComponent from './ExampleComponent.svelte';

const meta = {
	title: '01. Atoms/ExampleComponent',
	component: ExampleComponent
} satisfies Meta<ExampleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
