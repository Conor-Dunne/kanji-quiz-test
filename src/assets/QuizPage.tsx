import { Character, KanjiProps } from "./types/types";
import { useState, useEffect } from "react";
import "./QuizPage.css";

const QuizPage: React.FC<KanjiProps> = ({ importedData, currentGrade }) => {
  const [quizDeck, setQuizDeck] = useState<Character[]>([]);
  const [userAnswerEng, setUserAnswerEng] = useState("");
  const [userAnswerJa_on, setUserAnswerJa_on] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [ja_on, setJa_on] = useState<string[]>([]);

  const randomIndex = function () {
    return Math.floor(Math.random() * quizDeck.length);
  };


  useEffect(() => {
    const deck: Character[] = importedData.filter(
      (kanji) => kanji.misc.grade === currentGrade
    );
    setQuizDeck(deck);
    const currentJa_on = deck[index].readingMeaning.groups[0].readings
    .filter((reading) => reading.type === "ja_on")
    .map((reading) => reading.value);

  setJa_on(currentJa_on);
  }, [importedData, currentGrade]);

  

  
  

  function checkAnswer(userAnswerEng: string, answerEng: string, userAnswerJa_on: string[], ja_on: string[]) {
    const userAnswerJa_onStr = userAnswerJa_on.join(','); // Convert array to a string
    const ja_onStr = ja_on.join(','); // Convert array to a string

    console.log(userAnswerJa_onStr , ja_onStr)
  
    if (userAnswerEng === answerEng && userAnswerJa_onStr === ja_onStr) {
      alert("Good!");
      setIndex(randomIndex());
    } else {
      alert("Wrong answer!");
    }
  }
  
  
  return (
    <div className="quiz-container">
      <h1>Let's Quiz!</h1>
      <h2>Grade: {currentGrade}</h2>
      {quizDeck.length > 0 && (
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            const answerEng =
              quizDeck[index].readingMeaning.groups[0].meanings[0].value;
            
            checkAnswer(userAnswerEng, answerEng, userAnswerJa_on, ja_on);
            setUserAnswerEng("");
            setUserAnswerJa_on([])
          }}
        >
          <h1>{quizDeck[index].literal}</h1>
          <p>What is the English meaning?</p>
          <input
            value={userAnswerEng}
            onChange={(event) => setUserAnswerEng(event.target.value)}
            type="text"
            required
          />
          <p>Type the on yomi(s)</p>
          <input
            value={userAnswerJa_on}
            onChange={(event) => setUserAnswerJa_on([event.target.value])}
            type="text"
            required
          />
          <p>{quizDeck[index].readingMeaning.groups[0].meanings[0].value}</p>
          <p>
                {quizDeck[index].readingMeaning.groups[0].readings
                  .flatMap((reading) =>
                    reading.type === "ja_on" ? [reading.value] : []
                  )
                  .join(", ")}
              </p>
              <p>
                {quizDeck[index].readingMeaning.groups[0].readings
                  .flatMap((reading) =>
                    reading.type === "ja_kun" ? [reading.value] : []
                  )
                  .join(", ")}
              </p>
          <button type="submit">Check</button>
        </form>
      )}
    </div>
  );
};

export default QuizPage;

// {"literal":"無","codepoints":[{"type":"ucs","value":"7121"},{"type":"jis208","value":"1-44-21"}],"radicals":[{"type":"classical","value":86}],"misc":{"grade":4,"strokeCounts":[12],"variants":[],"frequency":274,"radicalNames":[],"jlptLevel":2},"dictionaryReferences":[{"type":"nelson_c","morohashi":null,"value":"2773"},{"type":"nelson_n","morohashi":null,"value":"3439"},{"type":"halpern_njecd","morohashi":null,"value":"2135"},{"type":"halpern_kkd","morohashi":null,"value":"2648"},{"type":"halpern_kkld","morohashi":null,"value":"1351"},{"type":"halpern_kkld_2ed","morohashi":null,"value":"1832"},{"type":"heisig","morohashi":null,"value":"1775"},{"type":"heisig6","morohashi":null,"value":"1913"},{"type":"gakken","morohashi":null,"value":"227"},{"type":"oneill_names","morohashi":null,"value":"1789"},{"type":"oneill_kk","morohashi":null,"value":"386"},{"type":"moro","morohashi":{"volume":7,"page":426},"value":"19113"},{"type":"henshall","morohashi":null,"value":"796"},{"type":"sh_kk","morohashi":null,"value":"93"},{"type":"sh_kk2","morohashi":null,"value":"93"},{"type":"sakade","morohashi":null,"value":"723"},{"type":"jf_cards","morohashi":null,"value":"715"},{"type":"henshall3","morohashi":null,"value":"620"},{"type":"tutt_cards","morohashi":null,"value":"600"},{"type":"crowley","morohashi":null,"value":"179"},{"type":"kanji_in_context","morohashi":null,"value":"400"},{"type":"kodansha_compact","morohashi":null,"value":"1280"},{"type":"maniette","morohashi":null,"value":"1791"}],"queryCodes":[{"type":"skip","skipMisclassification":null,"value":"2-2-10"},{"type":"sh_desc","skipMisclassification":null,"value":"4d8.8"},{"type":"four_corner","skipMisclassification":null,"value":"8033.1"},{"type":"deroo","skipMisclassification":null,"value":"2340"},{"type":"skip","skipMisclassification":"posn","value":"2-8-4"}],"readingMeaning":{"groups":[{"readings":[{"type":"pinyin","onType":null,"status":null,"value":"wu2"},{"type":"pinyin","onType":null,"status":null,"value":"mo2"},{"type":"korean_r","onType":null,"status":null,"value":"mu"},{"type":"korean_h","onType":null,"status":null,"value":"무"},{"type":"vietnam","onType":null,"status":null,"value":"Vô"},{"type":"vietnam","onType":null,"status":null,"value":"Mô"},{"type":"ja_on","onType":null,"status":null,"value":"ム"},{"type":"ja_on","onType":null,"status":null,"value":"ブ"},{"type":"ja_kun","onType":null,"status":null,"value":"な.い"}],"meanings":[{"lang":"en","value":"nothingness"},{"lang":"en","value":"none"},{"lang":"en","value":"ain't"},{"lang":"en","value":"nothing"},{"lang":"en","value":"nil"},{"lang":"en","value":"not"}]}],"nanori":[]}},
