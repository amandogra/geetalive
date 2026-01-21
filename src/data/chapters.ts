export interface Chapter {
  slug: string;
  number?: number;
  title: string;
  subtitle?: string;
}

export const chapters: Chapter[] = [
  {
    slug: "introduction",
    title: "Introduction",
    subtitle: "The Book of Beginnings"
  },
  {
    slug: "chapter-1",
    number: 1,
    title: "The Origins",
    subtitle: "How the Mahābhārata came to be told"
  },
  {
    slug: "chapter-2",
    number: 2,
    title: "Shakuntala",
    subtitle: "The love of King Dushyanta"
  },
  {
    slug: "chapter-3",
    number: 3,
    title: "The Vow of Bhīshma",
    subtitle: "A sacrifice for the throne"
  },
  {
    slug: "chapter-4",
    number: 4,
    title: "The Birth of the Princes",
    subtitle: "Pāndu, Dhritarāshtra, and Vidura"
  }
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find(c => c.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = chapters.findIndex(c => c.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : undefined,
    next: index < chapters.length - 1 ? chapters[index + 1] : undefined
  };
}
