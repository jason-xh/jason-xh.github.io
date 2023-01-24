import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
// export default function NavigationBar() {
//     return (
//         <div className='NavBar'>
//             <Link to="/">Home</Link>
//             <Link to="/reading">Reading</Link>
//             <Link to="/music">Music</Link>
//         </div>
//     );
// }

import Nav from 'react-bootstrap/Nav';

export default function NavigationBar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="NavBar"
    >
      <Nav.Item>
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
      </Nav.Item>
    </Nav>
  );
}