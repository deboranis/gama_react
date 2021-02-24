import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 00 .25rem;

    &focus,
    &active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: .25rem 0 0 .25rem;
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ErrorMsg = styled.p`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
`;