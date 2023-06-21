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

    //======================Selected language & prompt; render topics list==========
    const { languageParam, topicParam } = useParams()
    const [fetchedTopics, setFetchedTopics] = useState()

    //======================User input (message) & AI response; render conversation==========
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [userConversation, setUserConversation] = useState([]);

    useEffect(() => {
        const getTopics = async () => {
            await axios
                .get(`${endPoint}/my-tutor/${languageParam || "en"}`)
                .then((res) => {
                    setFetchedTopics(res.data.topics)
                })
                .catch((err) => {
                    console.log("Unable to fetch topics from FE")
                })
        }
        getTopics()
        
    }, [])

    const trackConversation = (message, response) => {
        let convoArr = userConversation;
        convoArr.push(response);
        convoArr.push(`Me: ${message}`);
        setUserConversation(convoArr);
    
        return userConversation;
      };

    const onSubmit = (e) => {
        e.preventDefault()

        fetch(`${endPoint}/my-tutor/${languageParam}/${topicParam}`, {
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
            })
            .catch((err) => {
                console.log("Unable to send user response")
            })

    }

    return (
        <main className="page__container">
            <section className="page__container--tutor">
                <div className="page__container--conversation">
                    <p className="conversation__phrase conversation__phrase--ai">
                        {fetchedTopics && topicParam && (
                            <>
                                {fetchedTopics[topicParam].starting_phrase}
                            </>
                        )}
                    </p>
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
                <h2 className="info__heading">Topics</h2>
        
                <div className="info__container--buttons">
                    {fetchedTopics && (
                    <>
                        {fetchedTopics.map(({id, title, language}) => {
                            return (
                                <Link key={id} to={`/my-tutor/${language}/${id}`}><button id={id} className="info__button">{title}</button></Link>
                            )
                            
                        })}
                    </>
                    )}
                </div>

                <div>
                    <div className="info__container--languages">
                        <div className="info__div--buttons">
                            <Link><button id="en" className="info__button--flag"><img src={flagUS} className="info__img--language" alt="language selector for "/></button></Link>
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