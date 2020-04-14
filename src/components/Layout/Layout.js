import React from 'react';
import Navbar from '../Navbar';

const Layout = (props) => {
  const app = React.createRef();
  return (
    <div className="App" ref={app}>
      <Navbar app={app} />
      <main className="content">
        <div className="content-inner">
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
