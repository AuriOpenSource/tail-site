import type { Routes } from '$lib/utils/types.js';
import icons from './utils/icons.js';

const routes: Routes = [
	{
		name: 'Home',
		href: '/',
		icon: {
			filled: icons.home.f,
			outline: icons.home.o
		}
	},
	{
		href: '/get-started',
		name: 'Get Started',
		icon: {
			filled: icons.apps,
			outline: icons.apps
		}
	},
	{
		name: 'Components',
		href: '/components',
		icon: {
			filled: icons.browser,
			outline: icons.browser
		}
	}
];

export default routes;
