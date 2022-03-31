import { assertIfStatement } from "@babel/types";
import React from "react";
import justin from "../img/justin-bieber.jpg";
import { downloads } from "./Data";

const Downloads = () => {
  return (
    <div className="downloads">
      <p>Download</p>
      {downloads.map((download) => (
        // map through the download array
        <div className="download" key={download.id}>
          <div className="song-description">
            <img
              className="rounded-image"
              src={download.artistSrc}
              alt={download.artistName}
            />
            <div className="play-after"></div>
            <div className="music-description">
              <p className="music-name">{download.artistName}</p>
              <p className="artist-name">{download.songTitle}</p>
            </div>
          </div>

          <div className="downloads-item-action">
            <img
              className="rounded-image"
              src={download.actionImgSrc}
              alt={download.artistName}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Downloads;
