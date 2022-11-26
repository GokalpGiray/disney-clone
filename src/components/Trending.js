import React from 'react'
import { useSelector } from 'react-redux';
import { selectTrending } from '../features/movie/movieSlice';
import Movies, { Container } from './componentStyle';

function Trending() {
    const movies = useSelector(selectTrending);

    return (
        <Container>
            <h4>
                Trending
            </h4>
            <Movies movies={movies}/>
        </Container>
    )
}

export default Trending