import React from 'react'
import styled from 'styled-components'
import Color from '../../styles/color'

const MeetingCard = ({mode, data}) => {
    const handleClick = () => {
        // link先へ飛ぶ?
    }

    return (
        <Container mode={mode} onClick={handleClick}>
            <Title mode={mode}>{data.title}</Title>
            <Owner mode={mode}>作成者: {data.owner}</Owner>
            <Description mode={mode}>{data.description}</Description>
        </Container>
    )
}

// marginは適当, 親のflexBoxで対応したほうがよいかも.
const Container = styled.div`
    width: 320px;
    height: 183px;
    border: 1px solid #ffffff;
    border-radius: 1em;
    background-color: ${(props) => Color.BACKGROUND[props.mode]};
    padding: 1em 2em;
    margin: 1em 2em;
`

const Title = styled.p`
    font-weight: bold;
    color: ${(props) => Color.ACCENT[props.mode]};
    font-size: 1.5em;
`

const Owner = styled.p`
    font-weight: bold;
    color: ${(props) => Color.TEXT[props.mode]};
`

const Description = styled.p`
    color: ${(props) => Color.TEXT[props.mode]};
`

export default MeetingCard