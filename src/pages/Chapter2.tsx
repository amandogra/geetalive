import ChapterLayout from "@/components/ChapterLayout";
import { getAdjacentChapters } from "@/data/chapters";

const Chapter2 = () => {
  const { prev, next } = getAdjacentChapters("chapter-2");

  return (
    <ChapterLayout
      chapterNumber={2}
      title="Shakuntala"
      prevChapter={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextChapter={next ? { slug: next.slug, title: next.title } : undefined}
    >
      <p className="drop-cap">
        Before we trace the direct lineage that leads to our tale's heroes, we 
        must speak of an earlier love—that of King Dushyanta and the maiden 
        Shakuntalā, for it was from their union that the Bhārata dynasty truly 
        began.
      </p>

      <p>
        King Dushyanta, riding through a great forest in pursuit of game, came 
        upon the hermitage of the sage Kanva. The sage was away, but in his 
        garden sat a young woman of such luminous beauty that the king forgot 
        his hunt, forgot his kingdom, forgot everything but her face.
      </p>

      <h2>The Hermitage in the Forest</h2>

      <p>
        Her name was Shakuntalā. She had been born of the union between the 
        celestial nymph Menakā and the great sage Vishvāmitra. Abandoned at 
        birth and found among <em className="sanskrit">shakunta</em> birds, she 
        had been raised by Kanva as his own daughter.
      </p>

      <blockquote className="book-quote">
        Tell me, beautiful one, to what family do you belong? For surely a 
        jewel such as you could not have been born in an ascetic's hermitage.
      </blockquote>

      <p>
        Shakuntalā told him her story, and love kindled between them like fire 
        between dry wood. There, in the forest, with the trees as their 
        witnesses and the <em className="sanskrit">gāndharva</em> rites as their 
        ceremony—a marriage of mutual love, requiring no priest—they wed.
      </p>

      <h2>The Ring and the Curse</h2>

      <p>
        Dushyanta departed, leaving Shakuntalā with a royal ring as a token of 
        his promise to send for her. But weeks passed, then months, and no 
        summons came. Unknown to Shakuntalā, she had unwittingly offended the 
        irascible sage Durvāsas by failing to attend to him while lost in 
        thoughts of her beloved. The sage cursed her: the one she dreamed of 
        would forget her entirely.
      </p>

      <p>
        When at last she journeyed to claim her place as queen, Dushyanta 
        looked upon her with the eyes of a stranger. The ring that might have 
        restored his memory had been swallowed by a fish during her journey. 
        Shakuntalā was cast out in shame.
      </p>

      <h2>Bharata, the Mighty</h2>

      <p>
        In the wilderness, Shakuntalā gave birth to a son of extraordinary 
        strength. Even as a child, he would play with lion cubs and count 
        the teeth of tigers. She named him <em className="sanskrit">Sarvadamana</em>, 
        "he who subdues all."
      </p>

      <p>
        Years later, a fisherman found the royal ring in the belly of his catch 
        and brought it to the palace. The moment Dushyanta saw it, memory 
        flooded back like the monsoon breaking. He searched for Shakuntalā and 
        found her in the forest with their son. United at last, they returned 
        to the kingdom.
      </p>

      <p>
        Sarvadamana was crowned and given a new name: <em className="sanskrit">Bharata</em>, 
        meaning "the cherished one." His rule was so glorious that the entire 
        subcontinent came to bear his name—<em className="sanskrit">Bhārata</em>. 
        And all the kings who descend from him, including those whose rivalry 
        will tear a kingdom apart, are called the Bhāratas.
      </p>
    </ChapterLayout>
  );
};

export default Chapter2;
