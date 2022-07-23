import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/index.js'
import Contact from './pages/contact/index.js'
import Teste from './pages/teste/teste.js'

import NotFound from './pages/notFound/index.js'


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}