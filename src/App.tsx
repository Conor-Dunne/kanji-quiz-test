import React from 'react';
import kanji from '../public/kanjidic2-en-3.5.0.json';
const kanjiData: KanjiData = kanji;

interface KanjiData {
  characters: Kanji[];
  // Other properties...
}

interface Kanji {
  character: string;
  meaning: string;
  literal: string; // Adjust the type here
  // Other properties...
}



const KanjiComponent: React.FC = () => {


  console.log(kanjiData.characters[1].literal)

  return (
    <div>
     <p>{kanjiData.characters[13].literal}</p>
    </div>
  );
};

export default KanjiComponent;


