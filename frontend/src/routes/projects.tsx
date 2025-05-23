import { For, createResource } from "solid-js"

type Project = {
    id: number
    title: string
    description: string
    tech_stack: string
}

const fetchProjects = async() => {
    const response = await fetch("http:/127.0.0.1:8000/api/projects")
    return response.json()
}

export default function ProjectsPage(){
    const [projects] = createResource(fetchProjects)

    return(
        <main>
            <h1 class="text-3xl font-bold mb-4">
                Projects
            </h1>
            <ul>
                <For each={projects()}>
                    {(project: Project) => (
                        <li class="mb-2 p-4 border rounded shadow">
                            <h2 class="text-xl font-semibold">
                                {project.title}
                            </h2>
                            <p>
                                {project.description}
                            </p>
                            <p class="text-sm text-gray-500">
                                {project.tech_stack}
                            </p>
                        </li>
                    )}
                 </For>
            </ul>
        </main>
    )
}