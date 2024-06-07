import { useForm } from "react-hook-form"
import { Container } from "./components/Container"
import { Input } from "./components/Input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

export const formAddressSchema = z.object({
  name: z
  .string({ 
    required_error: 'O nome é obrigatório',
    invalid_type_error: 'O nome é inválido'
  })
  .min(3, { message: "No mínimo 3 caractéres" }),
  planetName: z
  .string({ 
    required_error: 'O nome do planeta é obrigatório',
    invalid_type_error: 'O nome do planeta é inválido'
  })
  .min(3, { message: 'No mínimo 3 caractéres' }),
  areaNumber: z.coerce
  .number({
    required_error: 'O número da área é obrigatório',
    invalid_type_error: 'O número da área é inválido'
  })
  .int({ message: 'O número da área inválido' })
  .positive(({ message: 'O número da área inválido' }))
  .gte(1000, { message: 'O número da área deve conter 4 dígitos' })
  .lte(9999, { message: 'O número da área deve conter 4 dígitos' })
})

export type FormAddressSchema = z.infer<typeof formAddressSchema>

export const NewAddress = () => {
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormAddressSchema>({
    resolver: zodResolver(formAddressSchema)
  })

  const handleCreateNewAddress = (data: FormAddressSchema) => {
    console.log('address', data)
    alert("Endereço criado com sucesso!")
    navigate('/')
  }
  
  return (
    <form onSubmit={handleSubmit(handleCreateNewAddress)} className="h-full w-full flex justify-center items-center">
      <Container 
        title="Novo endereço"
        type="submit"
        okText="Confirmar"
      >
        <div className="p-4 flex flex-col gap-5">
          <Input 
            label="Nome" 
            placeholder="Nome do endereço" 
            name="name" 
            register={register} 
            error={errors.name} 
          />
          <Input 
            label="Área"
            type="number" 
            placeholder="Número da área" 
            name="areaNumber" 
            register={register}
            error={errors.areaNumber} 
          />
          <Input 
            label="Planeta" 
            placeholder="Nome do planeta" 
            name="planetName" 
            register={register} 
            error={errors.planetName}            
            />
        </div>
      </Container>
    </form>
  )
}