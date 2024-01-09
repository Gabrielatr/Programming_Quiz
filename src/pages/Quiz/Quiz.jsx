import "./Quiz.css"
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Content from "./Content";
import { useLocation } from "react-router-dom";

const Quiz = ({update}) => {

    const location = useLocation();
    const [user, setUser] = useState({
        name: "",
        email: "",
        level: 0,
    });
    
    useEffect(() => {
        if (location.state && location.state.currentUser) {
            setUser(location.state.currentUser);
            setCurrentTab("Q" + (user.level || 1));
        }
    }, []);
    

    const [currentTab, setCurrentTab] = useState(null);

    
    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    

    return (
        <div className="QuizContainer">
            <Header onTabChange={handleTabChange} user={user} />
            <Content currentTab={currentTab} user={user} update={update} updateTab={handleTabChange}/>
        </div>
    )
}

export default Quiz;