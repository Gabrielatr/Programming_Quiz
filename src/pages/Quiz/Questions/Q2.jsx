import React, { useState } from 'react';
import "./style.css"

function Q2() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [Result, setResult] = useState("");

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedOption = formData.get('Q2_answer');
        console.log('Resposta selecionada:', selectedOption);
        if(selectedOption === "Ada"){
            setResult("Parabéns!! Você acertou")
            openPopup()
        }else{
            setResult("Opss!! Você errou jumento!")
            openPopup()
        }
    };

  return (
    <>
    <form onSubmit={handleSubmit} className='FormContainer'>
        <div className='Question'>
            <h2>Quem foi a(o) primeira(o) programador(a) da história?</h2>
        </div>
        <div className='Options'>
            <label>
                <div className='radioBtn'></div><input type="radio" name="Q2_answer" value="Ada" />
                Ada Lovelace
            </label><br />
            <label>
                <input type="radio" name="Q2_answer" value="Alan" />
                Alan Turing
            </label><br />
            <label>
                <div className='radioBtn'></div><input type="radio" id="Charles" name="Q2_answer" value="Charles" />
                Charles Babbage
            </label><br />
            <label>
                <div className='radioBtn'></div><input type="radio" id="Konrad" name="Q2_answer" value="Konrad" />
                Konrad Zuse
            </label>
        </div>
        <div className='buttons'>
            <button className='btn' type='submit'>Confirmar</button>
        </div>
    </form>
    <div>
        {isPopupOpen && (
            <div className='popup'>
                <p>{Result}</p><br />
                <button className='btn' onClick={closePopup}>Continuar</button>
            </div>
        )}
    </div>
    </>
  );
}

export default Q2;
