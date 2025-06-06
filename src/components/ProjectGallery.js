import ProjectView from "./ProjectView";

const ProjectGallery = ({images}) => {
    const projects = [...new Set(images.map(image => image.project))];
    
    return (
        <div>
            {projects.map(project => {return <ProjectView project={project} images={images} key={project}/>})}
        </div>
    )
}

export default ProjectGallery;