import { Link, Outlet } from 'react-router-dom';
import NavList from './NavList';

const Navigation = () => {
  return (
    <div>
        <div className='navToggle'>
            <div className='navline'/>
            <div className='navline'/>
            <div className='navline'/>
        </div>
      <nav>
        <div className="navMenuBox"><div className="cube"></div><h1 className="navText">MENU</h1></div>
        <ul className="ulFlex">
          <NavList/>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Navigation;