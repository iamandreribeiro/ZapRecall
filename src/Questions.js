import deck from './Deck';

export default function Questions() {
    return (
        <div>
            {
                deck.map((n, i) => {
                    return (
                        <div className="pergunta-fechada">
                            <p>Pergunta {i + 1}</p>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                    )
                })
            }
        </div>
    )
};