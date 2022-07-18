
import { Link } from 'react-router-dom'

import { Titulo } from './styled'

import Texto from '../../components/teste.js'
import Texto2 from '../../components/teste2.js'

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
        </main>
    )
}
