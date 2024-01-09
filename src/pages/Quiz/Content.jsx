import React, {useState} from 'react';
import "./Quiz.css"
import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import Q3 from "./Questions/Q3";
import Q4 from "./Questions/Q4";
import Q5 from "./Questions/Q5";

function Content({ currentTab, user, update, updateTab }) {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [Result, setResult] = useState("");

  // function up(id){
  //     fetch('http://localhost:5000/users/'+id)
  //         .then(res => {
  //             if (!res.ok) {
  //                 throw new Error(`HTTP error! Status: ${res.status}`);
  //             }
  //             return res.json();
  //         })
  //         .then(user => {
  //             console.log('Usuário antes da atualização:', user);
  
  //             const updatedUser = { ...user, level: user.level+1 };
  //               fetch(`http://localhost:5000/users/${user.id}`, {
  //                 method: 'PUT',
  //                 headers: {
  //                     'Content-Type': 'application/json',
  //                 },
  //                 body: JSON.stringify(updatedUser),
  //             })
  //                 .then(res => {
  //                     if (!res.ok) {
  //                         throw new Error(`HTTP error! Status: ${res.status}`);
  //                     }
  //                     return res.json();
  //                 })
  //                 .then(updatedUser => {
  //                     console.log('Usuário após a atualização:', updatedUser);
  //                 })
  //                 .catch(err => console.log(err));
  //         })
  //         .catch(err => console.log(err));
  
  // }

  const openPopup = (message) => {
      setResult(message);
      if (message === "Parabéns!! Você acertou"){
        if(parseInt(currentTab[1]) === user.level){
          user.level += 1
          // up(user.id, user);
          updateTab("Q" + user.level);
        }else if(parseInt(currentTab[1]) < user.level){
          updateTab("Q" + parseInt(currentTab[1])+1);
        }else if(parseInt(currentTab[1]) > user.level){
          updateTab("Q" + user.level);
        }else{
          console.log(parseInt(currentTab[1]) + " " + user.level)
        }
      }
      setPopupOpen(true);
  };

  const closePopup = () => {
      setPopupOpen(false);
  };

  return (
    <>
      <div className="Content">
        {currentTab === 'Q1' && <Q1 open={openPopup} />}
        {currentTab === 'Q2' && <Q2 open={openPopup} />}
        {currentTab === 'Q3' && <Q3 open={openPopup} />}
        {currentTab === 'Q4' && <Q4 open={openPopup} />}
        {currentTab === 'Q5' && <Q5 open={openPopup} />}
      </div>
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

export default Content;