import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz/Quiz"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import { httpHelper } from "./helper/httpHelper"
import { useState, useEffect } from "react"

function App() {

  const [users, setUsers] = useState(null);
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

	const url = "http://localhost:5000/users"
	const api = httpHelper()

	useEffect(() => {
		getUsers()
	}, [])

	const postUser = user => {
		api
			.post(`${url}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	const getUsers = () => {
		api
			.get(`${url}`)
			.then(res => {
				setUsers(res)
			})
			.catch(err => console.log("Sem acesso" + err))
	}

  function verificar(user, userData){
    if (userData.email === user.email && userData.password === user.password){
      setCurrentUser(user);
      setAuth(true);
      return true;
    }
  }

  const autenticar = (userData) => {
    let login;
    try{
      if (users && users.length>0){
        login = users.map(dict => verificar(dict, userData))
      }else{
        console.log("O documento não existe ou se escontra vazio!");
      }
    }catch(error){
      console.error(error);
    }
    return login;
  }

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home updateUser={updateUser} deleteUser={deleteUser} user={currentUser} />} />
        <Route path="/login" element={<Login autenticar={autenticar} />} />
        <Route path="/cadastro" element={<Cadastro postUser={postUser} />} />
        <Route path="/quiz" element={<Quiz user={currentUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
