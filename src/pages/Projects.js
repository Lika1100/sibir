import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Меню</h2>
				<ul className="projects">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
								children={project.children}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
