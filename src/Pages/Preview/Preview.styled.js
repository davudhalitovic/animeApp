import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 150px;
    padding: 5rem;
    margin-top: 5rem;
`
export const Img = styled.img`
    width: 200px;
    height: 300px;
    border-radius: 5px;
`
export const Decsription = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    margin: 2rem;
    margin-left: 5rem;
    h1{
        margin-bottom: 3rem;
        font-size: 1.8rem;
    }
    p{
        font-size: 1rem;
    }
`
export const Button = styled.button`
    color: white;
    background: none;
    border-radius: 5px;
    margin-top: 1rem;
    border: 2px solid white;
    width: 150px;
    height: 40px;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.3s;
        border: 3px solid white;
    }
`