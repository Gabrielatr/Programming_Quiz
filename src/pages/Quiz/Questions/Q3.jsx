import React, { useState } from 'react';
import "./style.css"


function Q1() {
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
            <h2>Crie uma tabuada</h2>
        </div>
        <div className='Options'>
            <textarea name="" id="" cols="30" rows="10"></textarea>
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

export default Q1;