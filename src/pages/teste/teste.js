import { Link, useNavigate } from "react-router-dom";

export default function Index() {
    
    const naveg = useNavigate();

    const abrirHome = () => {
        naveg(-1);
    }

    return (
        <main>
            <h1> Teste </h1>

            <Link to="/" > Home </Link>
            <button onClick={abrirHome}> Home </button>
        </main>
    )
}