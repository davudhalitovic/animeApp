import styled from 'styled-components';

const CarouselWrapper = styled.div`
    margin-top: 3.1rem;
    margin-left: 152px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 91.3%;
`;

const Button = styled.button`
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    &.prev {
        left: 10px; /* Adjust positioning as needed */
    }

    &.next {
        right: 10px; /* Adjust positioning as needed */
    }
`;

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
`;

const CarouselTrack = styled.div`
    display: flex;
    transition: transform 0.3s ease;
    width: 100%;
`;

const CarouselSlide = styled.div`
    min-width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover div {
        opacity: 1;
        visibility: visible;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover; 
`;

const HoverInfo = styled.div`
    position: absolute;
    left: -10px;
    top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
    padding: 15px;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;

    h3, p {
        margin: 5px 0;
    }
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
    margin-bottom: 0.2rem;
    z-index: 2; /* Ensure dots are above other content */
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ isActive }) => (isActive ? '#333' : '#ccc')};
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #333;
    }
`;

export { CarouselWrapper, Button, CarouselContainer, CarouselTrack, CarouselSlide, StyledImage, HoverInfo, DotsContainer, Dot };
