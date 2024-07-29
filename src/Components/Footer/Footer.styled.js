import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 160px;
    color: white;
`;

export const UpperSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%; 
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 50px;
        width: 50px;
    }
`;

export const LinkSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        color: white;
        margin-left: 1rem;
        transition: transform 0.3s ease-in-out;
    }
    a:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.3s;
        margin-bottom: 0.5rem;
    }
`;
export const LowerSection = styled.div`     
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 1rem;
    margin-bottom: 2rem;
    `
export const Hr = styled.hr`
    width: 90%;
    border: 1px solid purple;
    margin-top: 1rem;
    margin-bottom: 1rem;
`