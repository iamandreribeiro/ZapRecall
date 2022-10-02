import play from './assets/img/seta_play.png'
import virar from './assets/img/seta_virar.png'
import deck from './Deck';
import { useState } from 'react';

let renderTarget = "";

export default function Questions(props) {
    const [answer, setAnswer] = useState([]);

    function renderQuestion(n) {
        renderTarget = n.question;
        props.setCard(renderTarget);
        props.setQuestion(renderTarget);
        props.setCard([]);
        setAnswer([]);
    }

    function renderAnswer(n) {
        renderTarget = n.question;
        props.setCard(renderTarget);
        setAnswer([renderTarget]);
    }

    return (
        <div>
            {
                deck.map((n, i) => {
                    if (!props.question.includes(n.question)) {
                        return (
                            <div key={i} className="pergunta-fechada">
                                <p className={props.wrongAnswer.includes(n.question) ? "linha-vermelha" :
                                    props.rightAnswer.includes(n.question) ? "linha-verde" :
                                        props.mediumAnswer.includes(n.question) ? "linha-amarela" : ""}>
                                    Pergunta {i + 1}
                                </p>
                                <img onClick={() => !props.lockOnClick.includes(n.question) ?
                                    renderQuestion(n, i) : ""}
                                    src={props.wrongAnswer.includes(n.question) ? props.imgWrong :
                                        props.rightAnswer.includes(n.question) ? props.imgRight :
                                            props.mediumAnswer.includes(n.question) ? props.imgMedium :
                                                play}
                                    alt="img" />
                            </div>
                        )
                    } else {
                        if (!answer.includes(n.question)) {
                            return (
                                <div key={i} className="pergunta-aberta">
                                    {deck[i].question}
                                    <img src={virar} alt="teste"
                                        onClick={() => renderAnswer(n, i)} />
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="pergunta-aberta">
                                    {deck[i].answer}
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    )
};