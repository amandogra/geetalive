import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitaIndex from "./pages/GitaIndex";
import GitaChapter from "./pages/GitaChapter";
import GitaVerse from "./pages/GitaVerse";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GitaIndex />} />
      <Route path="/chapter/:ch" element={<GitaChapter />} />
      <Route path="/chapter/:ch/verse/:v" element={<GitaVerse />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ThemeToggle />
  </BrowserRouter>
);

export default App;
