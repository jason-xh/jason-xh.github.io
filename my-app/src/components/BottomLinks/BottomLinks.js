import React from 'react';
import { Link } from 'react-router-dom';

import './BottomLinks.css';

// import instagramLogo from "./Data/instagramLogo150.png";
// import twitterLogo from "./Data/twitterLogo150.png";
// import spotifyLogo from "./Data/spotifyLogo150.png";
// import bookLogo from "./Data/bookLogo150.png";
import carImg from "./Data/car.gif";
import iHateMicrosoftImg from "./Data/ihatemicrosoft.gif";
import burnInternetExplorerImg from "./Data/burninternetexplorer.gif";
import amazonImg from "./Data/amazon.gif";
import animeImg from "./Data/animemanga.gif";
import antiNftImg from "./Data/antinft.gif";
import csImg from "./Data/steam.gif";
import yourAdHereImg from "./Data/youradhere.gif";
import kingdomHeartsImg from "./Data/kingdomhearts.gif";
import clickHereImg from "./Data/clickhere.gif";


// export default props => {
export default function BottomLinks() {
  return (
    <div className="bottom-links-wrapper">
        <a href="https://www.reddit.com/r/fuckcars/" target="_blank" className="bottom-link-btn">
            <img src={carImg} className="bottom-link-img"/>
        </a>
        <a href="" target="_blank" className="bottom-link-btn">
            <img src={antiNftImg} className="bottom-link-img"/>
        </a>
        <a href="" target="_blank" className="bottom-link-btn">
            <img src={iHateMicrosoftImg} className="bottom-link-img"/>
        </a>
        <a href="" target="_blank" className="bottom-link-btn">
            <img src={burnInternetExplorerImg} className="bottom-link-img"/>
        </a>
        <a href="https://letterboxd.com/jasonxh/" target="_blank" className="bottom-link-btn">
            <img src={clickHereImg} className="bottom-link-img"/>
        </a>
        <a href="https://myanimelist.net/profile/Jaexh" target="_blank" className="bottom-link-btn">
            <img src={animeImg} className="bottom-link-img"/>
        </a>
        <a href="https://steamcommunity.com/id/jaexh/" target="_blank" className="bottom-link-btn">
            <img src={csImg} className="bottom-link-img"/>
        </a>
        <a href="https://glitchwave.com/user/jaexh/" target="_blank" className="bottom-link-btn">
            <img src={kingdomHeartsImg} className="bottom-link-img"/>
        </a>
        <a href="https://cyber.dabamos.de/88x31/" target="_blank" className="bottom-link-btn">
            <img src={yourAdHereImg} className="bottom-link-img"/>
        </a>
    </div>
    // <Nav defaultActiveKey="/" className="sidebar-vertical">
    //   <Nav.Link href="/">Active</Nav.Link>
    //   <Nav.Link eventKey="link-1">Link</Nav.Link>
    //   <Nav.Link eventKey="link-2">Link</Nav.Link>
    //   <Nav.Link eventKey="disabled" disabled>
    //     Disabled
    //   </Nav.Link>
    // </Nav>
  );
};
