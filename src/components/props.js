import { useState } from "react"


export default function Index(props) {
    const [jogo, setJogo] = useState('');
    const [avaliacao, setAvaliacao] = useState();

    const adicionar = () => {
        let addjogo = {
            jogo2: jogo,
            avaliacao2: avaliacao
        }
        props.adicionar(addjogo)
    }

    return (
        <main>
            <div> nome: {props.nome} - hobby: {props.hobby} </div>

            <div> jogo: {props.jogo.jogo} avaliação: {props.jogo.avaliacao} </div>

            <div>
                {props.jogos.map(item => (
                    <div>
                        <div> jogo: {item.jogo2} - avaliação: {item.avaliacao2} </div>
                    </div>
                ))}

                <h3> Adicionar novo Jogo </h3>

                <div> jogo: <input type="text" value={jogo} onChange={e => setJogo(e.target.value)} /> </div>
                <div> avaliação: <input type="number" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div>
                <div> <button onClick={adicionar} > Adicionar </button> </div>

            </div>
        </main>
    )
}

