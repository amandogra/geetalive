import { Link } from "react-router-dom";

interface ChapterNavProps {
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
}

const ChapterNav = ({ prevChapter, nextChapter }: ChapterNavProps) => {
  return (
    <nav className="flex justify-between items-center py-12 px-6 max-w-3xl mx-auto border-t border-border mt-16">
      <div className="flex-1">
        {prevChapter && (
          <Link 
            to={`/${prevChapter.slug}`}
            className="nav-link group flex items-center gap-2"
          >
            <span className="text-lg">←</span>
            <span className="group-hover:underline">{prevChapter.title}</span>
          </Link>
        )}
      </div>
      
      <Link 
        to="/" 
        className="nav-link text-xs tracking-[0.2em] uppercase hover:underline"
      >
        Contents
      </Link>
      
      <div className="flex-1 text-right">
        {nextChapter && (
          <Link 
            to={`/${nextChapter.slug}`}
            className="nav-link group flex items-center justify-end gap-2"
          >
            <span className="group-hover:underline">{nextChapter.title}</span>
            <span className="text-lg">→</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ChapterNav;
