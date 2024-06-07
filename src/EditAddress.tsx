import { useForm } from "react-hook-form"
import { Container } from "./components/Container"
import { Input } from "./components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormAddressSchema, formAddressSchema } from "./NewAddress"
import { useNavigate, useParams } from "react-router-dom"
import { Address, address } from "./utils/address"


export const EditAddress = () => {
  const navigate = useNavigate()
  
  const { id } = useParams()
  const myAddress: Address[] = address()
  const data = myAddress.filter(address => address.id === id)[0]

  const { register, handleSubmit, formState: { errors } } = useForm<FormAddressSchema>({
    resolver: zodResolver(formAddressSchema),
    defaultValues: {
      name: data.name,
      areaNumber: data.area,
      planetName: data.planet,
    }
  })

  const handleEditAddress = (data: FormAddressSchema) => {
    console.log('address', data)
    alert("Endereço editado com sucesso!")
    navigate('/')
  }
  
  return (
    <form onSubmit={handleSubmit(handleEditAddress)} className="h-full w-full flex justify-center items-center">
      <Container 
        title="Editar endereço"
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