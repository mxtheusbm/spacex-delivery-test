import { FieldError, UseFormRegister } from "react-hook-form";

type InputProps = {
  label?: string;
  placeholder: string;
  name: string;
  type?: string;
  register?: UseFormRegister<any>;
  error?: FieldError;
  onChange?: (e: any) => void
}

export const Input = ({ label, name, type, placeholder, register, error, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-xs">{label}</label>}
      <input 
        className="border border-slate-400 p-3 rounded-lg text-xs" 
        type={type ? type : "text"} 
        placeholder={placeholder}
        onChange={onChange}
        {...register && {...register(name)}}
      />
      {error && <span className="text-xs text-red-600">{error.message}</span>}
    </div>
  )
}