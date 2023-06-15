import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import flagUS from "../../assets/icons/flag-us.png"
import flagES from "../../assets/icons/flag-es.png"
import flagBR from "../../assets/icons/flag-br.png"
import flagDE from "../../assets/icons/flag-de.png"
import flagJP from "../../assets/icons/flag-jp.png"
import flagFR from "../../assets/icons/flag-fr.png"

import "./MyTutorPage.scss"

const MyTutorPage = () => {

    let { choosenLanguage, choosenTopic } = useParams()
    const [language, setLanguage] = useState()
    const [topic, setTopic] = useState()

    useEffect(() => {
        choosenLanguage ? setLanguage(choosenLanguage) : setLanguage("en")
        choosenTopic ? setTopic(choosenTopic) : setTopic(0)
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <main className="page__container">
            <section className="page__container--tutor">
                {/* <h1 className="page__heading">MyTUTOR</h1> */}
                <div className="page__container--conversation" contenteditable>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    <label id="userInput"></label>
                    <textarea 
                        className="form__textarea"
                        name="userInput"
                        id="userInput"
                    >
                    </textarea>
                    <button className="form__button--submit">SEND</button>
                </form>
            </section>
            <section className="info__container">
                <h2 className="info__heading"> Topics</h2>
        
                <div className="info__container--buttons">
                    <button id={0} className="info__button">Ordering a drink</button>
                    <button id={1} className="info__button">Talking about hobbies</button>
                    <button id={2} className="info__button">Introducing a friend</button>
                    <button id={3} className="info__button">Asking for directions</button>
                    <button id={4} className="info__button">Talking about the weekend</button>
                    <button id={5} className="info__button">Checking into an Airbnb</button>
                    <button id={6} className="info__button">Dream vacation</button>
                </div>

                <div>
                    <h2 className="info__heading">Language</h2>
                    <div>
                        <div className="info__div--buttons">
                            <button className="info__button--flag"><img src={flagUS} className="info__img--language" alt="language selector for "/></button>
                            <button className="info__button--flag"><img src={flagBR} className="info__img--language" alt="language selector for "/></button>
                            <button className="info__button--flag"><img src={flagES} className="info__img--language" alt="language selector for "/></button>
                        </div>
                        <div className="info__div--buttons">
                            <button className="info__button--flag"><img src={flagDE} className="info__img--language" alt="language selector for "/></button>
                            <button className="info__button--flag"><img src={flagJP} className="info__img--language" alt="language selector for "/></button>
                            <button className="info__button--flag"><img src={flagFR} className="info__img--language" alt="language selector for "/></button>
                        </div>
                    </div>
                
                </div>
    
            </section>
            
        </main>
    );
};

export default MyTutorPage;