import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { Button } from 'react-bootstrap';

import tiktokLogo from './logos/tiktokLogo150.png'
import youtubeLogo from './logos/youtubeLogo150.png'
import twitterLogo from './logos/twitterLogo150.png'
import musicalNote from './logos/musicalNote150.png'
import facebookLogo from './logos/facebookLogo150.png'
import instagramLogo from './logos/instagramLogo150.png'
import shirtLogo from './logos/shirtLogo150.png'

import Nav from 'react-bootstrap/Nav';

export default function NavigationBar() {

  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="justify-content-end"
    >
    <Nav.Item>
        <a href="" target="_blank" className="link-btn">
            <img src={shirtLogo} className="link-img"/>
        </a>
    </Nav.Item>
    <Nav.Item>
        <a href="" target="_blank" className="link-btn">
            <img src={facebookLogo} className="link-img"/>
        </a>
    </Nav.Item>
    <Nav.Item>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="link-btn">
            <img src={youtubeLogo} className="link-img"/>
        </a>
    </Nav.Item>
    <Nav.Item>
        <a href="https://www.tiktok.com/@kerakeiz/video/7144024534239153410" target="_blank" className="link-btn">
            <img src={tiktokLogo} className="link-img"/>
        </a>
    </Nav.Item>
    <Nav.Item>
        <a href="https://twitter.com/jasonxh_" target="_blank" className="link-btn">
            <img src={twitterLogo} className="link-img"/>
        </a>
    </Nav.Item>
    <Nav.Item>
        <a href="https://www.instagram.com/jasonxh_/" target="_blank" className="link-btn">
            <img src={instagramLogo} className="link-img"/>
        </a>
    </Nav.Item>
    <Nav.Item>
        <a href="" target="_blank" className="link-btn">
            <img src={musicalNote} className="link-img"/>
        </a>
    </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
}