import { Container } from "./components/Container"
import { ItemList } from "./components/ItemList"
import { Link } from "react-router-dom"
import { address } from "./utils/address"
import { Input } from "./components/Input"
import { useState } from "react"

export const MyAddress = () => {
  const data = address()
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleInput = (event: any) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    const newFilteredData = data.filter(item =>
      item.name.toLowerCase().includes(newSearchTerm)
    );
    setFilteredData(newFilteredData);
  };
  
  return (
    <Container
      title="Meus endereços"
    >
      <div className="p-4">
        <div className="flex gap-3 mb-4">
          <Input name="search" type="text" placeholder="Digite o nome do endereço aqui" onChange={handleInput} />
          <Link 
            to='/new-address' 
            className="text-xs border border-indigo-600 text-indigo-600 rounded-lg px-6 py-2 w-32 flex items-center justify-center gap-2 hover:bg-indigo-50"
          >
            Adicionar
          </Link>
        </div>

        <ul className=" flex flex-col gap-2">
          {filteredData?.map(address => (
            <ItemList key={address.name} address={address} />
          ))}
        </ul>
      </div>
    </Container>
  )
}