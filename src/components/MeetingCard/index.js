import React from 'react'
import styled from 'styled-components'
import COLOR from '../../styles/color'

const MeetingCard = ({mode, data, handleMeetingClick}) => {

    return (
        <Container mode={mode} onClick={(data) => handleMeetingClick(data)}>
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
    background-color: ${(props) => COLOR.BACKGROUND[props.mode]};
    padding: 1em 2em;
    margin: 1em 2em;
`

const Title = styled.p`
    font-weight: bold;
    color: ${(props) => COLOR.ACCENT[props.mode]};
    font-size: 1.5em;
`

const Owner = styled.p`
    font-weight: bold;
    color: ${(props) => COLOR.TEXT[props.mode]};
`

const Description = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
`

export default MeetingCard