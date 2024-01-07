import { useState } from "react";
import "./css/cadastro.css"
import { Link} from 'react-router-dom';

const Cadastro = ({userData = {}, postUser, updateUser}) => {
    const [user, setUser] = useState(
        {
            name: userData.name ?? "",
            email: userData.email ?? "",
            password: userData.password ?? "",
        }
    )

    const handleValue = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitUser = e => {
        e.preventDefault();

        if(userData.id){
            console.log(user);
            updateUser(userData.id, user);
        }else{
            postUser(user);
            console.log(user);
        }
        console.log(user);

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


                <h1 className="cadastro">{!userData.id ? "Cadastro" : "Alterar conta"}</h1>

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



                    <div className="links">

                        <input type="submit" className="btn1" value={`${!userData.id ? "Criar conta" : "Alterar dados"}`} />
                        <div className="box-criar_conta">
                            <p className="paragrafo_entrar_conta">Já tem uma conta? </p> <Link to="/login" className="entrar_conta">Entrar</Link>
                        </div>

                    </div>

                </form>


            </div>
        </div>
        </>
    )
}

export default Cadastro