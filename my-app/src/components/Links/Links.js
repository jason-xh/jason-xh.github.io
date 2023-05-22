import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Links.css';

import buttonImg from "./Data/drawnButton.png";


// export default props => {
export default function Links() {
    const [bandDisplay, changeBandDisplay] = useState('none');
    const [djDisplay, changeDjDisplay] = useState('none');
    return (
        <div className="links-wrapper">
            {/* <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className="link-btn">
                <p>pretty stray (big things coming)</p>
            </a> */}
            <a onClick={() => (bandDisplay) == 'none' ? changeBandDisplay('flex') : changeBandDisplay('none')} className="band-expand-link">
                <p>{(bandDisplay) == 'none' ? "▶" : "▼"} band: pretty stray (big things coming)</p>
            </a>
            <div className="band-links-wrapper" style={{display: bandDisplay}}>
                <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className='band-link'>metric - black sheep (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7137924792656694529" target="_blank" className='band-link'>yuragi - night is young (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7142140742834605313" target="_blank" className='band-link'>yuragi - sleeptight (cover)</a>
                <a href="https://www.tiktok.com/@psu.ae/video/7171943272334593282" target="_blank" className='band-link'>kinokoteikoku - ヴァージン・スーサイド (cover)</a>
            </div>
            <a onClick={() => (djDisplay) == 'none' ? changeDjDisplay('flex') : changeDjDisplay('none')} className="dj-expand-link">
                <p>{(djDisplay) == 'none' ? "▶" : "▼"} dj mixes</p>
            </a>
            <div className="dj-links-wrapper" style={{display: djDisplay}}>
                <a href="https://soundcloud.com/xhmusic2/dvj-debut-live-at-x_360_noscope_420_x" target="_blank" className='dj-link'>DvJ debut mix (live at x_360_NOSCOPE_420_X)</a>
                <a href="https://soundcloud.com/xhmusic2/whiplash-mix-live-at-dazcon-2023" target="_blank" className='dj-link'>whiplash mix (live at dazcon 2023)</a>
                <a href="https://soundcloud.com/xhmusic2/fever-dream" target="_blank" className='dj-link'>fever dream mix</a>
            </div>
            <a href="https://www.instagram.com/87.prelude/" target="_blank" className="link-btn">
                <p>my shitty car</p>
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
