import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";

const ButtonList = () => {

    const [blinks, setBlinks] = useState([
        {id:1, link:"https://www.linkedin.com/in/denia-verkade-5952a8368/",class:"conbut1",value:"LinkedIn"},
        {id:2, link:"null",class:"conbut2",value:"GitHub"},
        {id:3, link:"youngcapitalwerktniet",class:"conbut3",value:"YoungCapital"},
    ])
    return ( <>
    {blinks.map(bl =>(
        <div key={bl.id} className={bl.class}>
            <Link className="contactlinks" to={bl.link}><p className="linktext">{bl.value}</p></Link>
        </div>
    ))}
    </> );
}
 
export default ButtonList;