import React from 'react'
import styled from 'styled-components'
import MeetingCard from '../../organisms/MeetingCard'

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

const MeetingPage = () => {
    return (
        <React.Fragment>
            <Typography>閲覧したミーティング</Typography>
            <hr/> {/*水平線*/}
            <MeetingContainer>
                {ViewdMEETINGS.map(meeting => <MeetingCard key={meeting.id} data={meeting}/>)}
            </MeetingContainer>

            <Typography>編集したミーティング</Typography>
            <hr/> {/*水平線*/}
            <MeetingContainer>
                {EditedMEETINGS.map(meeting => <MeetingCard key={meeting.id} data={meeting}/>)}
            </MeetingContainer>
        </React.Fragment>
    )
}

const Typography = styled.p`
    color: #ffffff;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
`

const MeetingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export default MeetingPage