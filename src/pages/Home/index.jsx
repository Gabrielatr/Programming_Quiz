import { useLocation, useNavigate } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';

const Home = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() =>{
        setUser(location.state.currentUser);
    }, []);

    const handleNavigate = (tab) => {
        if (tab === "/quiz") {
            navigate("/quiz", {
                state: {
                    currentUser: user,
                },
            });
        } else {
            navigate(tab);
        }

    }

    return (
        <>
        <div className='corpo'>
            <div className='title'>
                <span className='text'>Bem vindo</span> <br />
                <span className='name'>{user.name}</span>
            </div>
            <div className="container">
                <div className='nuvens'>
                    <img className='nuvem nRight' src="./img/nuvem.png" alt="Nuvem" />
                    <img className='nuvem nLeft' src="./img/nuvem.png" alt="Nuvem" />
                </div>

                <div className='content'>
                    <div className='info'>
                        <div className='profileImage'>
                            {user.src && <img src={user.src} alt="Imagem de perfil" />}
                        </div>
                        <div className='data'>
                            <p><b>Nome:  </b> {user.name}</p>
                            <p><b>Email:  </b> {user.email}</p>
                            <p><b>Level:  </b> {user.level}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <button className='btn' onClick={() => handleNavigate("/login")}>Logout</button>
                        <button className='btn' onClick={() => handleNavigate("/quiz")}>Jogar</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Home;