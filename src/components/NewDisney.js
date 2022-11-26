import React from 'react'
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movie/movieSlice';
import Movies, { Container } from './componentStyle';

function NewDisney() {
    const movies = useSelector(selectNewDisney);

    return (
        <Container>
            <h4>
                New To Disney+
            </h4>
            <Movies movies={movies}/>
        </Container>
    )
}

export default NewDisney