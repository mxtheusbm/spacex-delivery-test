import { ReactElement } from "react"
import { Link } from "react-router-dom";

type ContainerProps = {
 children: ReactElement;
 title: string;
 onOk?: () => void;
 onCancel?: () => void;
 okText?: string;
 type?: "button" | "submit" | "reset";
}

export const Container = ({ children, title, onOk, okText, type }: ContainerProps) => {
  return (
    <div className="bg-white rounded-xl h-4/5 w-96 flex flex-col">
      <header className="flex items-center gap-6 p-4 border-b-2 border-slate-50">
        <h1 className="text-2xl font-medium">{title}</h1>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="flex items-center justify-end gap-3 p-4 bg-slate-50 rounded-b-xl">
        <Link
          to='/' 
          className="bg-white hover:shadow-md rounded-lg px-6 py-3 text-center" 
        >
          Cancelar
        </Link>
        <button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 py-3"
          onClick={onOk}
          type={type ? type : "button"}
        >
            {okText ? okText : 'Salvar mudanças'}
          </button>
      </footer>
    </div>
  )
}