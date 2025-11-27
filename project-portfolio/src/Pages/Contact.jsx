import { Link, Outlet } from 'react-router-dom';
import ContactForm from "../components/ContactForm";
import ButtonList from '../components/ButtonList';


const Contact = () => {
    const downloadCV = () => {

        fetch("../public/files/deniacv.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "DeniaCV.pdf"
                alink.click();
            });
        });
    };
    return (<>

        <div className="contactbody">
            <h2 className="contacttitle">CONTACT OPNEMEN</h2>
            <div className="formcontainer">

                <ContactForm />


            </div>
            <h2 className="contacttitle2">HANDIGE LINKS</h2>
            <div className="buttonbox">
                <ButtonList />
            </div>
            <div className="contactdivider" />
            <button className="cvbutton" onClick={downloadCV}><p className="cvtext">CV DOWNLOADEN</p></button>

        </div>
    </>);
}

export default Contact;