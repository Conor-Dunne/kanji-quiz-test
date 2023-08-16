export interface Character {
    literal: string;
    readingMeaning: {
      groups: [
        {
          meanings: { lang: string; value: string }[];
          readings: { value: string; type: string }[];
        }
      ];
    };
    misc: { jlptLevel: number; grade: number };
  }

  export interface KanjiProps {
    importedData: Character[];
    currentGrade: number;
  }
  