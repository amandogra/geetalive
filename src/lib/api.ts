const BASE_URL = "https://vedicscriptures.github.io";

export interface ChapterInfo {
  chapter_number: number;
  verses_count: number;
  name: string;
  translation: string;
  transliteration: string;
  meaning: { en: string; hi: string };
  summary: { en: string; hi: string };
}

export interface SlokAuthor {
  author: string;
  et?: string; // English translation
  ht?: string; // Hindi translation
  ec?: string; // English commentary
  hc?: string; // Hindi commentary
  sc?: string; // Sanskrit commentary
}

export interface Slok {
  _id: string;
  chapter: number;
  verse: number;
  slok: string;
  transliteration: string;
  tej?: SlokAuthor;
  siva?: SlokAuthor;
  purohit?: SlokAuthor;
  chinmay?: SlokAuthor;
  san?: SlokAuthor;
  adi?: SlokAuthor;
  gambir?: SlokAuthor;
  madhav?: SlokAuthor;
  anand?: SlokAuthor;
  rams?: SlokAuthor;
  rpierce?: SlokAuthor;
  abpierce?: SlokAuthor;
  jaya?: SlokAuthor;
  vallabh?: SlokAuthor;
  ms?: SlokAuthor;
  spierce?: SlokAuthor;
  [key: string]: unknown;
}

export async function fetchChapters(): Promise<ChapterInfo[]> {
  const res = await fetch(`${BASE_URL}/chapters`);
  if (!res.ok) throw new Error("Failed to fetch chapters");
  return res.json();
}

export async function fetchChapter(ch: number): Promise<ChapterInfo> {
  const res = await fetch(`${BASE_URL}/chapter/${ch}`);
  if (!res.ok) throw new Error(`Failed to fetch chapter ${ch}`);
  return res.json();
}

export async function fetchSlok(ch: number, sl: number): Promise<Slok> {
  const res = await fetch(`${BASE_URL}/slok/${ch}/${sl}`);
  if (!res.ok) throw new Error(`Failed to fetch slok ${ch}:${sl}`);
  return res.json();
}
