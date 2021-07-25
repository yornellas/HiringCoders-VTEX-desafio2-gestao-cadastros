import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: #FECA28;
    font-weight: 700;
    font-size: 35px;
    margin: 1rem 3rem 0 5rem;
    text-shadow: .2rem .2rem #382F60;
    -webkit-text-stroke: .02rem #382F60;

    @media (max-width: 768px) {
        margin: 2rem;
        padding: 1rem;
    }
`;

export const Text = styled.p`
    color: #FECA28;
    font-size: 20px;
    margin: 1rem 3rem 0 5rem;
    text-shadow: .1rem .1rem #382F60;
    -webkit-text-stroke: .02rem #382F60;

    @media (max-width: 768px) {
        margin: auto auto auto 2rem;
        padding: 1rem;
    }
`;

export const MainImage = styled.img`
    width: 40rem;
    height: auto;

    @media (max-width: 768px) {
        width: 15rem;
    }
`;
