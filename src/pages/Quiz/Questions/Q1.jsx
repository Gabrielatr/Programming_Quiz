import React, { useState } from 'react';

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
        }else{
            setResult("Opss!! Você errou jumento!")
        }
    };

    function returnMessage(){
      return Result
    }

  return (
    <>
    <form onSubmit={handleSubmit} className='FormContainer'>
      <div className='Question'>
          <h2>Quem é o pai da computação?</h2>
      </div>
      <div className='Options'>
          <label>
            <input type="radio" name="fav_language" value="Alan" />
            Alan Turing
          </label><br />
          <label>
            <input type="radio" name="fav_language" value="Steve" />
            Steve Jobs
          </label><br />
          <label>
            <input type="radio" name="fav_language" value="Mark" />
            Mark Zuckerberg
          </label>
      </div>
      <div className='buttons'>
          <button className='btn' type='submit'>Confirmar</button>
          <button className='btn'>Voltar</button>
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
