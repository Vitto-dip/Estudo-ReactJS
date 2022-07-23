
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    background-color: ${props => props.cordefundo === "dark" ? "#000" : "#fff"};
    color: ${props => props.cordefundo === "dark" ? "#fff" : "#000"};
    padding: 20px 0px;
    width: 50em;

    h1:hover {
        text-decoration: underline;
    }
    .contact:hover {
        text-transform: uppercase;
    }

    a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        background-color: #555;
        padding: 10px;
        border-radius: 5px;
    }
`


export default function Index(props) {
    return (
        <main>
            <Container cordefundo="dark">
                <h1>This page is to my contacts so...</h1>
                <p className="contact">contact-me:</p>
                <p>emails: mariobros@gmail.com</p>
                <p>zapzap: 11 941104864</p>

                <Link to="/" > Voltar </Link>
            </Container>
        </main>
    )
}