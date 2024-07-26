"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Project } from "@/@types/project"
import useGetAllProjects from "@/services/get-all-projects"

export default function Projects() {
  const { data, isLoading, isError } = useGetAllProjects()

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Projetos</h1>
      <div>
        {data?.map((project: Project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Data criação{project.createdAt}</p>
          </CardFooter>
        </Card>
      ))}
      </div>
      
    </div>
  )
}
