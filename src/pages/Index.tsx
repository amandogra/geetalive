import { Link } from "react-router-dom";
import BookHeader from "@/components/BookHeader";
import { chapters } from "@/data/chapters";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Cover */}
      <section className="book-header flex-1 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="book-title text-5xl md:text-7xl lg:text-8xl mb-6 text-[hsl(var(--book-header-text))]">
          Adi Parva
        </h1>
        <p className="book-subtitle text-xl md:text-2xl text-[hsl(var(--book-header-text))]/80 mb-2">
          The Book of Beginnings
        </p>
        <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--book-header-text))]/60 mt-8">
          From the Mahābhārata
        </p>
      </section>

      {/* Table of Contents */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl tracking-[0.2em] text-center mb-16 text-muted-foreground">
            CONTENTS
          </h2>
          
          <nav>
            <ul className="space-y-6">
              {chapters.map((chapter, index) => (
                <li key={chapter.slug}>
                  <Link 
                    to={`/${chapter.slug}`}
                    className="group flex items-baseline gap-4 py-3 border-b border-border/50 hover:border-foreground/30 transition-colors"
                  >
                    <span className="toc-number text-lg w-8">
                      {chapter.number !== undefined ? chapter.number : '—'}
                    </span>
                    <span className="flex-1">
                      <span className="font-serif text-xl group-hover:text-accent transition-colors">
                        {chapter.title}
                      </span>
                      {chapter.subtitle && (
                        <span className="block text-muted-foreground text-base mt-1 italic">
                          {chapter.subtitle}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p className="italic">
          Retold from the ancient Sanskrit epic
        </p>
        <p className="mt-2 tracking-wider">
          A web book designed to be read
        </p>
      </footer>
    </div>
  );
};

export default Index;
