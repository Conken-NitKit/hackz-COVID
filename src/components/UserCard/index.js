import React from 'react'
import styled from 'styled-components'
import COLOR from '../../styles/color'

const UserCard = (props) => {
    return (
        <Container mode={props.mode}>
            {props.isAdmin && <DeleteButton mode={props.mode}>削除</DeleteButton>}
            <Name mode={props.mode}>{props.name}</Name>
            <Role mode={props.mode}>{props.role}</Role>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    margin: 0 5%;
    padding: 0.7%;
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
    background: ${(props)=>COLOR.EDITOR.BACKGROUND[props.mode]};
`;

const Name = styled.h2`
    cursor: pointer;
    font-weight: bold;
    color: ${(props) => COLOR.ACCENT[props.mode]};
    font-size: 1.4em;
    margin: 0;
`;

const Role = styled.p`
    color: ${(props) => COLOR.SUBTEXT[props.mode]};
    font-size: 0.8em;
    margin: 0;
`;

const DeleteButton = styled.button`
    position: absolute;
    top: 50%;
    right: 1%;
    font-size: 1em;
    width: 10%;
    padding: 0.3% 0;
    border: 1px solid ${(props)=>COLOR.BORDER[props.mode]};
    outline: none;
    font-weight: bold;
    border-radius: 7px;
    color: #cb2431;
    background: ${(props) => COLOR.VIEWER.BACKGROUND[props.mode]};
    cursor: pointer;
    transform: translateY(-50%);
    &:active {
        transform: translate(1%,-48%);
        transition: 0.1s;
    }
`;

export default UserCard;