import ChapterLayout from "@/components/ChapterLayout";
import { getAdjacentChapters } from "@/data/chapters";

const Chapter1 = () => {
  const { prev, next } = getAdjacentChapters("chapter-1");

  return (
    <ChapterLayout
      chapterNumber={1}
      title="The Origins"
      prevChapter={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextChapter={next ? { slug: next.slug, title: next.title } : undefined}
    >
      <p className="drop-cap">
        In the forest of Naimisha, where sages gathered to perform a twelve-year 
        sacrifice, the storyteller Ugrashravas arrived one day, fresh from a 
        great gathering of kings. The sages, eager for tales, asked him to share 
        what he had heard. And so, layer within layer, story within story, the 
        Mahābhārata began to unfold.
      </p>

      <p>
        Ugrashravas recounted how the sage Vyāsa—born of the union between the 
        ascetic Parāshara and the fisherman's daughter Satyavatī—had composed 
        this mighty epic. Vyāsa was no ordinary poet. He was a <em className="sanskrit">rishi</em>, 
        possessed of divine sight, and his work would contain all knowledge of the universe.
      </p>

      <h2>The Scribe of the Gods</h2>

      <p>
        So vast was Vyāsa's vision that he sought a scribe worthy of transcribing 
        it. Only the elephant-headed god Ganesha, remover of obstacles and lord 
        of beginnings, proved capable of the task. But Ganesha made a condition: 
        his pen must never stop moving. Vyāsa agreed, with his own condition—that 
        Ganesha must understand each verse before writing it.
      </p>

      <blockquote className="book-quote">
        And so the sage would compose verses of such profound complexity that 
        even the god of wisdom had to pause and contemplate, giving Vyāsa time 
        to compose the next.
      </blockquote>

      <p>
        This divine collaboration produced a work that would endure through 
        ages, passed down through the mouths of bards and the pages of 
        manuscripts, surviving where empires crumbled.
      </p>

      <h2>The Curse That Began It All</h2>

      <p>
        The story of the Bhāratas—from whom the epic takes its name—begins with 
        a curse. King Mahābhisha, a ruler of great virtue, had earned his place 
        in Indra's heaven. But when the celestial river Gangā visited the court 
        of the gods, her garments slipped in a gust of wind. While others 
        averted their eyes, Mahābhisha gazed upon her beauty.
      </p>

      <p>
        For this transgression, both were cursed to take birth as mortals. 
        Mahābhisha would become King Shāntanu of Hastināpura. And Gangā herself 
        would descend to earth, setting in motion a chain of events that would 
        lead, generations hence, to the greatest war the world had ever seen.
      </p>

      <p>
        But that war lay far in the future. First, there would be love and 
        tragedy, vows that could not be broken, and children born under strange 
        and wondrous circumstances. The seeds of destiny were being planted in 
        soil none could see.
      </p>
    </ChapterLayout>
  );
};

export default Chapter1;
