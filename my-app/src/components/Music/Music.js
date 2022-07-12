import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

import './Music.css';

export default function Music() {
    return (
        <div className='Music'>
            <Navigation/>
            <h2>Music</h2>
            <h3>Production</h3>
            <Outlet/>
        </div>
    );
}