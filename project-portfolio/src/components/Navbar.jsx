import { Link, Outlet } from 'react-router-dom';
import NavList from './NavList';
import { useState } from "react";

const Navigation = () => {

  const [showNav, setShowNav] = useState("navclose");

  const changeStyle = () => {
    console.log("you just clicked");
    if (showNav !== "navclose") setShowNav("navclose");
    else setShowNav("navopen");
  };

  const pageReset = () => {
    setShowNav(navclose);
  }

  return (
    <>

      <div className='navToggle'>
        <button className="navButton" onClick={changeStyle}>
          <div className='navline' />
          <div className='navline' />
          <div className='navline' />
        </button>
      </div>
      <nav className={showNav}>

        <div className="navMenuBox"><div className="cube"></div><h1 className="navText">MENU</h1></div>
        <ul className="ulFlex">
          <NavList />
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
