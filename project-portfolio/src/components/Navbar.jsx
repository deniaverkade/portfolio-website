import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <div className='navToggle'>
            <div className='navline'/>
            <div className='navline'/>
            <div className='navline'/>
        </div>
      <nav>
        <ul>
          <div className='cube'/>
           <li><Link to="/">Hoofdpagina</Link></li>

          <div className='cube'/>
           <li><Link to="/project">Projecten</Link></li>

          <div className='cube'/>
           <li><Link to="/about">Over mij</Link></li>
           
          <div className='cube'/>
           <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Navigation;