import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// const baseUrl = "https://pokeapi.co/api/v2/";

const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=21&offset=${0}`;

const App = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const apiData = axios.get(baseUrl);
    apiData.then((response) => {
      console.log(response);
      setApi(response.data.results);
    });
  }, []);

  console.log(api);
  const apiData = api;

  // const apiUrl =

  return (
    <>
      {apiData?.map((obj) => {
        const url = obj.url;

        const fet = axios.get(url).then((response) => {
          console.log(response);
        });
        return (
          <div>
            <h1>{obj.name}</h1>

            <h2>{url}</h2>
          </div>
        );
      })}

      <h1>atul</h1>
    </>
  );
};

export default App;
