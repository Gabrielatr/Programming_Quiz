import "./style.css"


function Q4({open}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedOption = formData.get('Q4_answer');

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
            <h2>Escolha a afirmativa correta: </h2>
        </div>
        <div className='Options'>
            <label className="op">
                <input type="radio" name="Q4_answer" value="1" />
                A var pode mudar de valor e tem escopo global, let e const tem sempre o mesmo valor.
            </label><br />
            <label className="op">
                <input type="radio" name="Q4_answer" value="2" />
                A var pode mudar de valor e tem escopo local, o let pode mudar de valor e tem escopo global e a const tem sempre o mesmo valor.
            </label><br />
            <label className="op">
                <input type="radio" name="Q4_answer" value="3" />
                A var não pode mudar de valor, o let pode mudar de valor e tem escopo local e a const pode mudar de valor.
            </label><br />
            <label className="op">
                <input type="radio" name="Q4_answer" value="4" />
                A var pode mudar de valor e tem escopo global, o let pode mudar de valor e tem escopo local e a const tem sempre o mesmo valor.
            </label>
        </div>
        <div className='buttons'>
            <button className='btn' type='submit'>Confirmar</button>
        </div>
    </form>
    </>
  );
}

export default Q4;