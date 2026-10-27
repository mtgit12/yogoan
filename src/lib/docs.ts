import { getCollection, type CollectionEntry } from 'astro:content';

export type Term = CollectionEntry<'docs'>;

/** base（/yogoan）付きのリンクを作る */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (id: string) => `${base}/${id}/`;

/** トップページ以外の記事一覧（本番ビルドでは下書きを除外） */
export async function getTerms(): Promise<Term[]> {
  const all = await getCollection('docs');
  return all.filter((e) => e.id !== 'index' && !(import.meta.env.PROD && e.data.draft));
}

/** カテゴリ内の記事を、サイドバーと同じ順（order → タイトル）で並べる */
export function termsInDir(terms: Term[], dir: string): Term[] {
  return terms
    .filter((t) => t.id.startsWith(`${dir}/`))
    .sort(
      (a, b) =>
        (a.data.sidebar?.order ?? 999) - (b.data.sidebar?.order ?? 999) ||
        a.data.title.localeCompare(b.data.title, 'ja'),
    );
}
