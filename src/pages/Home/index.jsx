import './Home.css';

const Home = () => {
    return (
        <>
        <div className='corpo'>
            <div className='title'>
                <span className='text'>Bem vindo</span> <br />
                <span className='name'>{"{ Fulano }"}</span>
            </div>
            <div className="container">
                <div className='nuvens'>
                    <img className='nuvem nRight' src="./img/nuvem.png" alt="Nuvem" />
                    <img className='nuvem nLeft' src="./img/nuvem.png" alt="Nuvem" />
                </div>

                <div className='content'>
                    <div className='info'>
                        <div className='profileImage'>
                            {/* <img src="#" alt="Clique para adicionar" /> */}
                        </div>
                        <div className='data'>
                            <p>Nome:</p>
                            <p>Email:</p>
                            <p>Level:</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <button className='btn'>Logout</button>
                        <button className='btn'>Jogar</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Home;