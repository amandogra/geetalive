import ChapterLayout from "@/components/ChapterLayout";
import { getAdjacentChapters } from "@/data/chapters";

const Chapter4 = () => {
  const { prev, next } = getAdjacentChapters("chapter-4");

  return (
    <ChapterLayout
      chapterNumber={4}
      title="The Birth of the Princes"
      prevChapter={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextChapter={next ? { slug: next.slug, title: next.title } : undefined}
    >
      <p className="drop-cap">
        Satyavatī bore Shāntanu two sons: Chitrāngada and Vichitravīrya. After 
        Shāntanu's death, Bhīshma placed the elder on the throne—but 
        Chitrāngada was killed in battle against a Gandharva who bore the same 
        name and resented sharing it with a mortal.
      </p>

      <p>
        Young Vichitravīrya became king, and Bhīshma, ever the protector of the 
        throne he would never occupy, set about finding him suitable brides.
      </p>

      <h2>The Abduction of the Princesses</h2>

      <p>
        In the kingdom of Kashi, a <em className="sanskrit">svayamvara</em> was 
        announced—a ceremony where a princess chooses her husband from among 
        assembled suitors. The king of Kashi had three daughters: Ambā, Ambikā, 
        and Ambālikā.
      </p>

      <p>
        Bhīshma arrived uninvited. Standing alone against all the princes 
        gathered there, he declared his intent to take all three princesses 
        for his brother. When the kings rushed to stop him, he defeated them 
        one by one, loading the princesses into his chariot and racing back 
        to Hastināpura.
      </p>

      <blockquote className="book-quote">
        Such was Bhīshma's prowess that a hundred kings could not stand against 
        him. He was Shāntanu's son, trained by Parasurāma himself, armed with 
        celestial weapons.
      </blockquote>

      <p>
        But Ambā, the eldest, confessed that she had already given her heart 
        to King Shālva of Saubha. Bhīshma honorably released her—only for 
        Shālva to reject her, saying she had been touched by another. Ambā's 
        love curdled to hatred, and she vowed vengeance on Bhīshma. That 
        vengeance would come, many years later, in a form none could foresee.
      </p>

      <h2>A Kingdom Without Heirs</h2>

      <p>
        Vichitravīrya married Ambikā and Ambālikā, but he was a sickly youth. 
        Before he could father children, he succumbed to consumption. The 
        throne of Hastināpura stood empty, the dynasty facing extinction.
      </p>

      <p>
        Satyavatī, desperate, revealed to Bhīshma a secret she had kept for 
        decades: before her marriage to Shāntanu, she had borne a son to the 
        sage Parāshara. That son was Vyāsa—the same sage who would one day 
        compose the Mahābhārata itself.
      </p>

      <p>
        She summoned Vyāsa and asked him to perform <em className="sanskrit">niyoga</em>—the 
        ancient practice of fathering children on behalf of a dead relative. 
        Vyāsa agreed, but he was a wild-looking ascetic, his hair matted, his 
        body unwashed, his presence overwhelming.
      </p>

      <h2>The Three Sons of Vyāsa</h2>

      <p>
        When Ambikā beheld Vyāsa approaching her chamber, she closed her eyes 
        in terror. The son born of this union was <em className="sanskrit">Dhritarāshtra</em>—a 
        name meaning "one who holds the kingdom"—but he was born blind, 
        reflecting his mother's closed eyes.
      </p>

      <p>
        Ambālikā, warned not to close her eyes, turned pale with fear instead. 
        Her son <em className="sanskrit">Pāndu</em>—"the pale one"—was born 
        sickly, his skin forever marked by his mother's terror.
      </p>

      <p>
        Satyavatī begged Vyāsa to try once more with Ambikā, hoping for a 
        healthy heir. But Ambikā, unable to face the sage again, sent her 
        maidservant in her place. This woman showed no fear, welcoming Vyāsa 
        with respect and devotion. Her son, <em className="sanskrit">Vidura</em>, 
        was born perfect in body and mind—wise beyond measure, the very 
        embodiment of <em className="sanskrit">dharma</em>. But as the son of a 
        servant, he could never claim the throne.
      </p>

      <h2>The Seeds of Conflict</h2>

      <p>
        And so the kingdom had its heirs: a blind prince, a pale prince, and a 
        wise counselor who could never be king. Bhīshma raised all three with 
        equal care, but the question of succession hung over Hastināpura like 
        a storm cloud.
      </p>

      <p>
        Dhritarāshtra, the eldest, should have been king—but his blindness 
        made him unfit to rule. Pāndu took the throne instead. Yet 
        Dhritarāshtra's hundred sons and Pāndu's five would one day face each 
        other across a battlefield, and the question of who was the rightful 
        heir would be answered in blood.
      </p>

      <blockquote className="book-quote">
        The Ādi Parva ends here, with the stage set but the players not yet 
        born. The Kauravas and Pāndavas, whose rivalry will consume the world, 
        are still only possibilities—seeds waiting in dark soil for the rains 
        that will make them grow.
      </blockquote>

      <p>
        And yet everything that follows—the dice game, the exile, the war that 
        kills millions—has its roots in these beginnings. In Bhīshma's terrible 
        vow. In the fears of two queens. In the curse of a rejected princess. 
        In the destiny written by the sage who saw it all and wept.
      </p>

      <div className="text-center mt-16">
        <p className="italic text-muted-foreground">
          Thus ends the retelling of the Ādi Parva,<br />
          the Book of Beginnings.
        </p>
      </div>
    </ChapterLayout>
  );
};

export default Chapter4;
