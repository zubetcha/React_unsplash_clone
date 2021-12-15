import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { actionCreators as userActions } from '../redux/modules/user'

// elements & components
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

  // **** Validation **** //
  const [isFullname, setIsFullname] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isNickname, setIsNickname] = useState(false)
  const [isPassword, setIsPassword] = useState(false)

  // **** Full name **** //
  const onChangeFullname = (e) => {
    const fullnameRegex = /^[a-zA-Z ]*$/
    const currentFullname = e.target.value
    setFullname(currentFullname)

    if (!fullnameRegex.test(currentFullname)) {
      setIsFullname(false)
    } else {
      setIsFullname(true)
    }
  }

  // **** Email **** //
  const onChangeEmail = (e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const currentEmail = e.target.value
    setEmail(currentEmail)

    if (!emailRegex.test(currentEmail)) {
      setIsEmail(false)
    } else {
      setIsEmail(true)
    }
  }

  // **** Nickname **** //
  const onChangeNickname = (e) => {
    const nicknameRegex = /^[a-zA-Z0-9_]{3,16}$/
    const currentNickname = e.target.value
    setNickname(currentNickname)

    if (!nicknameRegex.test(currentNickname)) {
      setIsNickname(false)
    } else {
      setIsNickname(true)
    }
  }

  // **** Password **** //
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,20}$/
    const currentPassword = e.target.value
    setPassword(currentPassword)

    if (!passwordRegex.test(currentPassword)) {
      setIsPassword(false)
    } else {
      setIsPassword(true)
    }
  }

  const clickJoin = () => {
    if (fullname === '' || email === '' || nickname === '' || password === '') {
      window.alert('Pleas fill in all blanks.')
      return
    } else {
      dispatch(userActions.joinDB(email, password, fullname, nickname))
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
              <p className="join-title">Creation starts here</p>
              <p className="join-desc">Access 3,432,589 free, high-resolution photos you can’t find anywhere else</p>
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
              <FormGroup className={`${fullname.length > 0 && !isFullname ? 'has-error' : 'success'}`}>
                <label className="form-label">Full name</label>
                <input className="form-input" name="fullname" onChange={onChangeFullname}></input>
              </FormGroup>
              <FormGroup className={`${email.length > 0 && !isEmail ? 'has-error' : 'success'}`}>
                <label className="form-label">Email address</label>
                <input className="form-input" name="email" onChange={onChangeEmail}></input>
              </FormGroup>
              <FormGroup className={`${nickname.length > 0 && !isNickname ? 'has-error' : 'success'}`}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <label className="form-label">Username</label>
                  <span>
                    <Validation>&nbsp;(only letters, numbers, and underscores & min. 3 char, max. 16 char)</Validation>
                  </span>
                </div>
                <input className="form-input" name="nickname" onChange={onChangeNickname} maxLength="16"></input>
              </FormGroup>
              <FormGroup className={`${password.length > 0 && !isPassword ? 'has-error' : 'success'}`}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <label className="form-label">Password</label>
                  <span>
                    <Validation>&nbsp;(only letters, numbers, and special char & min. 6 char, max. 20 char)</Validation>
                  </span>
                </div>
                <input className="form-input" type="password" name="password" onChange={onChangePassword} maxLength="20"></input>
              </FormGroup>
            </Grid>
            <Grid height="auto" margin="0 0 24px 0">
              <JoinBtn type="submit" disabled={!(isFullname && isEmail && isNickname && isPassword)} onClick={clickJoin}>
                Join
              </JoinBtn>
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

  .has-error {
    .form-label {
      color: #e25c3d;
    }
    .form-input {
      border: 1px solid #e25c3d;
      &:focus {
        border: 1px solid #e25c3d;
      }
    }
  }
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
    height: 40px;
    padding: 6px 12px;
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

const Validation = styled.p`
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

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
    pointer-events: none;
  }
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
