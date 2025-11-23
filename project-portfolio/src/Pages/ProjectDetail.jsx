import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from "../projects";
import projectTags from "../tags";
import { Link, Outlet } from 'react-router-dom';

const ProjectDetail = () => {

const {projectId} = useParams();

const [ptags, setPtags] = useState(projectTags);
const [projectList, setProjectList] = useState(projectData);
const projectFind = projectList.find(p =>p.id === Number(projectId));

if (!projectFind) {
    return <div>Project niet gevonden</div>
}

    return ( <>
    <div className="detailbody">
        <img className="detailimg" src={projectFind.bannerurl} ></img>
        <div className="detaildivider" />
        <p className="detailtext">
        Hier komt mijn beschrijving voor het project. Ik beschrijf hierin
        kort het onderhoud en doel van het project. Het is kort maar geeft
        wel een basis idee van wat het project is.
        </p>
        <div className="detaildivider" />
        <p className="detailtext">
        Hier komt een  beschrijving van hoe het project gemaakt is. 
        Ik leg uit waarom ik bepaalde programeertalen heb gekozen 
        of andere keuzes. 
        </p>

        <div className="detailsidebar">
        <div className="sidebardivider"/>
        <img className="sidebarimg" src={projectFind.imgurl} />
        <p className="sidebartitle">{projectFind.name}</p>
        <div className="sidebardivider"/>
        <h2 className="sidebarheader">Project details:</h2>
        <p className="sidebartext1">
            <span className="sbcolor1">Programmeertaal: C# en ReactJS</span> 
            <span className="sbcolor1">Taal: </span> Nederlands
        </p>
        <div className="sidebardivider"/>
        <h2 className="sidebarheader">Link naar project:</h2>
        <Link to={projectFind.link} className="sblink">[LINK]</Link>
        </div>
        </div>
    </> );
}
 
export default ProjectDetail;