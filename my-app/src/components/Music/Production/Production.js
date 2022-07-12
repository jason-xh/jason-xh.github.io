import React from "react";
import ReactPlayer from 'react-player'

export default function Production() {
    return (
        <div>
            <a href="https://soundcloud.com/user-417328483/underwater-skatepark-sounds-asmr/s-zl1vJNZNjvy">Beat Demo WIP
            </a>
            <ReactPlayer url='https://api.soundcloud.com/tracks/1122221644&show_artwork=true&secret_token=s-zl1vJNZNjvy'/>
        </div>
    );
}