import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Quiz from "./pages/Quiz/Quiz"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
