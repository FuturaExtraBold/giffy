import React from "react";

import Gif from "./Gif";

const GifList = props => {

  const results = props.data;
  let gifs = results.map(gif =>
    <Gif key={ gif.id } url={ gif.images.fixed_height.url } />
  );

  return (
    <ul>
      { gifs }
    </ul>
  );
}

export default GifList;
