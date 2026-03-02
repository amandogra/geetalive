import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div className="page-shell">
        <BookHeader currentChapter="Loading…" />
        <div className="loading-state">Loading chapter…</div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="page-shell">
        <BookHeader />
        <div className="loading-state">Chapter not found.</div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <BookHeader currentChapter={chapter.translation} />

      <article className="chapter-article">
        <header className="chapter-header">
          <h1 className="chapter-title">{chapter.translation}</h1>
          <p className="chapter-label">CHAPTER {chapter.chapter_number}</p>
          <p className="sanskrit">{chapter.name}</p>
          <p className="chapter-meaning">{chapter.meaning.en}</p>
        </header>

        <div className="chapter-divider" />

        {/* Chapter Summary */}
        <div className="prose-book chapter-summary">
          <p className="drop-cap">{chapter.summary.en}</p>
        </div>

        <div className="chapter-divider" />

        {/* Verses */}
        <div className="prose-book">
          <h2 className="verses-heading">Verses</h2>

          <div className="verse-list">
            {sloks.map((slok) => (
              <div key={slok._id}>
                <button
                  onClick={() =>
                    setExpandedSlok(expandedSlok === slok.verse ? null : slok.verse)
                  }
                  className="verse-button"
                >
                  <div className="verse-meta">
                    <span className="toc-number verse-number">{slok.chapter}.{slok.verse}</span>
                  </div>
                  <div className="verse-content">
                    <p className="verse-slok">{slok.slok}</p>
                    <p className="verse-transliteration">{slok.transliteration}</p>
                  </div>
                </button>

                {expandedSlok === slok.verse && (
                  <div className="commentary-panel">
                    <h3 className="commentary-heading">Choose the commentry from one of the following authors</h3>
                    {getAuthorCommentaries(slok).map((commentary) => (
                      <details key={commentary.key} className="commentary-item">
                        <summary className="commentary-author">{commentary.author}</summary>
                        {commentary.et && (
                          <p className="commentary-text">{commentary.et}</p>
                        )}
                        {commentary.ec && (
                          <p className="commentary-text">{commentary.ec}</p>
                        )}
                        {commentary.ht && (
                          <p className="commentary-text">{commentary.ht}</p>
                        )}
                        {commentary.hc && (
                          <p className="commentary-text">{commentary.hc}</p>
                        )}
                        {commentary.sc && (
                          <p className="commentary-text">{commentary.sc}</p>
                        )}
                      </details>
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
