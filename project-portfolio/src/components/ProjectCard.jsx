
const ProjectCard = ({ projectimg, projectname, project, onShowDetail }) => {
    return (<>
        <div className="cardcontainer">
            <button className="projectcard" onClick={() => onShowDetail(project.id)}><img className="cardimg" src={projectimg} /></button>
            <h3 className="projectname">{projectname}</h3>
        </div>
    </>);
}

export default ProjectCard;