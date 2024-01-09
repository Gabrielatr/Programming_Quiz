import "./Quiz.css"
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Content from "./Content";
import { useLocation } from "react-router-dom";

const Quiz = ({updateUser}) => {

    const location = useLocation();
    const [currentTab, setCurrentTab] = useState(null);
    const [user, setUser] = useState(
        {
            id: 1,
            name: "",
            email: "",
            password: "",
            src: "",
            level: 1,
        }
    )
    
    useEffect(() => {
        if (location.state.currentUser) {
            setUser(location.state.currentUser);
            console.log("Quiz:"  + JSON.stringify(user, null, 2))
            setCurrentTab("Q" + user.level);
        }
    }, []);
    
    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    

    return (
        <div className="QuizContainer">
            <Header onTabChange={handleTabChange} user={user} />
            <Content currentTab={currentTab} user={user} update={updateUser} updateTab={handleTabChange}/>
        </div>
    )
}

export default Quiz;