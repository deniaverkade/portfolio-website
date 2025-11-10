
const ProjectCard = (key,projectimg,projectname,tags) => {
    return ( <>
    <div className="cardcontainer">
        <img src={projectimg}></img>
        <h3 className="projectname">{projectname}</h3>
    </div>
    </> );
}
 
export default ProjectCard;