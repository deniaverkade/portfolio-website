import { Link, Outlet } from 'react-router-dom';

const  Contact= () => {
    return ( <>

    <div className="contactbody">
       <h2>Contact Opnemen</h2> 
       <div className="formcontainer">




        </div>

        <div className="buttoncontainer">
        <div className="contactdivider2"/>
        <button className="contactbuttons"><Link to="https://youtu.be/dQw4w9WgXcQ">Text</Link></button>
        <button className="contactbuttons"><Link to="https://youtu.be/dQw4w9WgXcQ">Text</Link></button>
        <button className="contactbuttons"><Link to="https://youtu.be/dQw4w9WgXcQ">Text</Link></button>
        <div className="contactdivider3"/>
        <button className="cvbutton"></button>
        </div>
    </div>
    </> );
}
 
export default Contact;