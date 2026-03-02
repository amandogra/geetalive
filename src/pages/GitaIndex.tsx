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
    <div className="page-shell--flex">
      {/* Hero Cover */}
      <section className="book-header hero-cover">
        <h1 className="book-title">
          BhagavaD GitA
        </h1>
        <p className="book-subtitle">
          The Song of God
        </p>
        <p className="hero-tagline">
          18 Chapters · 700 Verses
        </p>
      </section>

      {/* Table of Contents */}
      <section className="toc-section">
        <div className="toc-container">
          <h2 className="toc-heading">CONTENTS</h2>

          {loading ? (
            <p className="loading-text">Loading chapters…</p>
          ) : (
            <nav>
              <ul className="toc-list">
                {chapters.map((chapter) => (
                  <li key={chapter.chapter_number}>
                    <Link to={`/chapter/${chapter.chapter_number}`} className="toc-item">
                      <span className="toc-number toc-item__number">
                        {chapter.chapter_number}
                      </span>
                      <span className="toc-item__body">
                        <span className="toc-item__title">
                          {chapter.translation}
                        </span>
                        <span className="toc-item__sanskrit sanskrit">
                          {chapter.name}
                        </span>
                        <span className="toc-item__meaning">
                          {chapter.meaning.en}
                        </span>
                      </span>
                      <span className="toc-item__verses">
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
      <footer className="site-footer">
        <p>
          <em>Powered by <a href="https://vedicscriptures.github.io">Vedic Scriptures API</a></em>
        </p>
        <p>
          A web book designed to be read
        </p>
      </footer>
    </div>
  );
};

export default GitaIndex;
