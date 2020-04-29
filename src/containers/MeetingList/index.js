import React from 'react'
import styled from 'styled-components'
import MeetingCard from '../../components/MeetingCard'
import COLOR from '../../styles/color'

// 仮データです
const ViewdMEETINGS = [
    {
        id: 1,
        title: 'デジタルマーケター育成講座',
        owner: 'クボ太郎',
        description: '詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。',
        member: [],
    },
    {
        id: 2,
        title: 'デジタルマーケター育成講座',
        owner: 'クボ太郎',
        description: '詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。',
        member: [],
    },
]

const EditedMEETINGS = [
    {
        id: 3,
        title: 'デジタルマーケター育成講座',
        owner: 'クボ太郎',
        description: '詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。',
        member: [],
    },
    {
        id: 4,
        title: 'デジタルマーケター育成講座',
        owner: 'クボ太郎',
        description: '詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。',
        member: [],
    },
    {
        id: 5,
        title: 'デジタルマーケター育成講座',
        owner: 'クボ太郎',
        description: '詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。',
        member: [],
    },
    {
        id: 6,
        title: 'デジタルマーケター育成講座',
        owner: 'クボ太郎',
        description: '詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。',
        member: [],
    },
    {
        id: 7,
        title: 'デジタルマーケター育成講座',
        owner: 'クボ太郎',
        description: '詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。詳細。',
        member: [],
    },
]

const MeetingPage = ({mode}) => {
    return (
        <React.Fragment>
            <Typography mode={mode}>閲覧したミーティング</Typography>
            <hr/>
            <MeetingContainer>
                {ViewdMEETINGS.map(meeting => <MeetingCard key={meeting.id} data={meeting} mode={mode}/>)}
            </MeetingContainer>

            <Typography mode={mode}>編集したミーティング</Typography>
            <hr/>
            <MeetingContainer>
                {EditedMEETINGS.map(meeting => <MeetingCard key={meeting.id} data={meeting} mode={mode}/>)}
            </MeetingContainer>
        </React.Fragment>
    )
}

const Typography = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 2em;
    font-weight: bold;
    text-align: center;
`

const MeetingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export default MeetingPage