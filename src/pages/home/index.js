
import { Link } from 'react-router-dom'

import { Titulo } from './styled'

import Texto from '../../components/teste.js'
import Texto2 from '../../components/teste2.js'
import Props from '../../components/props.js'

import { useEffect, useState } from 'react';

export default function Index() {
   let mostrar = false;

   let personagens = ['Mario', 'Princesa', 'Luidi', 'Sonic', 'Goku'];
   
   let info = [{
    nome: 'Mario',
    idade: 42
   }]
   
   let info2 = [
    {nome: 'Luidi' , idade: 40},
    {nome: 'Princesa', idade: 20}
   ]

////////////////////////////

   const [a, setA] = useState(0);
   const [b, setB] = useState('Mario');
   const [c, setC] = useState(true);
   const [d, setD] = useState(new Date());
   const [e, setE] = useState({nome: 'Mario', profissao: 'Encanador'});
   const [f, setF] = useState(['Mario', 'Luidi', 'Princesa']);
   const [g, setG] = useState([
    {nome: 'Luidi', profissao: 'Entregador de Pizza'},
    {nome: 'Princesa', profissao: 'Ser sequestrada'}
   ]);

////////////////////////////

   const[nome, setNome] = useState('Mario');
   const[hobby, setHobby] = useState('Salvar a Princesa');
   const[jogo, setJogo] = useState({ jogo:'MarioKart', avaliacao: 8.8 });
   const [jogos, setJogos] = useState([
    { jogo2: 'MarioBros', avaliacao2: 9.2 },
    { jogo2: 'Sonic', avaliacao2: 8.9 }
   ])

   const adicionarJogo = (jogo) =>  {
    let x = [...jogos, jogo];
    setJogos(x);
   }
   
////////////////////////////

   const[numero1, setNumero1] = useState(0);
   const[numero2, setNumero2] = useState(0);
   const[resultado, setResultado] = useState(0);

   const somar = () => {
    let y = numero1 + numero2;
    setResultado(y);
   }

   //useEffect(somar, [numero1, numero2]) forma simplificada

   useEffect(() => {
    somar();
   }, [numero1, numero2])

////////////////////////////

    return (
        <main>
            <Titulo> Hello!! It´s me Marioo! </Titulo>

            <Link to="/contato" > Contact </Link>

            <div>
                {mostrar === true
                    ? <Texto texto="Teste"/> 
                    : <Texto2 />
                }
            </div>

            <div>
                {personagens.map(item => (
                    <Texto texto={item} />
                ))}
            </div>

            <div>
                {info.map(item => (
                    <p> {item.nome}-{item.idade} </p>
                ))}
            </div>

            <div>
                {info2.map(item => (
                    <p> {item.nome}-{item.idade} </p>
                ))}
            </div>

            <div>
                <h2> Variaveis de estado </h2>

                <div> {a} </div>
                <div> {b} </div>
                <div> {c ? 'sim' : 'não'} </div>
                <div> {d.toISOString()} </div>
                <div> {e.nome} - {e.profissao} </div>
                <div> {f[0]} </div>
                <div> {g[1].nome} - {g[1].profissao} </div>
            </div>

            <div>
                <h2> Props </h2>

                <Props nome={nome} hobby={hobby} jogo={jogo} avaliacao={jogo} jogos={jogos} adicionar={adicionarJogo} />

            </div>

            <div>
                <h2> Eventos </h2>

                <div>
                    <h3> Numero 1: </h3>
                    <input type="number" value={numero1} onChange={e => setNumero1(Number(e.target.value))} />
                </div>
                <div>
                    <h3> Numero 2: </h3>
                    <input type="number" value={numero2} onChange={e => setNumero2(Number(e.target.value))} />
                </div>
                <div>
                    {resultado}
                </div>
                <div>
                    <button onClick={somar} > Somar </button>
                </div>

            </div>
        </main>
    )
}
