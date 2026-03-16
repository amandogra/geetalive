import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookHeader from "@/components/BookHeader";
import ChapterNav from "@/components/ChapterNav";
import { fetchChapter, fetchSlok, type ChapterInfo, type Slok } from "@/lib/api";

const GitaChapter = () => {
  const { ch } = useParams<{ ch: string }>();
  const chNum = Number(ch);
  const [chapter, setChapter] = useState<ChapterInfo | null>(null);
  const [sloks, setSloks] = useState<Slok[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedSlok, setExpandedSlok] = useState<Slok | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

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
                  onClick={() => {
                    setExpandedSlok(expandedSlok === slok ? null : slok)
                    dialogRef?.current?.showModal();
                  }}
                  className="verse-button"
                >
                  <div className="verse-content">
                    <p className="verse-slok">{slok.slok}</p>
                    <p className="verse-transliteration">{slok.transliteration}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </article>

      <dialog
        id="slokDescriptionDialog"
        className="slok-description-dialog"
        ref={dialogRef}
      >
        {expandedSlok && (() => {
          const prabhupada = getAuthorCommentaries(expandedSlok).find(
            (c) => c.author.includes("Prabhupada")
          );
          return (<>
            <h3 className="commentary-heading">Verse {expandedSlok.chapter}.{expandedSlok.verse}</h3>
            {prabhupada ? (
              <div className="commentary-item">
                <h4 className="commentary-author">{prabhupada.author}</h4>
                {prabhupada.et && <p className="commentary-text">{prabhupada.et}</p>}
                {prabhupada.ec && <p className="commentary-text">{prabhupada.ec}</p>}
              </div>
            ) : (
              <p className="commentary-text--muted">Commentary not available.</p>
            )}
            <Link to={`/chapter/${expandedSlok.chapter}/verse/${expandedSlok.verse}`}
              className="nav-link">
              <span className="chapter-nav__label">
                More details
              </span>
              <span className="chapter-nav__arrow">→</span>
            </Link>
          </>);
        })()}
        <form method="dialog">
          <button
            id="closeDialogButton"
            className="close-dialog-button"
            onClick={() => { dialogRef?.current?.close(); }}
          ><span className="sr-only">Close</span>X</button>
        </form>
      </dialog>
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
