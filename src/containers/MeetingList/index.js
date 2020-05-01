import React, {useState,useContext} from 'react'
import styled from 'styled-components'
import MeetingCard from '../../components/MeetingCard'
import COLOR from '../../styles/color'
import Sidebar from '../../components/Sidebar'
import Meeting from '../../containers/Meeting'
import Minute from '../../containers/Minute'
import { AuthContext } from '../../App'

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

const MeetingPage = ({mode, switchMode}) => {
    const [isMeetingShow, setMeetingShow] = useState(false)
    const [isMinuteShow, setMinuteShow] = useState(false)
    const [isMeetingListShow, setMeetingListShow] = useState(true)
    const [meetingData, setMeetingData] = useState({})
    const [writter, setWritter] = useState("")
    const [MinuteData, setMinuteData] = useState("")
    const userState = useContext(AuthContext);

    const handleMeetingClick = (data) => {
        setMeetingData(data)
        setMeetingShow(true)
        setMinuteShow(false)
        setMeetingListShow(false)
    }

    const handleSidebarMeetingListClick = () => {
        setMeetingShow(false)
        setMinuteShow(false)
        setMeetingListShow(true)
    }

    const handleMinuteClick = () => {
        setMeetingShow(false)
        setMeetingListShow(false)
        setMinuteShow(true)
    }

    const renderMeeting = (data) => {
        return <Meeting mode={mode} data={data} handleMinuteClick={handleMinuteClick} setWritter={setWritter} setMinuteData={setMinuteData}/>
    }

    return (
        <MeetingPageContainer>
            <Sidebar mode={mode} handleSidebarMeetingListClick={handleSidebarMeetingListClick} handleNewMeeting={handleMeetingClick} switchMode={switchMode}/>
            {isMeetingListShow &&
            <React.Fragment>
                <div>
                    <Typography mode={mode}>閲覧したミーティング</Typography>
                    <hr/>
                    <MeetingContainer>
                        {ViewdMEETINGS.map(meeting => <MeetingCard key={meeting.id} data={meeting} mode={mode}
                                                                   handleMeetingClick={handleMeetingClick}/>)}
                    </MeetingContainer>

                    <Typography mode={mode}>編集したミーティング</Typography>
                    <hr/>
                    <MeetingContainer>
                        {EditedMEETINGS.map(meeting => <MeetingCard key={meeting.id} data={meeting} mode={mode}
                                                                    handleMeetingClick={handleMeetingClick}/>)}
                    </MeetingContainer>
                </div>
            </React.Fragment>}

            {isMeetingShow && renderMeeting(meetingData)}

            {isMinuteShow && <Minute mode={mode} writter={writter} MinuteData={MinuteData} loginUser={userState[0]}/>}
        </MeetingPageContainer>
    )
}

const MeetingPageContainer = styled.div`
    display: flex;
`

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