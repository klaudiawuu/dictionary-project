import React, { useState } from "react";
import axios from "axios";
import "./SearchEngin.css";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchEngin(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  let pexelsApiKey = "563492ad6f91700001000001cb988fb5f23242a6bd8c790bfcd0605e";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  let headers = { Authorization: `Bearer ${pexelsApiKey}` };
  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="SearchEngin">
        <section>
          <div className="what-word">Type a word you are looking for:</div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
