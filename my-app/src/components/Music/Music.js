import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Production from './Production/Production';

import './Music.css';

export default function Music() {
    return (
        <div className='Music'>
            <NavigationBar/>
            <h2>Music</h2>
            <h2>Test</h2>
            <h3>Production</h3>
            <Production/>
        </div>
    );
}