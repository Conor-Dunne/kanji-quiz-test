import React, { useEffect, useState } from 'react';
import './App.css'

interface Character {
  literal: string;
  readingMeaning: {
    groups: [{
      meanings: { lang: string; value: string }[];
      readings: {value: string, type: string}[];
    }];

  };
  misc: {jlptLevel: number; grade: number};
}

function App() {
  const [importedData, setImportedData] = useState<Character[]>([]);

  useEffect(() => {
    fetch('/kanjidic2-en-3.5.0.json?url')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data && data.characters) {
          setImportedData(data.characters);
        }
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);
  return (
    <div className='kanji-wrapper'>
      {importedData.map((character: Character, index: number) => {
        if(character.misc.grade === 1) {
          return (
            <div key={index}>
              <p>{character.literal}</p>
              <p>{character.readingMeaning.groups[0].readings.map(reading => reading.type === "ja_on" ? reading.value : null) }</p>
              <p>{character.readingMeaning.groups[0].meanings.map(meaning => meaning.value).join(', ')}</p>
            </div>
          )
        } 
      })}
    </div>
  );
}

export default App;




