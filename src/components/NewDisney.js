import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Content, Wrap } from './componentStyle';

function NewDisney() {
    return (
        <Container>
            <h4>
                New To Disney+
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

export default NewDisney