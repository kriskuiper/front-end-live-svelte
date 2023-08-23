import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests/integration',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	workers: process.env.CI ? 1 : undefined
};

export default config;
