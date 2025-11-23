import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectData from "../projects";
import ProjectCard from '../components/ProjectCard';


const Project = () => {
    const navigate = useNavigate();
    const [projectList, setProjectList] = useState(projectData);



    const goToDetail = (projectId)=> {
        navigate(`/projectdetail/${projectId}`);
    };

    const projectMapping = projectList.map((pro =>(
        <ProjectCard
        key={pro.id}
        project={pro}
        projectimg={pro.imgurl}
        projectname={pro.name}
        onShowDetail={goToDetail}/>
    )))

    return ( <>
    <div className="projectbody">
        <h1 className="projecth1">PROJECTEN</h1>
        <p className='propagetext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus tellus, auctor venenatis elementum ornare, consectetur vel mi. Maecenas gravida, augue non gravida porta, lectus felis tincidunt lectus, sed vehicula justo mi nec erat. </p>
        <h2 className="filtertitle">FILTERS</h2>
        <button className="resetfilter">RESET FILTER</button>
    </div>
        
        <div className="projectlist">
        <div className="containerProject">
            {projectMapping}
        </div>
        </div>
    
    </> );
}
 
export default Project;