import React from 'react'
import styled from 'styled-components'
import MinuteCard from '../../components/MinuteCard'
import COLOR from '../../styles/color'

const Meeting = (props) => {
    return (
        <React.Fragment>
            <Title mode={props.mode}>{props.data.title}</Title>
            <Owner mode={props.mode}>作成者: {props.data.owner.name}</Owner>
            <div>
                {Object.keys(props.data.records).map(
                    key => <MinuteCard mode={props.mode} data={props.data.records[key]}/>
                )}
            </div>)
        </React.Fragment>
    );
}
export default Meeting;

const Title = styled.h1`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 2em;
    font-weight: bold;
    padding: 3%;
    padding-bottom: 0;
    margin: 0;
`;

const Owner = styled.p`
    color: ${(props) => COLOR.SUBTEXT[props.mode]};
    font-size: 1em;
    margin: 1%;
    margin-left: 3%;
`;