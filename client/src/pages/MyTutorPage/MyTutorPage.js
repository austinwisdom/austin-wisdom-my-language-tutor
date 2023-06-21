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
    const { languageParam, topicParam } = useParams()
    const [language, setLanguage] = useState()
    const [topic, setTopic] = useState()
    const [aiGreeting, _setAIGreeting] = useState(
        [
            "Barista: What can I get started for you today?",
            "Roko: What's your favorite thing to do in your free time?",
            "Roko: Hey, who's your new friend?",
            "Mr. Smith: Do you need some help? You look a little lost.",
            "Roko: What are your plans for the weekend?",
            "Addison: Thanks for choosing to stay at our Airbnb! How was your trip here?",
            "Alex: If you had one week to spend $20,000, where would you go, and what would you do?"
        ])
    const [fetchedTopics, setFetchedTopics] = useState()

    //======================User input (message) & AI response==========
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [userConversation, setUserConversation] = useState([]);
    
    let topicsArr = []

    useEffect(() => {
        const language2 = languageParam || "en"
        const topic2 = topicParam || 0

        const getTopics = async () => {
            await axios
                .get(`${endPoint}/my-tutor/${language2}`)
                .then((res) => {
                    setFetchedTopics(res.data.topics)
                    console.log(`topics: ${res.data.topics[0].title}`)
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
        convoArr.push(message);
        setUserConversation(convoArr);
    
        return userConversation;
      };

    const onClickHandler = (e) => {
        setTopic(e.target.id)
    }

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
                    <p className="conversation__phrase conversation__phrase--ai">{aiGreeting[topicParam]}</p>
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
                    {fetchedTopics && (
                    <>
                        {console.log(fetchedTopics)}
                        {fetchedTopics.map(({id, title, language}) => {
                            {console.log(id, title, language)}
                            <Link to={`/my-tutor/${language}/${id}`}><button onClick={onClickHandler} id={id} className="info__button">{title}</button></Link>
                        })}
                        {/* <Link to={"/my-tutor/en/1"}><button onClick={onClickHandler} id={1} className="info__button">{fetchedTopics[0].title}</button></Link>
                        <Link to={"/my-tutor/en/1"}><button onClick={onClickHandler} id={1} className="info__button">{fetchedTopics[1].title}</button></Link>
                        <Link to={"/my-tutor/en/1"}><button onClick={onClickHandler} id={1} className="info__button">{fetchedTopics[2].title}</button></Link>
                        <Link to={"/my-tutor/en/1"}><button onClick={onClickHandler} id={1} className="info__button">{fetchedTopics[3].title}</button></Link>
                        <Link to={"/my-tutor/en/1"}><button onClick={onClickHandler} id={1} className="info__button">{fetchedTopics[4].title}</button></Link>
                        <Link to={"/my-tutor/en/1"}><button onClick={onClickHandler} id={1} className="info__button">{fetchedTopics[5].title}</button></Link> */}
                    </>
                    )}
                </div>

                <div>
                    {/* <h2 className="info__heading">Language</h2> */}
                    <div className="info__container--languages">
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