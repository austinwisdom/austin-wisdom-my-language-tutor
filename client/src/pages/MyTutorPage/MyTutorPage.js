import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { endPoint} from "../../utilities/endpoints"

import flagUS from "../../assets/icons/flag-us.png"
import flagES from "../../assets/icons/flag-es.png"
import flagBR from "../../assets/icons/flag-br.png"
import flagDE from "../../assets/icons/flag-de.png"
import flagJP from "../../assets/icons/flag-jp.png"
import flagFR from "../../assets/icons/flag-fr.png"

import "./MyTutorPage.scss"

const MyTutorPage = () => {

    //======================Selected language & prompt==========
    let { choosenLanguage, choosenTopic } = useParams()
    const [language, setLanguage] = useState()
    const [topic, setTopic] = useState()
    const [aiGreeting, _setAIGreeting] = useState(
        [
            "Barista: What can I get started for you today?",
            "What's your favorite thing to do in your free time?",
            "Hey, who's your new friend?",
            "Do you need some help? You look a little lost.",
            "What are your plans for the weekend?",
            "Thanks for choosing to stay at our Airbnb! How long will you be staying?",
            "If you had one week to spend $20,000, where would you go, and what would you do?"
        ])

    //======================User input (message) & AI response==========
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [userConversation, setUserConversation] = useState([]);


    useEffect(() => {
        choosenLanguage ? setLanguage(choosenLanguage) : setLanguage("en")
        choosenTopic ? setTopic(choosenTopic) : setTopic(0)
    }, [])

    const trackConversation = (message, response) => {
        let convoArr = userConversation;
        convoArr.push(response);
        convoArr.push(message);
        setUserConversation(convoArr);
    
        return userConversation;
      };

    const onClickHandler = (e) => {
        setTopic(e.target.id)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        fetch(`${endPoint}/my-tutor/${language}/${topic}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {message} ),
        })
            .then((res) => res.json())
            .then((data) => {
                setResponse(data.message)
                trackConversation(message, response)
                // REMOVE THIS LATER
                console.log(data)
            })
            .catch((err) => {
                console.log("Unable to send user response")
            })

    }
    return (
        <main className="page__container">
            <section className="page__container--tutor">
                <div className="page__container--conversation">
                    <p className="conversation__phrase conversation__phrase--ai">{aiGreeting[topic]}</p>
                    {/* map rest of convo here */}
                    {userConversation.map((phrase) => {
                        return <p key={phrase} className="conversation__phrase">{phrase}</p>
                    })}
                    <p className="conversation__phrase">{response}</p>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    <label id="userInput"></label>
                    <textarea 
                        className="form__textarea"
                        name="userInput"
                        id="userInput"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    <button className="form__button--submit">SEND</button>
                </form>
            </section>
            <section className="info__container">
                <h2 className="info__heading"> Topics</h2>
        
                <div className="info__container--buttons">
                    <Link to={"/my-tutor/en/0"}><button onClick={onClickHandler} id={0} className="info__button">Ordering a drink</button></Link>
                    <Link to={"/my-tutor/en/1"}><button onClick={onClickHandler} id={1} className="info__button">Talking about hobbies</button></Link>
                    <Link to={"/my-tutor/en/2"}><button onClick={onClickHandler} id={2} className="info__button">Introducing a friend</button></Link>
                    <Link to={"/my-tutor/en/3"}><button onClick={onClickHandler} id={3} className="info__button">Asking for directions</button></Link>
                    <Link to={"/my-tutor/en/4"}><button onClick={onClickHandler} id={4} className="info__button">Talking about the weekend</button></Link>
                    <Link to={"/my-tutor/en/5"}><button onClick={onClickHandler} id={5} className="info__button">Checking into an Airbnb</button></Link>
                    <Link to={"/my-tutor/en/6"}><button onClick={onClickHandler} id={6} className="info__button">Dream vacation</button></Link>
                </div>

                <div>
                    <h2 className="info__heading">Language</h2>
                    <div>
                        <div className="info__div--buttons">
                            <Link><button id="es" className="info__button--flag"><img src={flagUS} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button id="pt" className="info__button--flag"><img src={flagBR} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button id="es" className="info__button--flag"><img src={flagES} className="info__img--language" alt="language selector for "/></button></Link>
                        </div>
                        <div className="info__div--buttons">
                            <Link><button id="de" className="info__button--flag"><img src={flagDE} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button id="jp" className="info__button--flag"><img src={flagJP} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button id="fr" className="info__button--flag"><img src={flagFR} className="info__img--language" alt="language selector for "/></button></Link>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    );
};

export default MyTutorPage;