import BookHeader from "./BookHeader";
import ChapterNav from "./ChapterNav";

interface ChapterLayoutProps {
  chapterNumber?: number;
  title: string;
  children: React.ReactNode;
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
}

const ChapterLayout = ({
  chapterNumber,
  title,
  children,
  prevChapter,
  nextChapter,
}: ChapterLayoutProps) => {
  return (
    <div className="page-shell">
      <BookHeader currentChapter={title} />

      <article className="chapter-article">
        <header className="chapter-header">
          <h1 className="chapter-title">{title}</h1>
          {chapterNumber !== undefined && (
            <p className="chapter-label">CHAPTER {chapterNumber}</p>
          )}
        </header>

        <div className="chapter-divider" />

        <div className="prose-book">{children}</div>
      </article>

      <ChapterNav prevChapter={prevChapter} nextChapter={nextChapter} />
    </div>
  );
};

export default ChapterLayout;
