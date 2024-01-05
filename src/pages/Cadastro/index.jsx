import "./css/cadastro.css"
import { Link} from 'react-router-dom';

const Cadastro = () => {
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
            <div className="box">


                <h1 className="cadastro">Cadastro</h1>

                <div className="input_wrapper">
                    <input id="nome" type="nome" name="nome" placeholder="Your name" required className="input__name" />
                    <label htmlFor="nome" className="input__label">
                        Nome
                    </label>
                </div>
                <div className="input_wrapper">
                    <input id="email" type="email" name="email" placeholder="Your e-mail" required className="input__email" />
                    <label htmlFor="email" className="input__label">
                        E-mail
                    </label>
                </div>
                <div className="input_wrapper">
                    <input id="password" type="password" name="password" placeholder="Digite sua senha" title="Mínimo 6 letras"
                        required className="input__password" />
                    <label htmlFor="password" className="input__label">
                        Password
                    </label><img alt="Ícone de cadeado" className="input__icon" onClick={handleClick} src="/img/lock-closed.svg" />
                </div>



                <div className="links">

                    <button className="btn1" type="submit">Criar conta</button>
                    <div className="box-criar_conta">
                        <p className="paragrafo_entrar_conta">Já tem uma conta? </p> <Link to="/login" className="entrar_conta">Entrar</Link>
                    </div>

                </div>




            </div>
        </>
    )
}

export {Cadastro}