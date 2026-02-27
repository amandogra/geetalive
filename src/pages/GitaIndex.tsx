import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookHeader from "@/components/BookHeader";
import { fetchChapters, type ChapterInfo } from "@/lib/api";

const GitaIndex = () => {
  const [chapters, setChapters] = useState<ChapterInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChapters()
      .then(setChapters)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Cover */}
      <section className="book-header flex-1 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="book-title text-5xl md:text-7xl lg:text-8xl mb-6 text-[hsl(var(--book-header-text))]">
          Shreemad Bhagavad Gita
        </h1>
        <p className="book-subtitle mb-2">
          The Song of God
        </p>
        <p className="tracking-[0.3em] uppercase text-[hsl(var(--book-header-text))]/60 mt-8">
          18 Chapters · 700 Verses
        </p>
      </section>

      {/* Table of Contents */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl tracking-[0.2em] text-center mb-16 text-muted-foreground">
            CONTENTS
          </h2>

          {loading ? (
            <p className="text-center text-muted-foreground italic">Loading chapters…</p>
          ) : (
            <nav>
              <ul className="space-y-6">
                {chapters.map((chapter) => (
                  <li key={chapter.chapter_number}>
                    <Link
                      to={`/chapter/${chapter.chapter_number}`}
                      className="group flex items-baseline gap-4 py-3 border-b border-border/50 hover:border-foreground/30 transition-colors"
                    >
                      <span className="toc-number w-8">
                        {chapter.chapter_number}
                      </span>
                      <span className="flex-1">
                        <span className="font-serif group-hover:text-accent transition-colors">
                          {chapter.translation}
                        </span>
                        <span className="block text-muted-foreground mt-1 italic">
                          {chapter.meaning.en}
                        </span>
                        <span className="block text-muted-foreground text-xl mt-0.5 sanskrit">
                          {chapter.name}
                        </span>
                      </span>
                      <span className="text-muted-foreground">
                        {chapter.verses_count} verses
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p className="italic">
          Powered by <a href="https://vedicscriptures.github.io">Vedic Scriptures API</a>
        </p>
        <p className="mt-2 tracking-wider">
          A web book designed to be read
        </p>
      </footer>
    </div>
  );
};

export default GitaIndex;
