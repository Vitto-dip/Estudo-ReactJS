
import { Link } from 'react-router-dom'

import { Titulo } from './styled'


export default function Index() {
    return (
        <main>
            <Titulo> Hello!! It´s me Marioo! </Titulo>

            <Link to="/contato" > Contact </Link>
        </main>
    )
}
