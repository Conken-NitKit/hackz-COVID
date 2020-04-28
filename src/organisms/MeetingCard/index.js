import React from 'react'
import styled from 'styled-components'

const MeetingCard = ({data}) => {
    const handleClick = () => {
        // link先へ飛ぶ?
    }

    return (
        <Container onClick={handleClick}>
            <Title>{data.title}</Title>
            <Owner>作成者: {data.owner}</Owner>
            <Description>{data.description}</Description>
        </Container>
    )
}

// marginは適当, 親のflexBoxで対応したほうがよいかも.
const Container = styled.div`
    width: 320px;
    height: 183px;
    border: 1px solid #ffffff;
    border-radius: 1em;
    background-color: #4d4d4d;
    padding: 1em 2em;
    margin: 1em 2em;
`

const Title = styled.p`
    font-weight: bold;
    color: #3366FF;
    font-size: 1.5em;
`

const Owner = styled.p`
    font-weight: bold;
    color: #ffffff;
`

const Description = styled.p`
    color: #ffffff;
`

export default MeetingCard