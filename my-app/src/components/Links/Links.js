import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Links.css';

import buttonImg from "./Data/drawnButton.png";


// export default props => {
export default function Links() {
    const [bandDisplay, changeBandDisplay] = useState('none');
    return (
        <div className="links-wrapper">
            {/* <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className="link-btn">
                <p>pretty stray (big things coming)</p>
            </a> */}
            <a onClick={() => (bandDisplay) == 'none' ? changeBandDisplay('flex') : changeBandDisplay('none')} className="band-expand-link">
                <p>{(bandDisplay) == 'none' ? "▶" : "▼"} pretty stray (big things coming)</p>
            </a>
            <div className="band-links-wrapper" style={{display: bandDisplay}}>
                <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className='band-link'>metric - black sheep (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7137924792656694529" target="_blank" className='band-link'>yuragi - night is young (cover)</a>
                <a href="https://www.tiktok.com/@kerakeiz/video/7142140742834605313" target="_blank" className='band-link'>yuragi - sleeptight (cover)</a>
                <a href="https://www.tiktok.com/@psu.ae/video/7171943272334593282" target="_blank" className='band-link'>kinokoteikoku - ヴァージン・スーサイド (cover)</a>
            </div>
            {/* <p className='test-links'>links</p> */}
            <a href="https://soundcloud.com/user-417328483/fever-dream" target="_blank" className="link-btn">
                <p>first dj mix</p>
            </a>
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
