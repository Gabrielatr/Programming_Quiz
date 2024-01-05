import React, {useState} from 'react';
import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import Q3 from "./Questions/Q3";
// import Q4 from "./Questions/Q4";
// import Q5 from "./Questions/Q5";

function Content({ currentTab }) {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [Result, setResult] = useState("");

  const openPopup = () => {
      setPopupOpen(true);
  };

  const closePopup = () => {
      setPopupOpen(false);
      switch (currentTab){
        case "Q1":
          currentTab = "Q2"
          break
        case "Q2":
          currentTab = "Q3"
          break
        case "Q3":
          currentTab = "Q4"
          break
        default:
          break
      }
  };

  const getMessage = (Tab) => {
    switch (Tab){
      case "Q1":
        setResult(Q1.returnMessage())
        openPopup()
        break
      case "Q2":
        setResult(Q2.returnMessage())
        openPopup()
        break
      case "Q3":
        setResult(Q3.returnMessage())
        openPopup()
        break
      default:
        break
    }
  }

  getMessage(currentTab)

  return (
    <>
      <div className="Content">
        {currentTab === 'Q1' && <Q1 />}
        {currentTab === 'Q2' && <Q2 />}
        {currentTab === 'Q3' && <Q3 />}
        {/* {currentTab === 'Q4' && <Q4 />}
        {currentTab === 'Q5' && <Q5 />} */}
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