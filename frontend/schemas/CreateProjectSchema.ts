import * as z from 'zod'

type FieldName = 'name'| 'description'  

export const formFieldsRegister: {
  name: FieldName
  type: string
  placeholder: string
  label: string
}[] = [
  {name: 'name', type: 'text', placeholder: 'Nome do projeto', label: 'Nome do Projeto'},
  {name: 'description', type: 'text', placeholder: 'Coloque aqui a descrição do seu projeto', label: 'Descrição'},
]

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Por favor, insira um nome válido"
  }),

  description: z.string().min(3, {
    message: "Por favor, insira uma descrição válida"
  }),
})