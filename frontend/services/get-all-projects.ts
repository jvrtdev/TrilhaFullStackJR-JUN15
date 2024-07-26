import { Project } from "@/@types/project"
import api from "./api"
import { useQuery } from "@tanstack/react-query"

export const getAllProjects = async () => {
  const { data } = await api.get<Project[]>("/projects")
  return data
}

export default function useGetAllProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    retry: false,
    refetchInterval: 60 * 10 * 1000
  })
}