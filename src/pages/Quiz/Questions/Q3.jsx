import React, { useState } from 'react';
import "./style.css"


function Q3({open}) {

    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState("");
    let numbers = [];
    const correctNumbers = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];

    function verifyNumbers(){
        if (correctNumbers.length !== numbers.length){
            return false;
        }
        for (let i=0; i<correctNumbers.length; i++){
            if(numbers[i] !== correctNumbers[i]){
                return false;
            }
        }
        return true;
    }
    

    function handleCode(code){
        try {
            // eslint-disable-next-line no-eval
            numbers = eval(code);
            setResults("Seu resultado: " + numbers.join(", "));
            setShowResults(true);

            verifyNumbers() ? open("Parabéns!! Você acertou") : open("Opps! Algo está errado.")

        }catch (error) {
            if(numbers.length === 0){
                open("Insira o código!");
            }else{
                open("Erro ao executar o código: " + error);
            }
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedOption = formData.get('Q3_answer');
        handleCode(selectedOption);
    };


  return (
    <>
    <form onSubmit={handleSubmit} className='FormContainer'>
        <div className='Question q3'>
            <h2>Crie uma função que retorna a tabuada de 6 em uma lista</h2>
            <h4>* Não esqueça de invocar a função no final *</h4>
        </div>
        <div className='Options'>
            <textarea name="Q3_answer" id="" cols="30" rows="10"></textarea>
            <div>
                Resultado esperado: {correctNumbers.join(", ")}
            </div>

            {showResults && <div>
                {results}
            </div>
            }
        </div>
        <div className='buttons'>
            <button className='btn' type='submit'>Confirmar</button>
        </div>
    </form>
    </>
  );
}

export default Q3;