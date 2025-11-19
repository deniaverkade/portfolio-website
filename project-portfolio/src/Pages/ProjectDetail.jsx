import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from "../projects";

const ProjectDetail = () => {

const {projectId} = useParams();

const navigate = useNavigate();
const [projectList, setProjectList] = useState([projectData]);
const projectFind = projectList.find(p.id === Number(projectId));

if (!projectFind) {
    return <div>Project niet gevonden</div>
}

    return ( <>

    <h1>Project detail pagina</h1>
    </> );
}
 
export default ProjectDetail;