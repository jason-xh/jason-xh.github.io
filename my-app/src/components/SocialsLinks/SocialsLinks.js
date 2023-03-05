import React from 'react';
import { Link } from 'react-router-dom';

import './SocialsLinks.css';

// import instagramLogo from "./Data/instagramLogo150.png";
// import twitterLogo from "./Data/twitterLogo150.png";
// import spotifyLogo from "./Data/spotifyLogo150.png";
// import bookLogo from "./Data/bookLogo150.png";
import instagramLogo from "./Data/instagram.png";
import twitterLogo from "./Data/twitter.gif";
import spotifyLogo from "./Data/spotify.gif";
import bookLogo from "./Data/youradhere.gif";


// export default props => {
export default function SocialsLinks() {
  return (
    // INSTAGRAM TWITTER GOODREADS SPOTIFY
    <div className="socials-links-wrapper">
        <a href="https://www.instagram.com/jasonxh_/" target="_blank" className="socials-link-btn">
            {/* <img src={instagramLogo} className="socials-link-img"/> */}
            <p className='socials-link-text'>instagram</p>
        </a>
        <a href="https://twitter.com/jasonxh_" target="_blank" className="socials-link-btn">
            {/* <img src={twitterLogo} className="socials-link-img"/> */}
            <p className='socials-link-text'>braindead bird app</p>
        </a>
        <a href="https://open.spotify.com/user/12120299082" target="_blank" className="socials-link-btn">
            {/* <img src={spotifyLogo} className="socials-link-img"/> */}
            <p className='socials-link-text'>spotify</p>
        </a>
        <a href="https://www.goodreads.com/user/show/44189307-jason" target="_blank" className="socials-link-btn">
            {/* <img src={bookLogo} className="socials-link-img"/> */}
            <p className='socials-link-text'>goodreads</p>
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
