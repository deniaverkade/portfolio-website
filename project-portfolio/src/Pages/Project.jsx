import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectData from "../projects";
import ProjectCard from '../components/ProjectCard';


const Project = () => {
    const navigate = useNavigate();
    const [projectList, setProjectList] = useState(projectData);



    const goToDetail = (projectId) => {
        navigate(`/projectdetail/${projectId}`);
    };

    const projectMapping = projectList.map((pro => (
        <ProjectCard
            key={pro.id}
            project={pro}
            projectimg={pro.imgurl}
            projectname={pro.name}
            onShowDetail={goToDetail} />
    )))


    return (<>
        <div className="projectbody">
            <h1 className="projecth1">PROJECTEN</h1>
            <p className='propagetext'>
                Hier zijn verschillende projecten van mij te zien. Deze heb ik gemaakt voor school, en op de pagina's van de projecten zelf zijn er links naar de Github. Zo kun je ook de code inzien.
                <br></br><b>Momenteel werken de filters niet.</b>
            </p>
            <h2 className="filtertitle">FILTERS</h2>
            <div className="filterbox1">
                <button className="filterbuttons">HTML/CSS</button>
                <button className="filterbuttons">JavaScript</button>
                <button className="filterbuttons">C#</button>
            </div>
            <div className="filterbox2">
                <button className="filterbuttons2">C++</button>
                <button className="filterbuttons2">Python</button>
                <button className="filterbuttons2">ReactJS</button>
            </div>

            <button className="resetfilter" onClick={projectMapping}>RESET FILTER</button>
        </div>

        <div className="projectlist">
            <div className="containerProject">
                {projectMapping}
            </div>
        </div>

    </>);
}

export default Project;