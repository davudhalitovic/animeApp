import styled from "styled-components";

export const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 90%;
    margin-left: 150px;
    `
export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    flex: wrap;
    img{
        height: 195px;
        width: 130px;
        margin-left: 1rem;
        display: block;
    }
    img:hover{
        opacity: 0.8;
        cursor: pointer;
        transition: 0.5s;
        transform: scale(1.1);
    }
    `
export const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    `
export const CategName = styled.p`
color: white;
font-size: 1.7rem;
margin-top: 1rem;
margin-bottom: 1rem;
margin-right: 85rem;
`
