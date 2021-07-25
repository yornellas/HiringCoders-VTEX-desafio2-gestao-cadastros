import styled from 'styled-components';

export const Title = styled.h2`
    color: #382F60;
    font-weight: 700;
    font-size: 25px;
    text-shadow: .04rem .04rem #FEFF89;
    -webkit-text-stroke: .02rem #382F60;

    margin: 6rem auto 0 auto;
`;

export const Form = styled.form`
    margin: 0.5rem auto auto auto;
    padding: 2rem;
    border: .15rem solid #382F60;
    border-radius: .2rem;

    a {
        text-decoration: none;
    }
`;

export const Fieldset = styled.fieldset`
    padding: .3rem;
    margin: .5rem auto .5rem auto;
    border: none;

    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 15rem;
    padding: .2rem;
    margin-left: .5rem;
    background-color: rgba(254, 255, 137, .25);
    border-radius: .2rem;
`;

export const SubmitButton = styled.input`
    width: 5rem;
    background-color: #FEFF89;
    border-radius: .3rem;
    margin: .5rem .5rem 0 0;

    &:hover {
        background-color: #FF9F68;
    }
`;

export const CancelButton = styled.button`
    padding: .3rem .8rem;
    width: 5rem;
    background-color: rgba(255, 159, 104, .3);
    border-radius: .3rem;
    margin: .5rem .5rem 0 0;
    color: #382F60;

    &:hover {
        background-color: #382F60;
        color: black;
    }
`;

