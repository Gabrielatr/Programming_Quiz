import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdOutlineRestartAlt, MdSave, MdOutlineExitToApp } from "react-icons/md";

function Header({ onTabChange, user }) {
    const navigate = useNavigate();
    const handleClick = (tab) => {
        onTabChange(tab);
    };

    return (
        <div className="Header">
            <div className="ProfileImage">
                {/* {user.src && <img src={user.src} alt="Imagem de perfil" />} */}
            </div>

            <div className="levels">
                <div className="level" onClick={() => handleClick('Q1')}>1</div>
                <div className="level" onClick={() => handleClick('Q2')}>2</div>
                <div className="level" onClick={() => handleClick('Q3')}>3</div>
                <div className="level" onClick={() => handleClick('Q4')}>4</div>
                <div className="level" onClick={() => handleClick('Q5')}>5</div>
            </div>

            <div className="icons">
                {/* <MdOutlineExitToApp className="icon" onClick={() => navigate("/")}/> */}
            </div>
        </div>
    );
}

export default Header;
