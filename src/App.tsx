import { useState, useEffect } from "react";
import "./App.css";

type KanjiData = {
  kanji: {
    character: string;
    stroke: number;
    meaning: {
      english: string;
    },
    video: {
      webm: string;
    }
  };
  radical: {
    character: string;
    stroke: number;
    order: number;
  };
};

function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [data, setData] = useState<KanjiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "qvdxXAUb8pmshOHY4wYIHyGPBJcup1FBshjjsnGWIhrplfDVLh",
          "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

 

  return (
    <>
      {data.map((obj, index) => (
        <div key={index}>
          <h1>{obj.kanji.character}</h1>
          <p>{obj.kanji.meaning.english}</p>
          <div ></div>
        </div>
      ))}
    </>
  );
}

export default App;
