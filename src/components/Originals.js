import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Content, Wrap } from './componentStyle';

function Originals() {
    return (
        <Container>
            <h4>
                Originals
            </h4>
            <Content>
                <Wrap>
                    <Link to="/" >
                        <img src="/images/viewers-disney.png" alt="" />
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/" >
                        <img src="/images/viewers-disney.png" alt="" />
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/" >
                        <img src="/images/viewers-disney.png" alt="" />
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/" >
                        <img src="/images/viewers-disney.png" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Originals