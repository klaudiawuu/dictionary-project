import React, { useState } from "react";
import axios from "axios";
import "./SearchEngin.css";
import Results from "./Results";

export default function SearchEngin() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="SearchEngin">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
      <Results results={results}/>
    </div>
  );
}
