// import { useState, useEffect } from "react";
// import "./App.css";

// type KanjiData = {
//   kanji: {
//     character: string;
//     stroke: number;
//     meaning: {
//       english: string;
//     },
//     video: {
//       webm: string;
//     }
//   };
//   radical: {
//     character: string;
//     stroke: number;
//     order: number;
//   };
// };

// function App() {
//   // const [data, setData] = useState(null);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);

//   const [data, setData] = useState<KanjiData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url =
//         "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all";
//       const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "qvdxXAUb8pmshOHY4wYIHyGPBJcup1FBshjjsnGWIhrplfDVLh",
//           "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         setData(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

 

//   return (
//     <>
//       {data.map((obj, index) => (
//         <div key={index}>
//           <h1>{obj.kanji.character}</h1>
//           <p>{obj.kanji.meaning.english}</p>
//           <div ></div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;


import { useEffect, useState } from 'react';
import xmlJs from 'xml-js';

const XMLDisplay = () => {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    fetch('/JMdict_e_examp.xml') // Replace with the URL or path to your XML data
      .then((response) => response.text())
      .then((xmlText) => {
        const jsonData = xmlJs.xml2json(xmlText, { compact: true, spaces: 4 });
        setXmlData(JSON.parse(jsonData));
      })
      .catch((error) => {
        console.error('Error fetching XML data:', error);
      });
  }, []);

  return (
    <div>
      {xmlData ? (
        <pre>{JSON.stringify(xmlData, null, 4)}</pre>
      ) : (
        <p>Loading XML data...</p>
      )}
    </div>
  );
};

export default XMLDisplay;
