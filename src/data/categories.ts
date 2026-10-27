/**
 * カテゴリ定義。サイドバー・トップのタイル・タグの色をここで一元管理する。
 * dir は src/content/docs/ 配下のフォルダ名。
 */
export type Category = {
  dir: string;
  label: string;
  short: string;
  color: string;
  tint: string;
  tintText: string;
  plain?: boolean;
  /** 24x24 の SVG 内に入れる要素 */
  icon: string;
};

export const categories: Category[] = [
  {
    dir: 'web', label: 'Web・フロントエンド', short: 'Web・フロント',
    color: '#5B4BD6', tint: '#E4E1FB', tintText: '#3F33A8',
    icon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8"/>',
  },
  {
    dir: 'backend', label: 'API・バックエンド', short: 'API・バックエンド',
    color: '#0A7F87', tint: '#D3EEEF', tintText: '#075F66',
    icon: '<rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 6.5h.01M8 17.5h.01"/>',
  },
  {
    dir: 'cloud', label: 'クラウド・インフラ', short: 'クラウド・インフラ',
    color: '#2F855A', tint: '#DCF1E4', tintText: '#1F5E3E',
    icon: '<path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18z"/>',
  },
  {
    dir: 'ai', label: 'AI', short: 'AI',
    color: '#9A6A00', tint: '#F7EBC9', tintText: '#6E4B00',
    icon: '<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  },
  {
    dir: 'design', label: '設計・手法', short: '設計・手法',
    color: '#C2457A', tint: '#F8DDE8', tintText: '#8E2F58',
    icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="8.5" y="14" width="7" height="7" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>',
  },
  {
    dir: 'network', label: 'ネットワーク', short: 'ネットワーク',
    color: '#2A62CF', tint: '#DCE7FA', tintText: '#1E4FAE',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  },
  {
    dir: 'security', label: 'セキュリティ', short: 'セキュリティ',
    color: '#B8592A', tint: '#FBE3D5', tintText: '#8A3E17',
    icon: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/>',
  },
  {
    dir: 'other', label: 'その他', short: 'その他',
    color: '#1E4FAE', tint: '#DCE7FA', tintText: '#1E4FAE', plain: true,
    icon: '<circle cx="6" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18" cy="12" r="1.2"/>',
  },
];

/** 記事ID（例: "backend/session-cookie"）から所属カテゴリを返す */
export const findCategory = (id: string): Category | undefined =>
  categories.find((c) => id.startsWith(`${c.dir}/`));
