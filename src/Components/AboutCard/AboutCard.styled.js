import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 1rem;
    img{
        width: 100px;
        height: 100px;
    }
`
export const Button = styled.button`
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.11);
    }
    `
export const Name = styled.h2`
    font-size: 1.5rem;
    margin-top: 1.5rem;
`
export const Description = styled.p`
    font-size: 1.2rem;
    margin-top: 1rem;
`