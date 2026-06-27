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
            <a href="https://www.instagram.com/letterto.band/" target="_blank" className="link-btn">
                <p>Letter To: instagram (big things coming)</p>
            </a>
            <a onClick={() => (psDisplay) == 'none' ? changePsDisplay('flex') : changePsDisplay('none')} className="band-expand-link">
                <p>{(psDisplay) == 'none' ? "▶" : "▼"} Letter To: covers</p>
            </a>
            <div className="band-links-wrapper" style={{display: psDisplay}}>
                <a href="https://www.instagram.com/p/DSO2KeOkQqi/" target="_blank" className='band-link'>title fight - safe in your skin (cover) (live at lazy bones)</a>
                <a href="https://www.instagram.com/reel/DO7fZPlEnRj/" target="_blank" className='band-link'>kinokoteikoku - girl meets number girl (cover)</a>
                <a href="https://www.instagram.com/p/DRJAHpKEtSU/" target="_blank" className='band-link'>cowpers - curve ii (cover)</a>

            </div>
            <a onClick={() => (wgDisplay) == 'none' ? changeWgDisplay('flex') : changeWgDisplay('none')} className="band-expand-link">
                <p>{(wgDisplay) == 'none' ? "▶" : "▼"} other band stuff</p>
            </a>
            <div className="band-links-wrapper" style={{display: wgDisplay}}>
                <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className='band-link'>metric - black sheep (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7250323452450639105" target="_blank" className='band-link'>smashing pumpkins - mayonaise (cover) on digicam</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7247545198081805569" target="_blank" className='band-link'>smashing pumpkins - mayonaise (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7137924792656694529" target="_blank" className='band-link'>yuragi - night is young (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7142140742834605313" target="_blank" className='band-link'>yuragi - sleeptight (cover)</a>
                <a href="https://www.tiktok.com/@psu.ae/video/7171943272334593282" target="_blank" className='band-link'>kinokoteikoku - ヴァージン・スーサイド (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7255727479007104257" target="_blank" className='band-link'>笹川真生 (mao sasagawa) - さめない (samenai) (cover)</a>
                <a href="https://www.instagram.com/wasabigalaxyband/" target="_blank" className='band-link'>wasabi galaxy instagram</a>
            </div>
            <a onClick={() => (djDisplay) == 'none' ? changeDjDisplay('flex') : changeDjDisplay('none')} className="dj-expand-link">
                <p>{(djDisplay) == 'none' ? "▶" : "▼"} dj mixes</p>
            </a>
            <div className="dj-links-wrapper" style={{display: djDisplay}}>
                <a href="https://www.youtube.com/watch?v=YPGSfhhwKVE" target="_blank" className='dj-link'>playing kpop uk garage while my friends contemplate if it's okay to start drinking at 12:30pm</a>
                <a href="https://soundcloud.com/xhmusic2/house-and-uk-garage-kpop-set-live-at-brainrot-bratober" target="_blank" className='dj-link'>house and uk garage kpop set (live at brainrot bratober)</a>
                <a href="https://soundcloud.com/xhmusic2/djxh-your-shot-2024-wildcard-set-live-on-red-bull-stage-blue" target="_blank" className='dj-link'>your shot 2024 full wildcard set (live on red bull stage Red)</a>
                <a href="https://soundcloud.com/xhmusic2/weeb-set" target="_blank" className='dj-link'>osu anime hardcore maimai rhythm game soundvoltex ddr brainrot weeb set</a>
                <a href="https://www.youtube.com/watch?v=5rN6_NEXHKg" target="_blank" className='dj-link'>jazz house revenge</a>
                <a href="https://soundcloud.com/xhmusic2/dvj-debut-live-at-x_360_noscope_420_x" target="_blank" className='dj-link'>dvj debut meme mix (live at x_360_NOSCOPE_420_X)</a>
                <a href="https://soundcloud.com/xhmusic2/whiplash-mix-live-at-dazcon-2023" target="_blank" className='dj-link'>whiplash mix (live at dazcon 2023)</a>
                <a href="https://soundcloud.com/xhmusic2/fever-dream" target="_blank" className='dj-link'>fever dream (first mix)</a>
            </div>
            <a href="https://www.instagram.com/ihatecars__/" target="_blank" className="link-btn">
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
