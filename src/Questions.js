import play from './assets/img/seta_play.png'
import virar from './assets/img/seta_virar.png'
import deck from './Deck';
import { useState } from 'react';
import styled from "styled-components"

let renderTarget = "";
let color = "";
let line = "";

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
        <>
            {
                deck.map((n, i) => {
                    if (!props.question.includes(n.question)) {
                        if(props.wrongAnswer.includes(n.question)) {
                            color = "#FF3030"
                            line = "line-through";
                        }
                        else if(props.mediumAnswer.includes(n.question)) {
                            color = "#FF922E"
                            line = "line-through";
                        }
                        else if(props.rightAnswer.includes(n.question)) {
                            color = "#2FBE34"
                            line = "line-through";
                        }
                        else {
                            color = "black";
                            line = "";
                        }
                        return (
                            <StyledFechada>
                                <StyledPalavra color={color} line={line}>
                                    Pergunta {i + 1}
                                </StyledPalavra>
                                <img onClick={() => !props.lockOnClick.includes(n.question) ?
                                    renderQuestion(n, i) : ""}
                                    src={props.wrongAnswer.includes(n.question) ? props.imgWrong :
                                        props.rightAnswer.includes(n.question) ? props.imgRight :
                                            props.mediumAnswer.includes(n.question) ? props.imgMedium :
                                                play}
                                    alt="img" />
                            </StyledFechada>
                        )
                    } else {
                        if (!answer.includes(n.question)) {
                            return (
                                <StyledAberta>
                                    {deck[i].question}
                                    <img src={virar} alt="teste"
                                        onClick={() => renderAnswer(n, i)} />
                                </StyledAberta>
                            )
                        } else {
                            return (
                                <StyledAberta>
                                    {deck[i].answer}
                                </StyledAberta>
                            )
                        }
                    }
                })
            }
        </>
    )
};

const StyledFechada = styled.div`
    width: 330px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 10px 0 5px 0;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        // color: #333333;
    }
`

const StyledAberta = styled.div`
    width: 330px;
    height: 130px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const StyledPalavra = styled.p`
    text-decoration: ${props => props.line};
    color: ${props => props.color}
`