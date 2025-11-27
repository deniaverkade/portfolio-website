import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from "../projects";

import { Link, Outlet } from 'react-router-dom';

const ProjectDetail = () => {

    const { projectId } = useParams();


    const [projectList, setProjectList] = useState(projectData);
    const projectFind = projectList.find(p => p.id === Number(projectId));

    if (!projectFind) {
        return <div>Project niet gevonden</div>
    }

    return (<>
        <div className="detailbody">
            <img className="detailimg" src={projectFind.bannerurl} ></img>
            <div className="detaildivider" />
            <p className="detailtext">
                {projectFind.description}
            </p>
            <div className="detaildivider" />
            <p className="detailtext">
                {projectFind.description2}
            </p>

            <div className="detailsidebar">
                <div className="sidebardivider" />
                <img className="sidebarimg" src={projectFind.imgurl} />
                <p className="sidebartitle">{projectFind.name}</p>
                <div className="sidebardivider" />
                <h2 className="sidebarheader">Project details:</h2>
                <p className="sidebartext">
                    <span className="sbcolor">Programmeertaal:</span>{projectFind.programlanguages} <br></br>
                    <span className="sbcolor">Taal: </span>{projectFind.languages}
                </p>
                <div className="sidebardivider" />
                <h2 className="sidebarheader">Link naar project:</h2>
                <Link to={projectFind.link} target="_blank" className="sblink">[LINK]</Link>
            </div>
        </div>
    </>);
}

export default ProjectDetail;