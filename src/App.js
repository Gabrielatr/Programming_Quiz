import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz/Quiz"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import NoPage from "./pages/NoPage"
import { httpHelper } from "./helper/httpHelper"
import { useState, useEffect } from "react"

function App() {

  const [users, setUsers] = useState(null);
  const [lastId, setLastId] = useState(null);
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

	const url = "http://localhost:5000/users"
	const api = httpHelper()

	useEffect(() => {
		fetch('http://localhost:5000/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        let n = 0;
        data.map(() => n+=1)
        setLastId(n+1)
        setUsers(data);
      })
      .catch(err => console.log("Sem acesso" + err))
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

  // function verificar(user, userData){
  //   if (userData.email === user.email && userData.password === user.password){
  //     setCurrentUser(user);
  //     setAuth(true);
  //     return true;
  //   }
  // }

  // const autenticar = (userData) => {
  //   let login;
  //   try{
  //     if (users && users.length>0){
  //       login = users.map(dict => verificar(dict, userData))
  //     }else{
  //       console.log("O documento não existe ou se escontra vazio!");
  //     }
  //   }catch(error){
  //     console.error(error);
  //   }
  //   return login;
  // }

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        {/* autenticar={autenticar}  */}
        <Route path="/cadastro" element={<Cadastro postUser={postUser} id={lastId} />} />
        <Route path="/alterar" element={<Cadastro updateUser={updateUser} />} />
        <Route path="/quiz" element={<Quiz user={currentUser} updateUser={updateUser} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
