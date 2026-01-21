import ChapterLayout from "@/components/ChapterLayout";
import { getAdjacentChapters } from "@/data/chapters";

const Introduction = () => {
  const { prev, next } = getAdjacentChapters("introduction");

  return (
    <ChapterLayout
      title="Introduction"
      prevChapter={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextChapter={next ? { slug: next.slug, title: next.title } : undefined}
    >
      <p className="drop-cap">
        The Mahābhārata is not merely a story. It is an ocean of wisdom, a 
        tapestry woven from the threads of dharma, destiny, and the eternal 
        struggle between light and shadow. Written by the sage Vyāsa, it stands 
        as one of humanity's greatest literary achievements—containing over 
        one hundred thousand verses, making it nearly ten times the length of 
        Homer's Iliad and Odyssey combined.
      </p>

      <p>
        This vast epic is divided into eighteen books, or <em className="sanskrit">parvas</em>. 
        The first of these is the <em className="sanskrit">Ādi Parva</em>, the Book of 
        Beginnings. It is here that the seeds of the great war are planted, though they will 
        not flower for many generations. It is here that we meet the ancestors whose choices 
        will echo through time.
      </p>

      <blockquote className="book-quote">
        What is found here may be found elsewhere. What is not found here will 
        not be found elsewhere.
      </blockquote>

      <p>
        So said the sage Vyāsa of his own creation, and generations of readers 
        have found this to be true. Within the Mahābhārata, one finds not only 
        tales of war and heroism but also philosophy, law, medicine, astronomy, 
        and the most profound explorations of what it means to live a righteous life.
      </p>

      <h2>On This Retelling</h2>

      <p>
        The pages that follow offer a condensed journey through the Ādi Parva. 
        They cannot capture every genealogy, every sub-tale, every philosophical 
        digression that enriches the original. Instead, they trace the essential 
        arc: from the curse that set everything in motion, through the loves and 
        losses of the early generations, to the birth of those princes whose 
        rivalry will eventually consume a kingdom.
      </p>

      <p>
        Read these stories not as distant history but as living wisdom. The 
        questions they raise—about duty and desire, about the weight of 
        promises, about the price of righteousness—remain as urgent today as 
        they were when first composed in the forests of ancient India.
      </p>

      <p>
        Let us begin at the beginning.
      </p>
    </ChapterLayout>
  );
};

export default Introduction;
