import "./style.css"


function Q5({open}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedOption = formData.get('Q5_answer');

        if(selectedOption === "4"){
            open("Parabéns!! Você acertou")
        }else{
            open("Opss!! Você errou jumento!")
        }
    };


  return (
    <>
    <form onSubmit={handleSubmit} className='FormContainer'>
        <div className='Question q3'>
            <h2>Qual é a saída do código abaixo? </h2>
        </div>
        <div className='Options Options_5'>
            <div className="box_question">
                <img src="/img/question5.png" alt="Código fibonacci" />
            </div>
            <div className="Options Ops5">
                <label className="op op5">
                    <input type="radio" name="Q5_answer" value="1" />18
                </label><br />
                <label className="op op5">
                    <input type="radio" name="Q5_answer" value="2" />12
                </label><br />
                <label className="op op5">
                    <input type="radio" name="Q5_answer" value="3" />6
                </label><br />
                <label className="op op5">
                    <input type="radio" name="Q5_answer" value="4" />8
                </label>
            </div>
        </div>
        <div className='buttons'>
            <button className='btn' type='submit'>Confirmar</button>
        </div>
    </form>
    </>
  );
}

export default Q5;