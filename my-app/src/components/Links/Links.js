import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Links.css';

import buttonImg from "./Data/drawnButton.png";


// export default props => {
export default function Links() {
    const [psDisplay, changePsDisplay] = useState('none');
    const [wgDisplay, changeWgDisplay] = useState('none');
    const [djDisplay, changeDjDisplay] = useState('none');
    return (
        <div className="links-wrapper">
            {/* <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className="link-btn">
                <p>pretty stray (big things coming)</p>
            </a> */}
            <a onClick={() => (psDisplay) == 'none' ? changePsDisplay('flex') : changePsDisplay('none')} className="band-expand-link">
                <p>{(psDisplay) == 'none' ? "▶" : "▼"} band: pretty stray</p>
            </a>
            <div className="band-links-wrapper" style={{display: psDisplay}}>
                <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className='band-link'>metric - black sheep (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7250323452450639105" target="_blank" className='band-link'>smashing pumpkins - mayonaise (cover) on digicam</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7247545198081805569" target="_blank" className='band-link'>smashing pumpkins - mayonaise (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7137924792656694529" target="_blank" className='band-link'>yuragi - night is young (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7142140742834605313" target="_blank" className='band-link'>yuragi - sleeptight (cover)</a>
                <a href="https://www.tiktok.com/@psu.ae/video/7171943272334593282" target="_blank" className='band-link'>kinokoteikoku - ヴァージン・スーサイド (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7255727479007104257" target="_blank" className='band-link'>笹川真生 (mao sasagawa) - さめない (samenai) (cover)</a>
            </div>
            <a onClick={() => (wgDisplay) == 'none' ? changeWgDisplay('flex') : changeWgDisplay('none')} className="band-expand-link">
                <p>{(wgDisplay) == 'none' ? "▶" : "▼"} band: wasabi galaxy (upcoming gigs below!)</p>
            </a>
            <div className="band-links-wrapper" style={{display: wgDisplay}}>
                <a href="https://www.instagram.com/wasabigalaxyband/" target="_blank" className='band-link'>band instagram</a>
                <a href="https://events.humanitix.com/spooktember" target="_blank" className='band-link'>animesydney spooktember 13/9 @ unsw roundhouse</a>
                <a href="https://moshtix.com.au/v2/event/to-be-continued-anime-jpop-band-night/170726" target="_blank" className='band-link'>to be continued: anime & jpop band night 3/10 @ lazybones marrickville</a>
            </div>
            <a onClick={() => (djDisplay) == 'none' ? changeDjDisplay('flex') : changeDjDisplay('none')} className="dj-expand-link">
                <p>{(djDisplay) == 'none' ? "▶" : "▼"} dj mixes</p>
            </a>
            <div className="dj-links-wrapper" style={{display: djDisplay}}>
                <a href="https://soundcloud.com/xhmusic2/djxh-your-shot-2024-wildcard-set-live-on-red-bull-stage-blue" target="_blank" className='dj-link'>your shot 2024 full wildcard set (live on red bull stage Red)</a>
                <a href="https://soundcloud.com/xhmusic2/dvj-debut-live-at-x_360_noscope_420_x" target="_blank" className='dj-link'>dvj debut meme mix (live at x_360_NOSCOPE_420_X)</a>
                <a href="https://soundcloud.com/xhmusic2/whiplash-mix-live-at-dazcon-2023" target="_blank" className='dj-link'>whiplash mix (live at dazcon 2023)</a>
                <a href="https://soundcloud.com/xhmusic2/fever-dream" target="_blank" className='dj-link'>fever dream (first mix)</a>
            </div>
            <a href="https://www.instagram.com/ihatecars1_/" target="_blank" className="link-btn">
                <p>shitty car posting</p>
            </a>
            {/* <a href="" target="_blank" className="link-btn">
                <img src={buttonImg} className="link-img"/>
            </a> */}
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
