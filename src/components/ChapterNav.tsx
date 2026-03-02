import { Link } from "react-router-dom";

interface ChapterNavProps {
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
}

const ChapterNav = ({ prevChapter, nextChapter }: ChapterNavProps) => {
  return (
    <nav className="chapter-nav">
      <div className="chapter-nav__side">
        {prevChapter && (
          <Link to={`/${prevChapter.slug}`} className="nav-link chapter-nav__link">
            <span className="chapter-nav__arrow">←</span>
            <span className="chapter-nav__label">{prevChapter.title}</span>
          </Link>
        )}
      </div>

      <Link to="/" className="nav-link chapter-nav__center">
        Contents
      </Link>

      <div className="chapter-nav__side--end">
        {nextChapter && (
          <Link to={`/${nextChapter.slug}`} className="nav-link chapter-nav__link">
            <span className="chapter-nav__label">{nextChapter.title}</span>
            <span className="chapter-nav__arrow">→</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ChapterNav;
