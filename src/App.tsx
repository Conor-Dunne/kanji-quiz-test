import { useEffect, useState } from "react";
import Header from "./assets/components/Header";
import KanjiPage from "./assets/KanjiPage";
import QuizPage from "./assets/QuizPage";
import { Character } from "./assets/types/types";
import "./App.css";

function App() {
  const [quizMode, setQuizMode] = useState(false);

  const [importedData, setImportedData] = useState<Character[]>([]);

  const [currentGrade, setCurrentGrade] = useState<number>(1);

  function changeGrade(newGrade: number) {
    setCurrentGrade(newGrade);
  }

  function switchMode(quizMode: boolean) {
    setQuizMode(quizMode)
  }

  useEffect(() => {
    fetch("/kanjidic2-en-3.5.0.json?url")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data && data.characters) {
          setImportedData(data.characters);
        }
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  return (
    <>
      <Header newGrade={changeGrade} switchMode={switchMode} quizMode={quizMode} />
      {!quizMode ? <KanjiPage importedData={importedData} currentGrade={currentGrade} /> : <QuizPage /> }

    </>
  );
}

export default App;
