export default function Footer(props) {

    return (
        <div className="footer-concluidos">
            <div className="container-botoes">
                <button className="red" onClick={() =>
                    props.setContador(props.contador + 1)}>
                    Não lembrei</button>
                <button className="yellow" onClick={() =>
                    props.setContador(props.contador + 1)}>
                    Quase não lembrei
                </button>
                <button className="green" onClick={() =>
                    props.setContador(props.contador + 1)}>
                    Zap!
                </button>
            </div>
            <h1>{props.contador}/8 concluidos</h1>
        </div>
    )
};
