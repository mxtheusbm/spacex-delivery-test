import PinMap from '../assets/pinmap.jpg'
import { Address } from "../utils/address"
import { Link } from "react-router-dom"

type ItemListProps = {
  address: Address
}

export const ItemList = ({ address }: ItemListProps) => {
  return (
    <li>
      <input 
        type="radio" 
        id={address.name} 
        name='address'
        value={address.id} 
        className="hidden peer" 
        required 
      />
      <label htmlFor={address.name} className="inline-flex gap-3 w-full p-5 bg-white border border-slate-200 rounded-lg cursor-pointer peer-checked:border-indigo-600">
        <img src={PinMap} alt="" className="h-14 w-12 rounded-xl"/>

        <div className="flex-1">
          <div className="">
            <div className="w-full text-lg font-semibold">{address.name}</div>
            <div className="w-full">{`${address.area} - ${address.planet}`}</div>
            <div></div>
          </div>
          
          <div className="flex items-center gap-1 mt-3">
            <Link to={`/${address.id}`} className="border border-slate-500 rounded-lg px-3 py-1 hover:bg-slate-50">Editar</ Link>
            <button className="border border-slate-500 rounded-lg px-3 py-1 hover:bg-slate-50">Apagar</button>
          </div>
        </div>
      </label>
    </li>
  )
}