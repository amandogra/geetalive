import { Link } from "react-router-dom";

interface BookHeaderProps {
  currentChapter?: string;
}

const BookHeader = ({ currentChapter }: BookHeaderProps) => {
  return (
    <header className="book-header py-3 text-center">
      <Link 
        to="/" 
        className="text-sm tracking-[0.25em] uppercase font-serif opacity-90 hover:opacity-100 transition-opacity"
      >
        {currentChapter ? "Adi Parva — The Book of Beginnings" : "Mahābhārata"}
      </Link>
    </header>
  );
};

export default BookHeader;
