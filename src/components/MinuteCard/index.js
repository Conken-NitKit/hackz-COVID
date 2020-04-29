import React from 'react'
import styled from 'styled-components'
import COLOR from '../../styles/color'

const MeetingCard = (props) => {
    return (
        <Container mode={props.mode}>
            <Title mode={props.mode}>{props.data.title}</Title>
            <Owner mode={props.mode}>作成者: {props.data.editor}</Owner>
        </Container>
    )
}

const Container = styled.div`
    margin: 3%;
    border-bottom: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
`;

const Title = styled.h2`
    cursor: pointer;
    font-weight: bold;
    color: ${(props) => COLOR.ACCENT[props.mode]};
    font-size: 1.5em;
`;

const Owner = styled.p`
    color: ${(props) => COLOR.SUBTEXT[props.mode]};
    font-size: 1em;
`;

export default MeetingCard;