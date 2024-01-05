import React from 'react';

function Q1({open}) {


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedOption = formData.get('Q1_answer');

        if(selectedOption === "Alan"){
            open("Parabéns!! Você acertou")
        }else{
            open("Opss!! Você errou jumento!")
        }
    };

  return (
    <>
    <form onSubmit={handleSubmit} className='FormContainer'>
      <div className='Question'>
          <h2>Quem é o pai da computação?</h2>
      </div>
      <div className='Options'>
          <label>
            <input type="radio" name="Q1_answer" value="Alan" />
            Alan Turing
          </label><br />
          <label>
            <input type="radio" name="Q1_answer" value="Steve" />
            Steve Jobs
          </label><br />
          <label>
            <input type="radio" name="Q1_answer" value="Mark" />
            Mark Zuckerberg
          </label>
      </div>
      <div className='buttons'>
          <button className='btn' type='submit'>Confirmar</button>
          <button className='btn'>Voltar</button>
      </div>
    </form>

    </>
  );
}

export default Q1;
