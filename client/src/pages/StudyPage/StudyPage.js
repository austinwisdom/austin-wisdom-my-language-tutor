import { useState } from "react";
import { Link } from "react-router-dom";

import flagUS from "../../assets/icons/flag-us.png"
import flagES from "../../assets/icons/flag-es.png"
import flagBR from "../../assets/icons/flag-br.png"
import flagDE from "../../assets/icons/flag-de.png"
import flagJP from "../../assets/icons/flag-jp.png"
import flagFR from "../../assets/icons/flag-fr.png"


import speakerIcon from "../../assets/icons/speaker-black-yellow.png"

import "./StudyPage.scss"

const StudyPage = () => {

    const [lessonSlide, setLessonSlide] = useState(0)

    const [lessonSlideArray] = useState(
        [
            {
                id: 0,
                lesson_title: "What's up?",
                info_title: "Informal Greetings",
                info: "What's up? is one of the most common ways Americans greet each other."
            },
            {
                id: 1,
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
        <main className="page__container">
            <section className="page__container--tutor">
            <div className="lesson__div">
                <div>
                    <h2 className="lesson__title">{lessonSlideArray[lessonSlide].lesson_title}</h2>
                    <p>Advanced I: Lesson: 01</p>
                </div>
                <div className="lesson__div--dropdowns">
                    <div className="lesson__dropdown">
                        <h3 className="lesson__dropdown--heading">Lesson</h3>
                        <div className="lesson__dropdown--content">
                            <Link><p>01: Informal Greetings</p></Link>
                        </div>
                    </div>
                    <div className="lesson__dropdown">
                        <h3 className="lesson__dropdown--heading">Level</h3>
                        <div className="lesson__dropdown--content">
                            <Link><p>01: Beginner I</p></Link>
                            <Link><p>02: Beginner II</p></Link>
                            <Link><p>03: Intermediate I</p></Link>
                            <Link><p>04: Intermediate II</p></Link>
                            <Link><p>05: Advanced I</p></Link>
                            <Link><p>06: Advanced II</p></Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className="page__container--conversation">
                    <div className="lesson__container--info">
                        <h3>{lessonSlideArray[lessonSlide].info_title}</h3>
                        <p>{lessonSlideArray[lessonSlide].info}</p>
                    </div>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    {/* <label id="userInput"></label>
                    <textarea 
                        className="form__textarea"
                        name="userInput"
                        id="userInput"
                    >
                    </textarea> */}
                    <div className="lesson__buttons--div">
                        <button className="lesson__buttons--navigate" onClick={goBack}>BACK</button>
                        <button className="lesson__buttons--navigate" onClick={goForward}>NEXT</button>
                    </div>
                </form>
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
                </article>

                {/* <div>
                    <div className="info__container--languages">
                    <h2 className="info__heading"> My languages</h2>
                        <div className="info__div--buttons">
                            <Link><button onClick={onClickHandler} id="es" className="info__button--flag"><img src={flagUS} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="pt" className="info__button--flag"><img src={flagBR} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="es" className="info__button--flag"><img src={flagES} className="info__img--language" alt="language selector for "/></button></Link>
                        </div>
                        <div className="info__div--buttons">
                            <Link><button onClick={onClickHandler} id="de" className="info__button--flag"><img src={flagDE} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="jp" className="info__button--flag"><img src={flagJP} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="fr" className="info__button--flag"><img src={flagFR} className="info__img--language" alt="language selector for "/></button></Link>
                        </div>
                    </div>
                </div> */}
            </section>
        </main>
    );
};

export default StudyPage;

