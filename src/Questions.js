import play from './assets/img/seta_play.png'
import virar from './assets/img/seta_virar.png'
import deck from './Deck';
import { useState } from 'react';

let mostrar = "";

export default function Questions(props) {
    const [resposta, setResposta] = useState([]);

    function mostraPergunta(n) {
        mostrar = n.question;
        props.setCarta(mostrar);
        props.setPergunta(mostrar);
        props.setCarta([]);
        setResposta([]);
    }

    function mostraResposta(n) {
        mostrar = n.question;
        props.setCarta(mostrar);
        setResposta([mostrar]);
    }

    return (
        <div>
            {
                deck.map((n, i) => {
                    if (!props.pergunta.includes(n.question)) {
                        return (
                            <div key={i} className="pergunta-fechada">
                                <p className={props.errou.includes(n.question) ? "linha-vermelha" :
                                    props.acertou.includes(n.question) ? "linha-verde" :
                                        props.quase.includes(n.question) ? "linha-amarela" : ""}>
                                    Pergunta {i + 1}
                                </p>
                                <img onClick={() => mostraPergunta(n, i)}
                                    src={props.errou.includes(n.question) ? props.imgErro :
                                        props.acertou.includes(n.question) ? props.imgCerto :
                                            props.quase.includes(n.question) ? props.imgQuase :
                                                play}
                                    alt="img" />
                            </div>
                        )
                    } else {
                        if (!resposta.includes(n.question)) {
                            return (
                                <div key={i} className="pergunta-aberta">
                                    {deck[i].question}
                                    <img src={virar} alt="teste"
                                        onClick={() => mostraResposta(n, i)} />
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