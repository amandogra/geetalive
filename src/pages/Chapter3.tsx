import ChapterLayout from "@/components/ChapterLayout";
import { getAdjacentChapters } from "@/data/chapters";

const Chapter3 = () => {
  const { prev, next } = getAdjacentChapters("chapter-3");

  return (
    <ChapterLayout
      chapterNumber={3}
      title="The Vow of Bhīshma"
      prevChapter={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextChapter={next ? { slug: next.slug, title: next.title } : undefined}
    >
      <p className="drop-cap">
        Many generations after Bharata, there ruled in Hastināpura a king named 
        Shāntanu. He was virtuous and handsome, beloved by his people, but 
        touched by a strange fate. Walking one day along the banks of the 
        Gangā, he encountered a woman of unearthly beauty—the goddess Gangā 
        herself, descended to earth to fulfill the curse we spoke of earlier.
      </p>

      <p>
        Shāntanu was captivated beyond reason. He begged her to be his wife. 
        She agreed, but on one condition: he must never question her actions, 
        no matter how terrible they seemed. If he did, she would leave him 
        forever.
      </p>

      <h2>The Seven Drowned Sons</h2>

      <p>
        Gangā bore Shāntanu seven sons. And each time, she carried the newborn 
        to the river's edge and drowned him in the waters. Shāntanu watched in 
        horror but held his tongue, bound by his promise.
      </p>

      <blockquote className="book-quote">
        Who is this woman I have married? What strange dharma does she follow 
        that demands the death of innocents? And yet, if I speak, I lose her.
      </blockquote>

      <p>
        But when the eighth son was born, Shāntanu could bear it no more. As 
        Gangā walked toward the river, he cried out: "Stop! What mother kills 
        her own children?" Gangā paused and turned. "You have broken your vow," 
        she said. "Now I must leave. But this son shall live, for he is meant 
        for great things."
      </p>

      <p>
        She revealed that their sons had been the eight Vasus, minor gods cursed 
        to take mortal birth. By drowning them, she had released them quickly 
        from their curse. Only the eighth, who bore the greatest guilt, was 
        destined to live a long mortal life.
      </p>

      <h2>Devavrata, the God-Given</h2>

      <p>
        Gangā took the boy to raise among the gods. He learned the arts of war 
        from Parasurāma, the brahmin warrior. He mastered the Vedas and all 
        branches of knowledge. When he returned to Hastināpura as a young man, 
        he was named <em className="sanskrit">Devavrata</em>, meaning "devoted 
        to the gods."
      </p>

      <p>
        Shāntanu was overjoyed to have his son back, and Devavrata was declared 
        heir to the throne. For years, father and son ruled in harmony. But 
        fate had other plans.
      </p>

      <h2>The Fisher-King's Demand</h2>

      <p>
        One day, while wandering by the Yamunā river, Shāntanu caught the scent 
        of an intoxicating fragrance and followed it to its source: a beautiful 
        young woman named Satyavatī, who ferried travelers across the river. 
        Though she was a fisherman's daughter, she carried an otherworldly 
        perfume, a gift from the sage Parāshara.
      </p>

      <p>
        Shāntanu fell hopelessly in love and asked her father for her hand. But 
        the fisherman was shrewd. "My daughter will marry you," he said, "only 
        if you promise that her sons—not Devavrata—will inherit the throne."
      </p>

      <p>
        Shāntanu refused. He could not disinherit his worthy son. But he 
        returned to the palace consumed by lovesickness, wasting away before 
        his court.
      </p>

      <h2>The Terrible Oath</h2>

      <p>
        Devavrata noticed his father's sorrow and learned its cause. Without 
        hesitation, he went to the fisherman himself. "I renounce my claim to 
        the throne," he declared. "Satyavatī's sons shall rule after my father."
      </p>

      <p>
        But the fisherman pressed further. "You may renounce the throne, but 
        your sons might claim it."
      </p>

      <p>
        And so Devavrata made the most terrible vow ever spoken in that age: 
        he swore never to marry, never to father children, to remain celibate 
        until his dying breath so that no descendant of his could ever 
        challenge Satyavatī's line.
      </p>

      <blockquote className="book-quote">
        At that moment, the heavens opened. Flowers rained from the sky. The 
        gods themselves cried out: "This is Bhīshma! The one who has taken a 
        terrible vow!"
      </blockquote>

      <p>
        From that day forward, Devavrata was known as <em className="sanskrit">Bhīshma</em>, 
        "the terrible one," for the ferocity of his sacrifice. And his father, 
        moved beyond words, granted him a boon: Bhīshma would die only when he 
        chose to, never before.
      </p>

      <p>
        This gift would prove both blessing and curse. For Bhīshma would live 
        to see generations rise and fall, would witness the very destruction 
        his sacrifice was meant to prevent, and would lie on a bed of arrows 
        for fifty-eight days, waiting for the right moment to finally die.
      </p>
    </ChapterLayout>
  );
};

export default Chapter3;
