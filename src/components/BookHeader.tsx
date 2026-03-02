import { Link } from "react-router-dom";

interface BookHeaderProps {
  currentChapter?: string;
}

const BookHeader = ({ currentChapter }: BookHeaderProps) => {
  return (
    <header className="book-header">
      <Link to="/" className="book-header-link">
        {currentChapter ? "Shreemad Bhagavad Gita" : "Bhagavad Gita"}
      </Link>
    </header>
  );
};

export default BookHeader;
