import "./Quiz.css"
import React, { useState } from 'react';
import Header from "./Header";
import Content from "./Content";

const Quiz = (user) => {

    const [currentTab, setCurrentTab] = useState("Q" + user.level);

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };
    

    return (
        <div className="QuizContainer">
            <Header onTabChange={handleTabChange} />
            <Content currentTab={currentTab} />
        </div>
    )
}

export default Quiz;