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
  nextChapter 
}: ChapterLayoutProps) => {
  return (
    <div className="min-h-screen">
      <BookHeader currentChapter={title} />
      
      <article className="py-16">
        <header className="text-center mb-16">
          <h1 className="chapter-title text-5xl md:text-6xl lg:text-7xl mb-4">
            {title}
          </h1>
          {chapterNumber !== undefined && (
            <p className="text-chapter-number font-display tracking-[0.3em] text-sm">
              CHAPTER {chapterNumber}
            </p>
          )}
        </header>
        
        <div className="chapter-divider" />
        
        <div className="prose-book">
          {children}
        </div>
      </article>
      
      <ChapterNav prevChapter={prevChapter} nextChapter={nextChapter} />
    </div>
  );
};

export default ChapterLayout;
