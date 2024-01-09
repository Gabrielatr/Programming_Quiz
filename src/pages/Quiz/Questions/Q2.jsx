import React from 'react';
import "./style.css"

function Q2({open}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedOption = formData.get('Q2_answer');
        
        if(selectedOption === "Ada"){
            open("Parabéns!! Você acertou")
        }else{
            open("Opss!! Você errou.")
        }
    };

  return (
    <>
    <form onSubmit={handleSubmit} className='FormContainer'>
        <div className='Question'>
            <h2>Quem foi a(o) primeira(o) programador(a) da história?</h2>
        </div>
        <div className='Options'>
            <label className="op">
                <div className='radioBtn'></div><input type="radio" name="Q2_answer" value="Ada" />
                Ada Lovelace
            </label><br />
            <label className="op">
                <input type="radio" name="Q2_answer" value="Alan" />
                Alan Turing
            </label><br />
            <label className="op">
                <div className='radioBtn'></div><input type="radio" id="Charles" name="Q2_answer" value="Charles" />
                Charles Babbage
            </label><br />
            <label className="op">
                <div className='radioBtn'></div><input type="radio" id="Konrad" name="Q2_answer" value="Konrad" />
                Konrad Zuse
            </label>
        </div>
        <div className='buttons'>
            <button className='btn' type='submit'>Confirmar</button>
        </div>
    </form>
    </>
  );
}

export default Q2;
