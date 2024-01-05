import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
      </Routes>
    </Router>
  );
}


export default App;
