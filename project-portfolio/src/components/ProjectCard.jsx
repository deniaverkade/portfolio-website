
const ProjectCard = (key,projectimg,projectname,{project,onShowDetail}) => {
    return ( <>
    <div className="cardcontainer" key={key}>
        <button className="projectcard" onClick={() => onShowDetail(project.id)}><img src={projectimg}/></button>
        <h3 className="projectname">{projectname}</h3>
    </div>
    </> );
}
 
export default ProjectCard;