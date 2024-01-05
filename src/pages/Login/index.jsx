import "./estilos/style.css";
import { Link} from 'react-router-dom';

const Login = () => {
    
    const handleClick = () => {
        const input = document.querySelector(".input__field");
        const inputIcon = document.querySelector(".input-icon");


                inputIcon.setAttribute(
                    'src',
                    input.getAttribute('type') === 'password' ? '/img/lock-open.svg' : '/img/lock-closed.svg'
                );

                input.setAttribute('type', input.getAttribute('type') === 'password' ? 'text' : 'password');
            
            
    }
    return (
        <>
            <div className="box">
                <h1 className="login">Login</h1>

                <div className="input_wrapper">
                    <input id="email" type="email" name="email" placeholder="Your e-mail" required className="input__name" />
                    <label htmlFor="email" className="input__label">
                        E-mail
                    </label>
                </div>

                <div className="input_wrapper">
                    <input id="password" type="password" name="password" placeholder="Digite sua senha" title="Mínimo 6 letras"
                        required className="input__field" />
                    <label htmlFor="password" className="input__label">
                        Password
                    </label>
                    <img alt="Ícone de olho" className="input-icon" onClick={handleClick} src="/img/lock-closed.svg" />
                </div>
                {/* <div className="links">
                            <a href="https://www.ua.pt/pt/cursos/tipo/tecnicos-superiores-profissionais" target="_blank"
                                className="restaurar_senha">Esqueceu a senha?</a>

                        </div> */}

                <button className="btn" type="submit">Entrar</button>
                <div className="box-criar_conta">
                    <p className="paragrafo_criar_conta">Ainda não tem uma conta? </p> 
                          <Link to="/cadastro" className="criar_conta">Criar conta</Link>
                        
                </div>



            </div>
        </>
    )
    

}

export {
    Login
}