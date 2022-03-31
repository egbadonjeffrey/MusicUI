import React from "react";
import search from "../img/icons/search.png";
import album from "../img/icons/album.png";
import artist from "../img/icons/artist.png";
import songs from "../img/icons/music.png";
import redPlay from "../img/icons/red-playIcon.png";
import twitter from "../img/icons/twitter.png";
import instagram from "../img/icons/instagram.png";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="side-nav">
        <ul>
          <li>
            <div>
              <img src={search} alt="Explore" />
            </div>
            <p>Explore</p>
          </li>
          <li>
            <div>
              <img src={songs} alt="Songs" />
            </div>

            <p>Songs</p>
          </li>
          <li>
            <div>
              <img src={artist} alt="Artist" />
            </div>
            <p>Artist</p>
          </li>
          <li>
            <div>
              <img src={album} alt="Album" />
            </div>
            <p>Album</p>
          </li>
        </ul>
      </div>
      <div className="socials">
        <img className="rounded-image" src={instagram} alt="instagram" />
        <img className="rounded-image" src={twitter} alt="twitter" />
        <img className="rounded-image" src={redPlay} alt="play" />
      </div>
    </div>
  );
};

export default SideNav;
