import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookHeader from "@/components/BookHeader";
import ChapterNav from "@/components/ChapterNav";
import { fetchChapter, fetchSlok, type ChapterInfo, type Slok } from "@/lib/api";

const GitaChapter = () => {
  const { ch } = useParams<{ ch: string }>();
  const chNum = Number(ch);
  const [chapter, setChapter] = useState<ChapterInfo | null>(null);
  const [sloks, setSloks] = useState<Slok[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedSlok, setExpandedSlok] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    setExpandedSlok(null);
    setSloks([]);

    fetchChapter(chNum)
      .then(async (chapData) => {
        setChapter(chapData);
        // Fetch all sloks for this chapter
        const slokPromises = Array.from(
          { length: chapData.verses_count },
          (_, i) => fetchSlok(chNum, i + 1)
        );
        const fetchedSloks = await Promise.all(slokPromises);
        setSloks(fetchedSloks);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [chNum]);

  const prevChapter = chNum > 1 ? { slug: `chapter/${chNum - 1}`, title: `Chapter ${chNum - 1}` } : undefined;
  const nextChapter = chNum < 18 ? { slug: `chapter/${chNum + 1}`, title: `Chapter ${chNum + 1}` } : undefined;

  const getAuthorCommentaries = (slok: Slok) => {
    const knownKeys = ["_id", "chapter", "verse", "slok", "transliteration"];
    return Object.entries(slok)
      .filter(([key, val]) => !knownKeys.includes(key) && val && typeof val === "object" && (val as SlokAuthorLike).author)
      .map(([key, val]) => ({ key, ...(val as SlokAuthorLike) }));
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <BookHeader currentChapter="Loading…" />
        <div className="py-32 text-center text-muted-foreground italic">
          Loading chapter…
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="min-h-screen">
        <BookHeader />
        <div className="py-32 text-center text-muted-foreground">
          Chapter not found.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BookHeader currentChapter={chapter.translation} />

      <article className="py-16">
        <header className="text-center mb-16">
          <h1 className="chapter-title text-5xl md:text-6xl lg:text-7xl mb-4">
            {chapter.translation}
          </h1>
          <p className="text-chapter-number font-display tracking-[0.3em] text-sm">
            CHAPTER {chapter.chapter_number}
          </p>
          <p className="sanskrit text-xl mt-4">{chapter.name}</p>
          <p className="text-muted-foreground italic mt-2">{chapter.meaning.en}</p>
        </header>

        <div className="chapter-divider" />

        {/* Chapter Summary */}
        <div className="prose-book mb-16">
          <p className="drop-cap">{chapter.summary.en}</p>
        </div>

        <div className="chapter-divider" />

        {/* Verses */}
        <div className="prose-book">
          <h2 className="text-center mb-12">Verses</h2>

          <div className="space-y-6">
            {sloks.map((slok) => (
              <div
                key={slok._id}
                className="border border-border/50 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedSlok(expandedSlok === slok.verse ? null : slok.verse)
                  }
                  className="w-full text-left p-5 hover:bg-secondary/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="toc-number text-sm">{slok.verse}</span>
                    <span className="font-serif font-semibold text-sm text-muted-foreground">
                      {slok._id}
                    </span>
                  </div>
                  <p className="font-serif leading-relaxed whitespace-pre-line">
                    {slok.slok}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2 italic whitespace-pre-line">
                    {slok.transliteration}
                  </p>
                </button>

                {expandedSlok === slok.verse && (
                  <div className="border-t border-border/50 p-5 bg-secondary/10 space-y-6">
                    <h3 className="text-center mb-4">Commentaries</h3>
                    {getAuthorCommentaries(slok).map((commentary) => (
                      <div
                        key={commentary.key}
                        className="border-b border-border/30 pb-4 last:border-b-0"
                      >
                        <h4 className="font-display text-sm tracking-wider uppercase mb-2 text-accent">
                          {commentary.author}
                        </h4>
                        {commentary.et && (
                          <p className="mb-2">{commentary.et}</p>
                        )}
                        {commentary.ht && (
                          <p className="mb-2 text-muted-foreground">{commentary.ht}</p>
                        )}
                        {commentary.ec && (
                          <details className="mt-2">
                            <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                              English Commentary
                            </summary>
                            <p className="mt-2 text-sm">{commentary.ec}</p>
                          </details>
                        )}
                        {commentary.hc && (
                          <details className="mt-2">
                            <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                              Hindi Commentary
                            </summary>
                            <p className="mt-2 text-sm">{commentary.hc}</p>
                          </details>
                        )}
                        {commentary.sc && (
                          <details className="mt-2">
                            <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                              Sanskrit Commentary
                            </summary>
                            <p className="mt-2 text-sm">{commentary.sc}</p>
                          </details>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>

      <ChapterNav prevChapter={prevChapter} nextChapter={nextChapter} />
    </div>
  );
};

interface SlokAuthorLike {
  author: string;
  et?: string;
  ht?: string;
  ec?: string;
  hc?: string;
  sc?: string;
  [key: string]: unknown;
}

export default GitaChapter;
