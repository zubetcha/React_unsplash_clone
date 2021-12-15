import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { actionCreators as userActions } from '../redux/modules/user'
import { history } from '../redux/configureStore'

// elements & components
import { Grid, Text } from '../elements'

// React-icons
import { BsFacebook } from 'react-icons/bs'

const Login = (props) => {
  const dispatch = useDispatch()

  // **** Check email, password **** //
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // **** Validation **** //
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)

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

  const clickLogin = () => {
    if (email === '' || password === '') {
      window.alert('Please fill in all blanks.')
      return
    } else {
      dispatch(userActions.logInDB(email, password))
    }
  }

  return (
    <>
      <Grid height="100vh" overflowY="hidden">
        <Grid maxWidth="1320px" height="100%" margin="0 auto" padding="0 12px">
          <Container>
            <Grid height="590px">
              <Grid maxWidth="550px" margin="0 auto">
                <Grid align="center" height="164px" margin="0 0 32px 0">
                  <div>
                    <LoginLogo
                      onClick={() => {
                        history.push('/')
                      }}
                      src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
                    ></LoginLogo>
                  </div>
                  <LoginTitle>Login</LoginTitle>
                  <Text size="15px" margin="0 0 32px 0">
                    Welcome back.
                  </Text>
                </Grid>
                <Grid height="auto">
                  <SocialLogin>
                    <BsFacebook size="17" />
                    Login with Facebook
                  </SocialLogin>
                </Grid>
                <Grid height="auto">
                  <FormSeperator>OR</FormSeperator>
                </Grid>
                <Grid margin="20px 0" height="auto">
                  <FormGroup className={`${email.length > 0 && !isEmail ? 'has-error' : 'success'}`}>
                    <label className="form-label">Email address</label>
                    <input className="form-input" name="email" onChange={onChangeEmail}></input>
                    {email.length > 0 && !isEmail && <span className="email-validation">Please check your email format.</span>}
                  </FormGroup>
                  <FormGroup className={`${password.length > 0 && !isPassword ? 'has-' : 'success'}`}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <label className="form-label">Password</label>
                      <span>
                        <FindPassword>Forgot your password?</FindPassword>
                      </span>
                    </div>
                    <input className="form-input" type="password" name="password" onChange={onChangePassword} maxLength="20"></input>
                  </FormGroup>
                </Grid>
                <Grid height="auto" margin="0 0 24px 0">
                  <LoginBtn type="submit" disabled={!(email.length !== 0 && password.length !== 0)} onClick={clickLogin}>
                    Login
                  </LoginBtn>
                </Grid>
                <Grid margin="32px 0 0 0" height="auto" align="center">
                  <Question>Don't you have an account?&nbsp;</Question>
                  <JoinLink
                    onClick={() => {
                      history.push('/join')
                    }}
                  >
                    Join
                  </JoinLink>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
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
    .email-validation {
      font-size: 12px;
      color: #e25c3d;
    }
  }
`

const LoginLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
  vertical-align: middle;
  cursor: pointer;
`

const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 8px 0;
`

const SocialLogin = styled.a`
  border-radius: 4px;
  display: inline-flex;
  color: #fff;
  width: 100%;
  height: 44px;
  background-color: #1778f2;
  justify-content: center;
  align-items: center;
  padding: 9px 18px;
  font-weight: 500;
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
  margin: auto;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  margin: 24px 0;
`

const FormGroup = styled.div`
  margin-bottom: 24px;

  .form-label {
    display: inline-flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    max-width: 100%;
    margin-bottom: 6px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .form-input {
    height: 40px;
    display: block;
    width: 100%;
    padding: 6px 12px;
    background-color: transparent;
    background-image: none;
    box-sizing: ${(props) => props.boxSizing};
    border: 1px solid #767676;
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

const FindPassword = styled.a`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`

const LoginBtn = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #111111;
  text-align: center;
  vertical-align: middle;
  padding: 9px 18px;
  border-radius: 4px;
  touch-action: manipulation;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
    pointer-events: none;
  }
`

const Question = styled.p`
  display: inline-block;
  margin: 0;
`

const JoinLink = styled.a`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`
export default Login
