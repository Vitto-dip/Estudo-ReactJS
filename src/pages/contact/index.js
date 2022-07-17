
import { Link } from 'react-router-dom'


export default function Index() {
    return (
        <main>
            <h1>This page is to my contacts so...</h1>
            <p>contact-me:</p>
            <p>emails: mariobros@gmail.com</p>
            <p>zapzap: 11 941104864</p>

            <Link to="/" > Voltar </Link>
        </main>
    )
}