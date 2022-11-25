import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Content, Wrap } from './componentStyle';

function Recommends() {
    return (
        <Container>
            <h4>
                Recommended For You
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

export default Recommends