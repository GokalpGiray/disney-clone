import React from 'react'
import { useSelector } from 'react-redux';
import { selectRecommend } from '../features/movie/movieSlice';
import Movies, { Container } from './componentStyle';

function Recommends() {
    const movies = useSelector(selectRecommend);

    return (
        <Container>
            <h4>
                Recommended For You
            </h4>
            <Movies movies={movies}/>

        </Container>
    )
}

export default Recommends