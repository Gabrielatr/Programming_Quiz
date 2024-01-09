import React, {useEffect, useState} from 'react';
import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import Q3 from "./Questions/Q3";
import Q4 from "./Questions/Q4";
import Q5 from "./Questions/Q5";

function Content({ currentTab, user, update, updateTab }) {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [Result, setResult] = useState("");

  useEffect(()=>{
    console.log(user.level);
    console.log(currentTab);
  }, [])

  const up = async(id, user) =>{
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }catch(e){
      console.error(e)
    }
  }

  const openPopup = (message) => {
      setResult(message);
      if (Result === "Parabéns!! Você acertou"){
        user.level = user.level+1;
        up(user.id, user);
        updateTab("Q" + user.level);
      }
      setPopupOpen(true);
  };

  const closePopup = () => {
      setPopupOpen(false);
  };

  return (
    <>
      <div className="Content">
        {currentTab === 'Q1' && <Q1 open={openPopup}  />}
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