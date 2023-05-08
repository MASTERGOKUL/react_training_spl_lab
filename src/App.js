import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/nav";
import Whatsapp from "./components/jack";
import Form from "./components/form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [name, setName] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/web" element={<Web />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function Input() {
  const [name, setName] = useState("");
  return (
    <div>
      
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={name.split("").reverse().join("")}
          id="name"
          placeholder="reversed"
        />
      </form>
      <h1>{name}</h1>
      <Link to={'https://www.youtube.com/watch?v=fRwX3-JTsGc&list=PLfD4W8QfMd5DbFccLzRFeG0QjWWHGTT3-'}>Whatsapp</Link>
    </div>
  );
}
export function Web() {
  return (
    <div>
      <h1>Hi web!</h1>
    </div>
  );
}

export default App;
