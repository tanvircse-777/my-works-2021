import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import Styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';

const Styles = Styled.div`

.jumbo{
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 200px;
    position: relative;
    z-index: -2;
}

overlay{
    background-color:#000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left:0;
    botton:0;
    right:0;
    z-index:-1;
}
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'>

            </div>
            <Container>
                <h1>Hello</h1>
                <p>Learn react</p>
            </Container>
        </Jumbo>
    </Styles>
)