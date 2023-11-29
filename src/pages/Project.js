import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList"

const Project = () => {
	const { id } = useParams();
	const project = projects[id];

	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">{project.title}</h1>
				<div className="projects">
					{project.children !== undefined && project.children.map(({ title, price, img }) => {
						return (
							<li className="project">
								<img src={img} alt={title} className="project__img" />
								<b className="project__title">{price} ₽</b>
								<h3 className="project__title">{title}</h3>
							</li>
						)
					})}
				</div>
			</div>
		</main>
	);
}

export default Project;