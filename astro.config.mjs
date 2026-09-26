// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Hosted on GitHub Pages at https://hippomoto.github.io/GuitarImprovers/
	site: 'https://hippomoto.github.io',
	base: '/GuitarImprovers',
	// The chord library is the home page; keep its old address working.
	redirects: {
		'/chords': '/GuitarImprovers/',
	},
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'Chord library', slug: 'index' },
				{ label: 'Chord flashcards', slug: 'flashcards' },
				{ label: 'Fretboard notes', slug: 'fretboard' },
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
