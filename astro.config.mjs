// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { categories } from '@data/categories.ts';

// GitHub Pages: https://mtgit12.github.io/yogoan/ で公開する前提
export default defineConfig({
  site: 'https://mtgit12.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'yogoan',
      description: 'IT用語の用語集。',
      // UIの文言（検索、目次など）を日本語にする
      locales: {
        root: { label: '日本語', lang: 'ja' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mtgit12/yogoan' },
      ],
      customCss: [
        // Tailwindのベーススタイルへのパス
        './src/styles/global.css',
      ],
      // カテゴリ定義からサイドバーを自動生成
      sidebar: [
				{ label: 'Guide', slug: 'guides' },
				...categories.map((c) => ({
          label: c.label,
          items: [{autogenerate: { directory: c.dir }}],
        }))
      ],
      pagination: false,
      credits: true,
		}),
	],
});
