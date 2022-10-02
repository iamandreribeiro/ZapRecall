import { useState } from "react";

let arrayIcones = [];

export default function Footer(props) {
    const [acertos, setAcertos] = useState(0);
    const [contador, setContador] = useState(0);
    const [icones, setIcones] = useState([]);

    function errado() {
        const errado = [...props.errou, props.carta];
        arrayIcones = [...icones, props.imgErro];
        setAcertos(acertos + 0);
        setContador(contador + 1);
        props.setErrou(errado);
        setIcones(arrayIcones);
        props.setCarta([]);
        props.setPergunta([]);
    }

    function quase() {
        const quase = [...props.quase, props.carta];
        arrayIcones = [...icones, props.imgQuase];
        setAcertos(acertos + 50);
        setContador(contador + 1);
        props.setQuase(quase);
        setIcones(arrayIcones);
        props.setCarta([]);
        props.setPergunta([]);
    }

    function certo() {
        const certo = [...props.acertou, props.carta];
        arrayIcones = [...icones, props.imgCerto];
        setAcertos(acertos + 100);
        setContador(contador + 1);
        props.setAcertou(certo);
        setIcones(arrayIcones);
        props.setCarta([]);
        props.setPergunta([]);
    }

    if (contador > 7) {
        return (
            <div className="footer-concluidos">
                <h2>🥳 Você terminou!!! 🥳</h2>
                <h2>E obteve {acertos * 100 / 800}% de acerto</h2>
            </div>
        )
    } else {
        return (
            <div className="footer-concluidos">
                <div className="container-botoes">
                    <button disabled={contador > 7 ? true :
                        props.carta.length !== 0 ? false : true} className="red"
                        onClick={() => errado()}>
                        Não lembrei
                    </button>
                    <button disabled={contador > 7 ? true :
                        props.carta.length !== 0 ? false : true} className="yellow"
                        onClick={() => quase()}>
                        Quase não lembrei
                    </button>
                    <button disabled={contador > 7 ? true :
                        props.carta.length !== 0 ? false : true} className="green"
                        onClick={() => certo()}>
                        Zap!
                    </button>
                </div>
                <h1>{contador}/8 concluidos</h1>
                <div>
                    {
                        arrayIcones.map((n, i) => { return <img src={n} alt="img" key={i} /> })
                    }
                </div>
            </div>
        )
    }
};
