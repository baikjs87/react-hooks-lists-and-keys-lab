import React from "react"
import ProjectItem from "./ProjectItem"

function ProjectList({ projects }) {
	console.log(projects)
	const project = projects.map((e) => {
		return <a key={e.id}>{ProjectItem(e)}</a>
	})
	return (
		<div id="projects">
			<h2>My Projects</h2>
			<div id="project-list">{project}</div>
		</div>
	)
}

export default ProjectList
