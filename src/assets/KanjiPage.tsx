import React from "react";
import { Character, KanjiProps } from "./types/types";



const KanjiPage: React.FC<KanjiProps> = ({
  importedData,
  currentGrade,
}) => {
  return (
    <div className="kanji-wrapper">
      {importedData.map((character: Character, index: number) => {
        if (character.misc.grade === currentGrade) {
          return (
            <div key={index} className="kanji-card">
              <p className="literal">{character.literal}</p>
              <p>
                {character.readingMeaning.groups[0].readings
                  .flatMap((reading) =>
                    reading.type === "ja_on" ? [reading.value] : []
                  )
                  .join(", ")}
              </p>
              <p>
                {character.readingMeaning.groups[0].readings
                  .flatMap((reading) =>
                    reading.type === "ja_kun" ? [reading.value] : []
                  )
                  .join(", ")}
              </p>
              <p>
                {character.readingMeaning.groups[0].meanings
                  .map((meaning) => meaning.value)
                  .join(", ")}
              </p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default KanjiPage;
