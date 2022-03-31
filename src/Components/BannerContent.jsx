import React from "react";
import BannerImage from "../img/theweekend.png";
import playProgress from "../img/icons/play-progress.png";
import justinbieber from "../img/justin-bieber.jpg";
import redplaybutton from "../img/icons/red-playIcon.png";
import nextButton from "../img/icons/next.png";
import file from "../img/icons/album.png";

const BannerContent = () => {
  return (
    <div>
      <div className="bannerClass">
        <div className="banner-description">
          <p className="big-title">blinding Lights</p>
          <p className="smaller-title">the Weekend</p>
          <p>
            After silence that which comes nearest to expressing the
            inexpressible is music.
          </p>
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="banner-image">
          <img src={BannerImage} alt="bannerImage" />
        </div>
      </div>
      <div className="music-genres">
        <div className="music-genre">
          <div className="music-profile">
            <img
              className="rounded-image"
              src={justinbieber}
              alt="artist-profile"
            />
            <p className="music-name">Intentions</p>
            <p className="artist-name">Justin-bieber</p>
          </div>

          <img src={playProgress} alt="music progress bar" />
          <div className="music-control">
            <img src={nextButton} alt="previous button" />
            <img src={redplaybutton} alt="play button" />
            <img src={nextButton} alt="next button" />
          </div>
        </div>
        <div className="music-genre">
          <h1>01</h1>
          <p>
            classical <br />
            music <br />
            collections
          </p>

          <div className="songs-list">
            <img src={file} alt="file image" />
            <p className="artist-name">196 Songs</p>
          </div>
        </div>
        <div className="music-genre">
          <h1>02</h1>
          <p>
            pop <br />
            music <br />
            collections
          </p>

          <div className="songs-list">
            <img src={file} alt="file image" />
            <p className="artist-name">82 Songs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
