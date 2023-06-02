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

  // api.map((value) => {
  //   console.log(value);
  // });

  for (let a in api) {
    console.log(`key is ${a} and value is ${api[a]}`);
  }

  return (
    <>
      {/* {api?.map((name) => {
        console.log(name);
        return <div>{name}</div>;
      })} */}
      {/* <div>{api}</div> */}
      <h1>atul</h1>
    </>
  );
};

export default App;
