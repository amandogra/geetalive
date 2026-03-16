import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookHeader from "@/components/BookHeader";
import { fetchChapter, fetchSlok, type ChapterInfo, type Slok } from "@/lib/api";

interface SlokAuthorLike {
  author: string;
  et?: string;
  ht?: string;
  ec?: string;
  hc?: string;
  sc?: string;
  [key: string]: unknown;
}

const GitaVerse = () => {
  const { ch, v } = useParams<{ ch: string; v: string }>();
  const chNum = Number(ch);
  const verseNum = Number(v);
  const [chapter, setChapter] = useState<ChapterInfo | null>(null);
  const [slok, setSlok] = useState<Slok | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchChapter(chNum), fetchSlok(chNum, verseNum)])
      .then(([chapData, slokData]) => {
        setChapter(chapData);
        setSlok(slokData);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [chNum, verseNum]);

  const getAuthorCommentaries = (s: Slok) => {
    const knownKeys = ["_id", "chapter", "verse", "slok", "transliteration"];
    return Object.entries(s)
      .filter(
        ([key, val]) =>
          !knownKeys.includes(key) &&
          val &&
          typeof val === "object" &&
          (val as SlokAuthorLike).author
      )
      .map(([key, val]) => ({ key, ...(val as SlokAuthorLike) }));
  };

  const prevVerse =
    chapter && verseNum > 1
      ? { ch: chNum, v: verseNum - 1 }
      : null;
  const nextVerse =
    chapter && verseNum < chapter.verses_count
      ? { ch: chNum, v: verseNum + 1 }
      : null;

  if (loading) {
    return (
      <div className="page-shell">
        <BookHeader currentChapter="Loading…" />
        <div className="loading-state">Loading verse…</div>
      </div>
    );
  }

  if (!chapter || !slok) {
    return (
      <div className="page-shell">
        <BookHeader />
        <div className="loading-state">Verse not found.</div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <BookHeader currentChapter={chapter.translation} />

      <article className="chapter-article">
        <header className="chapter-header">
          <h1 className="chapter-title">
            {chNum}.{verseNum}
          </h1>
          <p className="chapter-label">
            <Link to={`/chapter/${chNum}`}>{chapter.translation}</Link>
          </p>
        </header>

        <div className="chapter-divider" />

        <div className="prose-book">
          <p className="verse-slok">{slok.slok}</p>
          <p className="verse-transliteration">{slok.transliteration}</p>
        </div>

        <div className="chapter-divider" />

        <div className="prose-book">
          <h2 className="verses-heading">Commentaries</h2>
          {getAuthorCommentaries(slok).map((commentary) => (
            <details key={commentary.key} className="commentary-item">
              <summary className="commentary-author">
                {commentary.author}
              </summary>
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
      </article>

      <nav className="chapter-nav">
        <div className="chapter-nav__side">
          {prevVerse && (
            <Link
              to={`/chapter/${prevVerse.ch}/verse/${prevVerse.v}`}
              className="nav-link chapter-nav__link"
            >
              <span className="chapter-nav__arrow">←</span>
              <span className="chapter-nav__label">
                Verse {prevVerse.v}
              </span>
            </Link>
          )}
        </div>

        <Link to={`/chapter/${chNum}`} className="nav-link chapter-nav__center">
          All Verses
        </Link>

        <div className="chapter-nav__side--end">
          {nextVerse && (
            <Link
              to={`/chapter/${nextVerse.ch}/verse/${nextVerse.v}`}
              className="nav-link chapter-nav__link"
            >
              <span className="chapter-nav__label">
                Verse {nextVerse.v}
              </span>
              <span className="chapter-nav__arrow">→</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default GitaVerse;
