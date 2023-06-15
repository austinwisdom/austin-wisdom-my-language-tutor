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

    let { choosenLanguage, choosenTopic } = useParams()
    const [language, setLanguage] = useState()
    const [topic, setTopic] = useState()

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
                console.log(data)
                setResponse(data.message)
                trackConversation(message, response)
            })

    }
    return (
        <main className="page__container">
            <section className="page__container--tutor">
                {/* <h1 className="page__heading">MyTUTOR</h1> */}
                <div className="page__container--conversation">
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
                    <Link to={"/my-tutor/en/0"}><button id={0} className="info__button">Ordering a drink</button></Link>
                    <Link to={"/my-tutor/en/1"}><button id={1} className="info__button">Talking about hobbies</button></Link>
                    <Link to={"/my-tutor/en/2"}><button id={2} className="info__button">Introducing a friend</button></Link>
                    <Link to={"/my-tutor/en/3"}><button id={3} className="info__button">Asking for directions</button></Link>
                    <Link to={"/my-tutor/en/4"}><button id={4} className="info__button">Talking about the weekend</button></Link>
                    <Link to={"/my-tutor/en/5"}><button id={5} className="info__button">Checking into an Airbnb</button></Link>
                    <Link to={"/my-tutor/en/6"}><button id={6} className="info__button">Dream vacation</button></Link>
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