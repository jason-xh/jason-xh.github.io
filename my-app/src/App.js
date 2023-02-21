import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState, useReducer } from "react";
import { ProSidebarProvider } from 'react-pro-sidebar';

import Sidebar from './components/Sidebar/Sidebar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SocialsLinks from './components/SocialsLinks/SocialsLinks';
import Links from './components/Links/Links';
import BottomLinks from './components/BottomLinks/BottomLinks';

import buttonImg from "./components/Links/Data/drawnButton.png";
import leftMargin from "./images/leftMargin.png";
import rightMargin from "./images/rightMargin.png";
import bannerGif from "./images/banner.gif";

function App() {
  const [state, setState] = useState("1");
  const [state2, setState2] = useState("a");
  const [state3, changeState] = useState("starting state");

  const [checked, setChecked] = useReducer(
    (checked) => ! checked,
    false
  );

  useEffect(() => {
    console.log(`It's state ${state}`);
  }, [state, state2]);

  useEffect(() => {
    console.log(`It's state2 ${state2}`);
  }, [state2]);

  return (
    <ProSidebarProvider>
      <div className='viewport'>
        {/* <div className="margin-wrapper"> */}
          {/* <img src={leftMargin}></img> */}
          <div className="content-wrapper">
            <a href="" target="_blank" className="banner">
                <img src={bannerGif} className="banner-img"/>
                {/* <img src={buttonImg} className="link-img"/> */}
            </a>
            <SocialsLinks></SocialsLinks>
            <Links></Links>
            <BottomLinks className="bottom-links"></BottomLinks>
            <p className='bottom-text'>made by jason x.</p>
            {/* <div className="App" id="outer-container">
          <div id="page-wrap">

            <a className='test-link' onClick={() => changeState("0")}>test</a>
            <h1 className='bottom-text'>Current state is {state3}</h1>
            
            <h1 className='bottom-text'>Current state is {state}</h1>
            <button onClick={() => setState("0")}>
              Set state 0
            </button>
            <button onClick={() => setState("1")}>
              Set state 1
            </button>
            <h2 className='bottom-text'>Current state2 is {state2}</h2>
            <button onClick={() => setState2("a")}>
              Set state a
            </button>
            <button onClick={() => setState2("b")}>
              Set state b
            </button>

            <h2 className='bottom-text'>Checkbox</h2>
            <input 
              type="checkbox"
              value={checked}
              onChange={setChecked}
            />
            <label>
              {checked ? "checked" : "not checked"}
            </label>
            <p>
            </p>
          </div>
        </div> */}
          </div>
        {/* <img src={rightMargin}></img> */}

        {/* <div className="App" id="outer-container">
          <div id="page-wrap">

            <h1>test</h1>
            
            <h1>Current state is {state}</h1>
            <button onClick={() => setState("0")}>
              Set state 0
            </button>
            <button onClick={() => setState("1")}>
              Set state 1
            </button>
            <h2>Current state2 is {state2}</h2>
            <button onClick={() => setState2("a")}>
              Set state a
            </button>
            <button onClick={() => setState2("b")}>
              Set state b
            </button>

            <h2>Checkbox</h2>
            <input 
              type="checkbox"
              value={checked}
              onChange={setChecked}
            />
            <label>
              {checked ? "checked" : "not checked"}
            </label>
            <p>
            </p>
          </div>
        </div> */}
        </div>
      {/* </div> */}

    </ProSidebarProvider>
  );
}

export default App;
