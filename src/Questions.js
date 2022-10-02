import play from './assets/img/seta_play.png'
import virar from './assets/img/seta_virar.png'
import deck from './Deck';
import { useState } from 'react';

let mostrar = [];

export default function Questions(props) {
    const [pergunta, setPergunta] = useState([]);
    const [resposta, setResposta] = useState([]);

    function mostraPergunta(n, i) {
        mostrar = [n];
        console.log(mostrar);
        setPergunta(mostrar);
    }

    function mostraResposta(n, i) {
        let errado = [...props.errou, n];
        let quase = [...props.quase, n];
        let certo = [...props.acertou, n];
        mostrar = [n];
        console.log(mostrar);
        setResposta(mostrar);
        if (i % 2 != 0) {
            props.setErrou(errado);
            console.log(errado);
        } else {
            props.setQuase(certo);
            console.log(certo);
        }
    }

    return (
        <div>
            {
                deck.map((n, i) => {
                    if (!pergunta.includes(n)) {
                        return (
                            <div className="pergunta-fechada" key={i}>
                                <p className={props.errou.includes(n) ? "linha-vermelha" :
                                    props.acertou.includes(n) ? "linha-verde" :
                                        props.quase.includes(n) ? "linha-amarela" : ""}>
                                    Pergunta {i + 1}
                                </p>
                                <img src={play} alt="teste" onClick={() => mostraPergunta(n, i)} />
                            </div>
                        )
                    } else {
                        if (!resposta.includes(n)) {
                            return (
                                <div className="pergunta-aberta">
                                    {deck[i].question}
                                    <img src={virar} alt="teste"
                                        onClick={() => mostraResposta(n, i)} />
                                </div>
                            )
                        } else {
                            return (
                                <div className="pergunta-aberta">
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