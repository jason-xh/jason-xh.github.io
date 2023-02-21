import React from 'react';
import './Sidebar.css';
// import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses } from 'react-pro-sidebar';
import Nav from 'react-bootstrap/Nav';


export default props => {
  // const { collapseSidebar } = useProSidebar();

  return (/*
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'rgb( 253, 241, 255 )',
          },
        }}
      >
        <Menu>
          <SubMenu  label="Music">
            <MenuItem component={<Link to="/music" />}> Band </MenuItem>
            <MenuItem component={<Link to="/music" />}> DJ </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/reading" />}> Reading </MenuItem>
          <MenuItem> Car </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
    */
   /*
   <div className='Sidebar'>
    <a>Music</a>
    <a>Things</a>
    <a>Test</a>
   </div>
   */
    <Nav defaultActiveKey="/" className="sidebar-vertical">
      <Nav.Link href="/">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
};
