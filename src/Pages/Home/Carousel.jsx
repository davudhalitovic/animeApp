import React, { useState, useEffect } from 'react';
import { CarouselWrapper, Button, CarouselContainer, CarouselTrack, CarouselSlide, StyledImage, HoverInfo, DotsContainer, Dot } from './Carousel.styled';
import { fetchTrendingAnime } from '../../api/request'; // Adjust the path as needed

const Carousel = () => {
    const [animeList, setAnimeList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const data = await fetchTrendingAnime();
                setAnimeList(data.data);
            } catch (err) {
                setError('Failed to fetch trending anime');
            } finally {
                setLoading(false);
            }
        };

        fetchAnime();
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? animeList.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === animeList.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <CarouselWrapper>
            <Button className="prev" onClick={handlePrev}>‹</Button>
            <CarouselContainer>
                <CarouselTrack>
                    {animeList.length > 0 && (
                        <CarouselSlide>
                            <StyledImage
                                src={animeList[currentIndex].attributes.posterImage.original}
                                alt={animeList[currentIndex].attributes.canonicalTitle}
                            />
                            <HoverInfo>
                                <h3>{animeList[currentIndex].attributes.canonicalTitle}</h3>
                                <p>Episodes: {animeList[currentIndex].attributes.episodeCount}</p>
                                <p>Rating: {animeList[currentIndex].attributes.averageRating}</p>
                            </HoverInfo>
                        </CarouselSlide>
                    )}
                </CarouselTrack>
            </CarouselContainer>
            <Button className="next" onClick={handleNext}>›</Button>
            <DotsContainer>
                {animeList.map((_, index) => (
                    <Dot
                        key={index}
                        isActive={index === currentIndex}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </DotsContainer>
        </CarouselWrapper>
    );
};

export default Carousel;