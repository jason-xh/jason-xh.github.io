import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { useState, useEffect } from "react";

export default function Reading() {
    const [favData, setFavData] = useState(null);
    
    //     terrible practice to use an unknown third party CORS proxy but:
    // * goodreads does not have CORS header in their responses
    // * goodreads' API is terrible after the amazon acquisition
    // * all data I'm fetching is totally public
    useEffect(() => {
        // fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list_rss/44189307?key=bbuzpogVe2zlw6BcLtxC-HzzqHN5-nBc-sd9XpG6qmOR1ZPw&shelf=currently-reading/`, {
        fetch(`https://crossorigin.me/https://www.goodreads.com/review/list_rss/44189307?key=bbuzpogVe2zlw6BcLtxC-HzzqHN5-nBc-sd9XpG6qmOR1ZPw&shelf=currently-reading/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'origin': null
            }
        }
        )
            .then(resp => {resp.clone().json(); console.log(resp); console.log(resp.clone().body)})
            .then(data => console.log(data))//resp => resp.json())
            //.then(setFavData) // shorthand for .then(data => setFavData(data))
    }, []); // [] makes this request only occur once when the page renders
    
    /*
    useEffect(() => {
        fetch(`https://api.github.com/users/jason-xh`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then(resp => setFavData(resp))//resp => resp.json())
            //.then(setFavData) // shorthand for .then(data => setFavData(data))
    }, []);
    */
    return (
        <div>
            <h1>Reading</h1>
            <h2>Favourites</h2>
            <pre>{JSON.stringify(favData, null, 2)}</pre>

        </div>
    );
}