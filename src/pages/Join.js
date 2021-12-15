import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

// elements
import { Grid, Text } from '../elements'

// React-icons
import { BsFacebook } from 'react-icons/bs'

const Join = (props) => {
  const dispatch = useDispatch()

  // **** Check fullname, email, nickname, password **** //
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  // **** Validation msg **** //
  const [fullnameMsg, setFullnameMsg] = useState('')
  const [emailMsg, setEmailMsg] = useState('')
  const [nicknameMsg, setNicknameMsg] = useState('')
  const [passwordMsg, setPasswordMsg] = useState('')

  // **** Validation **** //
  const [isFullname, setIsFullname] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isNickname, setIsNickname] = useState(false)
  const [isPassword, setIsPassword] = useState(false)

  // **** Full name **** //
  const onChangeFullname = (e) => {
    const fullnameRegex = /$/
    const currentFullname = e.target.value
    setFullname(currentFullname)

    if (!fullnameRegex.test(currentFullname)) {
      setFullnameMsg('이름 형식 확인')
      setIsFullname(false)
    } else {
      setFullnameMsg('올바른 이름 형식')
      setIsFullname(true)
    }
  }

  // **** Email **** //
  const onChangeEmail = (e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const currentEmail = e.target.value
    setEmail(currentEmail)

    if (!emailRegex.test(currentEmail)) {
      setEmailMsg('이메일 형식 확인')
      setIsEmail(false)
    } else {
      setEmailMsg('올바른 이메일 형식')
      setIsEmail(true)
    }
  }

  // **** Nickname **** //
  const onChangeNickname = (e) => {
    const nicknameRegex = /^[a-zA-Z0-9_]{3,16}$/
    const currentNickname = e.target.value
    setNickname(currentNickname)

    if (!nicknameRegex.test(currentNickname)) {
      setNicknameMsg('닉네임 형식 확인')
      setIsNickname(false)
    } else {
      setNicknameMsg('올바른 닉네임 형식')
      setIsNickname(true)
    }
  }

  // **** Password **** //
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/
    const currentPassword = e.target.value
    setPassword(currentPassword)

    if (!passwordRegex.test(currentPassword)) {
      setPasswordMsg('숫자+영문자+특수문자 조합 6자리 이상')
      setIsPassword(false)
    } else {
      setPasswordMsg('안전한 비밀번호')
      setIsPassword(true)
    }
  }

  return (
    <>
      <Container>
        <JoinLeft>
          <JoinContent>
            <div>
              {/* history.push('/') */}
              <a>
                <LoginLogo src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg"></LoginLogo>
              </a>
            </div>
            <TextBox>
              <h1 className="join-title">Creation starts here</h1>
              <h2 className="join-desc">Access 3,432,589 free, high-resolution photos you can’t find anywhere else</h2>
            </TextBox>
            <TextBox>
              <p className="image-info">Uploaded over 8 years ago by Shane Colella</p>
            </TextBox>
          </JoinContent>
        </JoinLeft>
        <JoinRight>
          <Grid height="auto">
            <Grid height="auto" padding="0 0 60px">
              <JoinTitle>Join Unsplash</JoinTitle>
              <Text size="15px" margin="16px 0" align="center">
                Already have an account?&nbsp;
                {/* history.push('/login') */}
                <NotiLink>Login</NotiLink>
              </Text>
            </Grid>
            <Grid height="auto">
              <SocialLogin>
                <BsFacebook size="17" />
                Join using Facebook
              </SocialLogin>
            </Grid>
            <Grid height="auto">
              <FormSeperator>OR</FormSeperator>
            </Grid>
            <Grid height="auto">
              <FormGroup>
                <label className="form-label">Full name</label>
                <input className="form-input" onChange={onChangeFullname}></input>
              </FormGroup>
              <FormGroup>
                <label className="form-label">Email address</label>
                <input className="form-input" onChange={onChangeEmail}></input>
              </FormGroup>
              <FormGroup>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <label className="form-label">Username</label>
                  <span>
                    <Condition>&nbsp;(only letters, numbers, and underscores)</Condition>
                  </span>
                </div>
                <input className="form-input" onChange={onChangeNickname}></input>
              </FormGroup>
              <FormGroup>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <label className="form-label">Password</label>
                  <span>
                    <Condition>&nbsp;(min. 6 char)</Condition>
                  </span>
                </div>
                <input className="form-input" type="password" onChange={onChangePassword}></input>
              </FormGroup>
            </Grid>
            <Grid height="auto" margin="0 0 24px 0">
              <JoinBtn>Join</JoinBtn>
            </Grid>
            <Grid margin="0 0 24px" height="auto" align="center">
              <Notification>
                By joining, you agree to the&nbsp;
                {/* history push('/join') */}
                <NotiLink>Terms</NotiLink>
                &nbsp; and &nbsp;
                <NotiLink>Privacy Policy.</NotiLink>
              </Notification>
            </Grid>
          </Grid>
        </JoinRight>
      </Container>
    </>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
`
const JoinLeft = styled.div`
  box-sizing: border-box;
  width: 40%;
  background-image: url(https://images.unsplash.com/photo-1639322601997-3a876953f829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #111111;
`

const JoinContent = styled.div`
  box-sizing: border-box;
  padding: 8% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  height: 100%;
  overflow-y: scroll;
`
const LoginLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 24px;
  vertical-align: middle;
  box-sizing: border-box;
`

const TextBox = styled.p`
  color: #fff;
  margin: 0;

  .join-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 1;
    margin: 0 0 16px 0;
  }

  .join-desc {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.35;
    margin: 0 0 30px 0;
  }

  .image-info {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
    margin: 16px 0;
  }
`

const JoinRight = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0 8%;
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const JoinTitle = styled.h1`
  font-size: 46px;
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.2;
  text-align: center;
`

const SocialLogin = styled.a`
  border-radius: 4px;
  display: inline-flex;
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  height: 44px;
  background-color: #1778f2;
  justify-content: center;
  align-items: center;
  padding: 9px 18px;
  font-size: 15px;
  line-height: 1.6;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;

  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #086be3;
  }
`

const FormSeperator = styled.p`
  display: block;
  color: #111111;
  margin: auto;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  margin: 24px 0;
`

const FormGroup = styled.div`
  margin-bottom: 24px;
  box-sizing: ${(props) => props.boxSizing};

  .form-label {
    font-size: 15px;
    line-height: 1.6;
    color: #111111;
    box-sizing: border-box;
    display: inline-flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    max-width: 100%;
    margin-bottom: 6px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-weight: 400;
    box-sizing: border-box;
  }

  .form-input {
    font-size: 15px;
    line-height: 1.6;
    height: 40px;
    color: #111111;
    display: block;
    width: 100%;
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    font-size: 15px;
    line-height: 1.6;
    color: #111111;
    background-color: transparent;
    background-image: none;
    box-sizing: ${(props) => props.boxSizing};
    border: 1px solid #767676;
    outline: none;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s;
    cursor: text;
    box-sizing: border-box;

    &:focus {
      border: 1px solid #111111;
      outline: none;
    }
  }
`

const Condition = styled.p`
  color: #767676;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  cursor: text;
  margin: 0 0 6px 0;
`

const JoinBtn = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #111111;
  text-align: center;
  vertical-align: middle;
  padding: 9px 18px;
  font-size: 15px;
  line-height: 1.6;
  border-radius: 4px;
  touch-action: manipulation;
  cursor: pointer;
`

const Notification = styled.p`
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  color: #767676;
  margin: 0;
`

const NotiLink = styled.a`
  color: #767676;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`

export default Join
