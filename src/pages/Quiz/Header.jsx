import { MdOutlineRestartAlt, MdSave, MdOutlineExitToApp } from "react-icons/md";
import React from 'react';


function Header ({onTabChange}) {
    // npm install react-icons --save
    const handleClick = (tab) => {
        onTabChange(tab);
    };

    return (
        <div className="Header">
            <div className="ProfileImage">
            </div>

            <div className="levels">
                <div className="level" onClick={() => handleClick('Q1')}>1</div>
                <div className="level" onClick={() => handleClick('Q2')}>2</div>
                <div className="level" onClick={() => handleClick('Q3')}>3</div>
                <div className="level" onClick={() => handleClick('Q4')}>4</div>
                <div className="level" onClick={() => handleClick('Q5')}>5</div>
            </div>

            <div className="icons">
                <MdOutlineRestartAlt className="icon" />
                <MdSave className="icon" />
                <MdOutlineExitToApp className="icon" />
            </div>
        </div>
    );
}

export default Header;