

import styled from 'styled-components'

const Titulo = styled.h1`
    color: blueviolet;
    text-transform: uppercase;

    &:hover {
        color: white;
    }

    @media (max-width:600px){
        text-transform: lowercase;
    }
`;



export { Titulo };