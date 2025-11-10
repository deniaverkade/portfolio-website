import { Link, Outlet } from 'react-router-dom';
import {projects} from "../projects";


const Project = () => {
    return ( <>
    
    <div className="projectbody">
        <div className="sideboxproject">
            <h1>PROJECTEN</h1>
        <p className="projectp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus tellus, auctor venenatis elementum ornare, consectetur vel mi. Maecenas gravida, augue non gravida porta, lectus felis tincidunt lectus, sed vehicula justo mi nec erat. Donec vel tempor massa, in posuere turpis. Morbi hendrerit aliquet malesuada. Sed placerat ornare dolor at dapibus. Integer mauris leo, faucibus in turpis at, pharetra malesuada libero. Sed maximus iaculis tortor placerat sollicitudin</p>
        <h2>FILTERS</h2>
        <button>RESET FILTER</button>
        </div>
        
    </div>
        
        <div className="projectlist">
<h1>Project pagina</h1>
        <p className="projectp"><Link to="/projectdetail">Testlink voor detailpagina</Link></p>
        </div>
    
    </> );
}
 
export default Project;