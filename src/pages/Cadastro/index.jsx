import { useEffect, useState } from "react";
import "./css/cadastro.css"
import { Link, useLocation, useNavigate} from 'react-router-dom';

const Cadastro = ({userData = {}, postUser, updateUser, id=0}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(
        {
            id: id,
            name: "",
            email: "",
            password: "",
            src: "",
            level: 1,
        }
    )

    useEffect(() =>{
        if (location.state?.userData) {
            setUser(location.state.userData);
        }else{
            setUser({
                id: id,
                name: "",
                email: "",
                password: "",
                src: "",
                level: 1,
            });
        }
        console.log(user);
    }, [])

    const handleValue = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitUser = e => {
        e.preventDefault();

        if(user.id !== id){
            updateUser(user.id, user);
        }else{
            postUser(user);
        }
        navigate("/home", {state:{currentUser: user}})

    }

    const handleClick = () => {
        const input = document.querySelector(".input__password");
        const inputIcon = document.querySelector(".input__icon");


                inputIcon.setAttribute(
                    'src',
                    input.getAttribute('type') === 'password' ? '/img/lock-open.svg' : '/img/lock-closed.svg'
                );

                input.setAttribute('type', input.getAttribute('type') === 'password' ? 'text' : 'password');
            
            
    }
    return (
        <>
        <div className="Body">
            <div className="box">


                <h1 className="cadastro">{user.id === id ? "Cadastro" : "Alterar conta"}</h1>

                <form onSubmit={submitUser}>
                    <div className="input_wrapper">
                        <input id="nome" type="nome" name="name" placeholder="Your name" required className="input__name" value={user.name} onChange={e => handleValue(e)} />
                        <label htmlFor="nome" className="input__label">
                            Nome
                        </label>
                    </div>
                    <div className="input_wrapper">
                        <input id="email" type="email" name="email" placeholder="Your e-mail" required className="input__email" value={user.email} onChange={e => handleValue(e)} />
                        <label htmlFor="email" className="input__label">
                            E-mail
                        </label>
                    </div>
                    <div className="input_wrapper">
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" title="Mínimo 6 letras"
                            required className="input__password" value={user.password} onChange={e => handleValue(e)} />
                        <label htmlFor="password" className="input__label">
                            Password
                        </label><img alt="Ícone de cadeado" className="input__icon" onClick={handleClick} src="/img/lock-closed.svg" />
                    </div>
                    <div className="input_wrapper">
                        <input id="image" type="text" name="src" placeholder="Digite sua senha" title="Caminho da imagem"
                             className="input__name" value={user.src} onChange={e => handleValue(e)} />
                        <label htmlFor="image" className="input__label">
                            Imagem de Perfil
                        </label>
                    </div>



                    <div className="links">

                        <input type="submit" className="btn1" value={`${user.id === id ? "Criar conta" : "Alterar dados"}`} />
                        {user.id === id ? <div className="box-criar_conta">
                            <p className="paragrafo_entrar_conta">Já tem uma conta? </p> <Link to="/" className="entrar_conta">Entrar</Link>
                        </div> : ""}

                    </div>

                </form>


            </div>
        </div>
        </>
    )
}

export default Cadastro