import React from 'react'
import styled from 'styled-components'
import COLOR from '../../styles/color'

const Data1 = [
    {
        icon_path: '/logo192.png',
        caption: 'メリット1',
    },
    {
        icon_path: '/logo192.png',
        caption: 'メリット2',
    },
    {
        icon_path: '/logo192.png',
        caption: 'メリット3',
    },
]

const Data2 = [
    {
        image_path: '',
        caption: 'メリット1',
        description: '説明。説明。説明。説明。説明。説明。説明。',
    },
    {
        image_path: '',
        caption: 'メリット2',
        description: '説明。説明。説明。説明。説明。説明。説明。',
    },
    {
        image_path: '',
        caption: 'メリット3',
        description: '説明。説明。説明。説明。説明。説明。説明。',
    },
]

const Home = ({mode, switchMode}) => {

    const handleSignIn = () => {
        // signIn
    }

    const handleSignUp = () => {
        // signUp
    }

    return (
        <div>
            {/* Header */}

            {/* center */}
            <ServiceContainer mode={mode}>
                <ServiceLeft>
                    <ServiceTitleCaption mode={mode}>キーワード抽出型 Markdown</ServiceTitleCaption>
                    <ServiceTitle mode={mode}>タイトル</ServiceTitle>
                    <ServiceButtonContainer>
                        <SignInButton mode={mode} onClick={handleSignIn}>サインイン ></SignInButton>
                        <SignUpButton mode={mode} onClick={handleSignUp}>無料でサインアップ ></SignUpButton>
                    </ServiceButtonContainer>
                </ServiceLeft>
                <ServiceRight>
                    {/* スクリーンショット */}
                    <CatchImage>
                        <img src="" alt=""/>
                    </CatchImage>
                </ServiceRight>
            </ServiceContainer>

            {/*　bottom */}
            <ConceptContainer>
                {Data1.map((data, i) => (
                    <div key={data.caption + i}>
                        <img src={data.icon_path} alt="" style={{width: '100px'}}/>
                        <ConceptCaption>{data.caption}</ConceptCaption>
                    </div>
                ))}
            </ConceptContainer>

            {/* main */}
            <DetailContainer mode={mode}>
                {Data2.map((data, i) => (
                    <DetailCard key={data.description + i}>
                        <DetailLeft>
                            {/* 画像 */}
                            <DetailImage>
                                <img src={data.image_path} alt=""/>
                            </DetailImage>
                        </DetailLeft>
                        <DetailRight>
                            <DetailCaption mode={mode}>{data.caption}</DetailCaption>
                            <DetailDescription mode={mode}>{data.description}</DetailDescription>
                        </DetailRight>
                    </DetailCard>
                ))}
            </DetailContainer>

            <ModeSwitchButton mode={mode} onClick={() => switchMode()}>
                {mode === 'LIGHTMODE' ?
                    'ダークモードにする' :
                    'ライトモードにする'
                }
            </ModeSwitchButton>
        </div>
    )
}

const ServiceContainer = styled.div`
    background-color: ${(props) => COLOR.MAIN[props.mode]};
    padding: 2em;
    display: flex;
`

const ServiceLeft = styled.div`
    padding-left: 2em;
    width: 50%;
`

const ServiceRight = styled.div`
    width: 50%;
`

const ServiceTitle = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-weight: bold;
    font-size: 2em;
`

const ServiceTitleCaption = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
`

const ServiceButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5em;
`

const SignInButton = styled.div`
    background-color: ${(props) => COLOR.ACCENT[props.mode]};
    color: ${(props) => COLOR.TEXT[props.mode]};
    padding: 1em 2em;
    border-radius: 1em;
`

const SignUpButton = styled.div`
    border: 1px solid ${(props) => COLOR.TEXT[props.mode]};
    color: ${(props) => COLOR.TEXT[props.mode]};
    padding: 1em 2em;
    border-radius: 1em;
`

const CatchImage = styled.div`
    background-color: #ffffff;
    width: 500px;
    height: 400px;
    margin 0 auto;
`

const ConceptContainer = styled.div`
    background-color: #4d4d4d;
    padding: 1.5em 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const ConceptCaption = styled.p`
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
`

const DetailContainer = styled.div`
    background-color: ${(props) => COLOR.BACKGROUND[props.mode]};
    padding: 2em;
`

const DetailCard = styled.div`
    display: flex;
    margin-top: 4em;
`

const DetailImage = styled.div`
    background-color: #fff;
    width: 400px;
    height: 300px;
    margin: 0 auto;
`

const DetailLeft = styled.div`
    width: 50%;
`

const DetailRight = styled.div`
    width: 50%;
`

const DetailCaption = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
    font-size: 1.5em;
    font-weight: bold;
`

const DetailDescription = styled.p`
    color: ${(props) => COLOR.TEXT[props.mode]};
`

const ModeSwitchButton = styled.div`
    background-color: ${(props) => COLOR.BUTTON[props.mode]};
    color: ${(props) => COLOR.TEXT[props.mode]};
    padding: 1em 1.5em;
    width: 150px;
    border-radius: 1em;
    position: absolute;
    bottom: 2em;
    right: 2em;
`

export default Home