import { useState } from "react";
import "./estilos/style.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState(null);
    const navigate = useNavigate();
    
    const handleClick = () => {
        const input = document.querySelector(".input__field");
        const inputIcon = document.querySelector(".input-icon");


                inputIcon.setAttribute(
                    'src',
                    input.getAttribute('type') === 'password' ? '/img/lock-open.svg' : '/img/lock-closed.svg'
                );

                input.setAttribute('type', input.getAttribute('type') === 'password' ? 'text' : 'password');
            
            
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(){
        fetch('http://localhost:5000/users')
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.map(user =>{
                
                if(user.email === formData.email){
                    if(user.password === formData.password){
                        navigate("/home", { 
                            state: {
                                currentUser: user,
                            }
                        });
                    }else{
                        alert("Senha errada!");
                    }
                }
                return 0;
            });
        });
	}

    return (
        <>
        <div className="Body">
            <div className="box">
                <h1 className="login">Login</h1>

                <form>
                    <div className="input_wrapper">
                        <input id="email" type="email" name="email" placeholder="Your e-mail" required className="input__name" onChange={e => handleChange(e)}/>
                        <label htmlFor="email" className="input__label">
                            E-mail
                        </label>
                    </div>

                    <div className="input_wrapper">
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" title="Mínimo 6 letras"
                            required className="input__field" onChange={e => handleChange(e)}/>
                        <label htmlFor="password" className="input__label">
                            Password
                        </label>
                        <img alt="Ícone de olho" className="input-icon" onClick={handleClick} src="/img/lock-closed.svg" />
                    </div>

                    <button type="button" className="btn_1" onClick={handleSubmit}>Entrar</button>
                </form>
                    <div className="box-criar_conta">
                        <p className="paragrafo_criar_conta">Ainda não tem uma conta? </p> 
                            <Link to="/cadastro" className="criar_conta">Criar conta</Link>
                            
                    </div>
                


            </div>
        </div>
        </>
    )
    

}

export default Login