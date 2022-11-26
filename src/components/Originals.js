import React from 'react'
import { useSelector } from 'react-redux';
import { selectOriginal } from '../features/movie/movieSlice';
import Movies, { Container } from './componentStyle';

function Originals() {
    const movies = useSelector(selectOriginal);

    return (
        <Container>
            <h4>
                Originals
            </h4>
            <Movies movies={movies}/>
        </Container>
    )
}

export default Originals