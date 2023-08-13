import React, { useEffect, useState } from 'react';

interface Character {
  literal: string;
  readingMeaning: {
    groups: [{
      meanings: { lang: string; value: string }[];
    }]
    
  };
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
    <div>
      {importedData.map((character: Character, index: number) => (
        <div key={index}>
          <p>Literal: {character.literal}</p>
          <p>English Meanings: {character.readingMeaning.groups[0].meanings.map(meaning => meaning.value).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default App;




