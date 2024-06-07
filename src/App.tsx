import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyAddress } from "./MyAddress";
import { NewAddress } from "./NewAddress";
import { EditAddress } from "./EditAddress";

export default function App() {
  return (
    <div className="h-screen w-full bg-slate-300 flex items-center justify-center">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyAddress />} />
        <Route path="/new-address" element={<NewAddress />} />
        <Route path="/:id" element={<EditAddress />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
