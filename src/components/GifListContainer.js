import React, { useEffect, useState } from 'react'
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {

    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("");

    const url ='https://api.giphy.com/v1/gifs/search?q=', url2 = '&api_key=dc6zaTOxFJmzC&rating=g&limit=3'


  useEffect(() => {
    fetch(`${url}${query}${url2}`)
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch onSubmitQuery={setQuery} />
    </div>
  );
}

export default GifListContainer;