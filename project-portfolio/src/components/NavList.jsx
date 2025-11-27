import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";


const NavList = (key, link) => {

    const [links, setLinks] = useState([
        { id: 1, link: "/", linkValue: "HOOFDPAGINA", class: "li1", class2: "navlink1" },
        { id: 2, link: "/project", linkValue: "PROJECTEN", class: "li2", class2: "navlink2" },
        { id: 3, link: "/about", linkValue: "OVER MIJ", class: "li3", class2: "navlink3" },
        { id: 4, link: "/contact", linkValue: "CONTACT", class: "li4", class2: "navlink4" },
    ]);

    return (<>

        {links.map(l => (
            <div key={l.id} className={l.class}>
                <li key={l.id} ><div className={l.class2}><Link to={l.link} >{l.linkValue}</Link></div></li></div>
        ))}
    </>);
}

export default NavList;