import { Character, KanjiProps } from "./types/types";
import { useState, useEffect } from "react";
import "./QuizPage.css";

const QuizPage: React.FC<KanjiProps> = ({ importedData, currentGrade }) => {
  console.log(importedData); // This will log whenever the component renders

  const [quizDeck, setQuizDeck] = useState<Character[]>([]);

  useEffect(() => {
    console.log(quizDeck); // This will log whenever quizDeck changes
  }, [quizDeck]);

  useEffect(() => {
    const deck: Character[] = importedData.filter(
      (kanji) => kanji.misc.grade === currentGrade
    );
    setQuizDeck(deck);
  }, [importedData, currentGrade]);

  return (
    <div className="quiz-container">
      <h1>Let's Quiz!</h1>
      <h2>Grade: {currentGrade}</h2>
      {quizDeck.length > 0 && (
        <form action="">
          <h1>{quizDeck[0].literal}</h1>
        </form>
      )}
    </div>
  );
};

export default QuizPage;
