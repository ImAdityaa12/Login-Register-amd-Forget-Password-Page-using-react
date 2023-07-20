import React, { useState } from "react";
import logo from './logo.svg';

import { Login } from "./Login";
import { Register } from "./Register";
import { ForgetPass } from "./ForgetPass"
import { BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forget" element={<ForgetPass />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;