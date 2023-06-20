import { useState } from "react";
import { Link } from "react-router-dom";

import goldstars1 from "../../assets/images/stars/goldstars1.png"
import flagUS from "../../assets/icons/flag-us.png"
import flagES from "../../assets/icons/flag-es.png"
import flagBR from "../../assets/icons/flag-br.png"
import flagDE from "../../assets/icons/flag-de.png"
import flagJP from "../../assets/icons/flag-jp.png"
import flagFR from "../../assets/icons/flag-fr.png"


import speakerIcon from "../../assets/icons/speaker-black.png"

import "./StudyPage.scss"

const StudyPage = () => {

    const [lessonSlide, setLessonSlide] = useState(0)

    const [lessonSlideArray] = useState(
        [
            {
                id: 0,
                lesson_title: "What's up?",
                lesson_id: "Advanced I: Lesson 01",
                info_title: "Informal Greetings",
                info: "\"What's up?\" is one of the most common ways that Americans greet each other. It is considered informal, but you can still hear it in some professional environments.",
                info_title2: ""
            },
            {
                id: 1,
                lesson_title: "What's up?",
                lesson_id: "Advanced I: Lesson 01",
                info: "This is the second slide"
            }
        ]
    )

    const langArrays = [
        {
            lang: "en",
            words_en: ["See you later!", "What's up?", "That's awesome!", "cool", "smart"],
            words_pt: ["Até logo!", "Fala aí!", "Que legal!", "legal, beleza", "inteligente"]
        }
    ]

    const goBack = (e) => {
        if (lessonSlide > 0) {
            setLessonSlide(lessonSlide -1)
        }
    }

    const goForward = (e) => {
        if (lessonSlide < lessonSlideArray.length-1) {
            setLessonSlide(lessonSlide +1)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onClickHandler = (e) => {
        console.log("Build this out")
    }

    return (
        <main className="study__container">
            <section className="study__container--tutor">
            <div className="lesson__div">
                <div>
                    <h2 className="lesson__title">{lessonSlideArray[lessonSlide].lesson_title}</h2>
                    <p>{lessonSlideArray[lessonSlide].lesson_id}</p>
                </div>
                <div>
                    <img className="lesson__img--stars" src={goldstars1} />
                </div>
            </div>
                <div className="study__container--conversation">
                    <div className="lesson__container--info">
                        <h3 className="lesson__container--heading">{lessonSlideArray[lessonSlide].info_title}</h3>
                        <p className="lesson__container--body">{lessonSlideArray[lessonSlide].info}</p>
                    </div>
                </div>
                    <div className="lesson__buttons--div">
                        <button className="lesson__buttons--navigate" onClick={goBack}>BACK</button>
                        <button className="lesson__buttons--navigate" onClick={goForward}>NEXT</button>
                    </div>
            </section>

            <section className="words__container--section">
                <article className="words__article">
                    <h2 className="info__heading"> My words</h2>
                    <div className="words__container">
                        <div className="words__word">
                            <button className="words__button--icon"><img className="words__img--icon" src={speakerIcon} alt="speaker icon, click for text to speech on each phrase"/></button>
                            <div className="words__word--div">
                                <h3 className="words__subheading">See you later!</h3>
                                <p className="words__p">Até logo!</p>
                            </div>
                        </div>
                        <div className="words__word">
                            <button className="words__button--icon"><img className="words__img--icon" src={speakerIcon} alt="speaker icon, click for text to speech on each phrase"/></button>
                            <div className="words__word--div">
                                <h3 className="words__subheading">See you later!</h3>
                                <p className="words__p">Até logo!</p>
                            </div>
                        </div>
                        <div className="words__word">
                            <button className="words__button--icon"><img className="words__img--icon" src={speakerIcon} alt="speaker icon, click for text to speech on each phrase"/></button>
                            <div className="words__word--div">
                                <h3 className="words__subheading">See you later!</h3>
                                <p className="words__p">Até logo!</p>
                            </div>
                        </div>
                        <div className="words__word">
                            <button className="words__button--icon"><img className="words__img--icon" src={speakerIcon} alt="speaker icon, click for text to speech on each phrase"/></button>
                            <div className="words__word--div">
                                <h3 className="words__subheading">See you later!</h3>
                                <p className="words__p">Até logo!</p>
                            </div>
                        </div>
                        <div className="words__word">
                            <button className="words__button--icon"><img className="words__img--icon" src={speakerIcon} alt="speaker icon, click for text to speech on each phrase"/></button>
                            <div className="words__word--div">
                                <h3 className="words__subheading">See you later!</h3>
                                <p className="words__p">Até logo!</p>
                            </div>
                        </div>
                        <div className="words__word">
                            <button className="words__button--icon"><img className="words__img--icon" src={speakerIcon} alt="speaker icon, click for text to speech on each phrase"/></button>
                            <div className="words__word--div">
                                <h3 className="words__subheading">See you later!</h3>
                                <p className="words__p">Até logo!</p>
                            </div>
                        </div>
                        <div className="words__word">
                            <button className="words__button--icon"><img className="words__img--icon" src={speakerIcon} alt="speaker icon, click for text to speech on each phrase"/></button>
                            <div className="words__word--div">
                                <h3 className="words__subheading">See you later!</h3>
                                <p className="words__p">Até logo!</p>
                            </div>
                        </div>
                    </div>
                    <button className="lesson__buttons--practice">PRACTICE WORDS</button>
                </article>
            </section>
        </main>
    );
};

export default StudyPage;

