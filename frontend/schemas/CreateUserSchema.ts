import * as z from 'zod'

type FieldName = 'name'| 'email' | 'password' 

export const formFieldsRegister: {
  name: FieldName
  type: string
  placeholder: string
  label: string
}[] = [
  {name: 'name', type: 'text', placeholder: 'Digite o seu nome', label: 'Nome'},
  {name: 'email', type: 'text', placeholder: 'Digite o seu email', label: 'Email'},
  {name: 'password', type: 'password', placeholder: 'Digite sua senha', label: 'Senha'},
]

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Por favor, insira um nome válido"
  }),

  email: z.string().min(3, {
    message: "Por favor, insira um email válido"
  }),
  password: z.string().min(3, {
    message: "Por favor, insira um email válido"
  }).max(20),
})