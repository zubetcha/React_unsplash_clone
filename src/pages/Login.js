import React from 'react'
import styled from 'styled-components'

// elements & components
import { Button, Grid, Text } from '../elements'

// react-cions
import { BsFacebook } from 'react-icons/bs'

const Login = (props) => {
  return (
    <>
      <Grid height="100vh" overflowY="hidden">
        <Grid maxWidth="1320px" height="100%" margin="0 auto" padding="0 12px">
          <Container>
            <Grid height="590px">
              <Grid maxWidth="550px" margin="0 auto">
                <Grid align="center" height="164px" margin="0 0 32px 0">
                  <a href="/">
                    <LoginLogo src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"></LoginLogo>
                  </a>
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
                  <FormGroup>
                    <label className="form-label">Email address</label>
                    <input className="form-input"></input>
                  </FormGroup>
                  <FormGroup>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <label className="form-label">Password</label>
                      <span>
                        <FindPassword>Forgot your password?</FindPassword>
                      </span>
                    </div>
                    <input className="form-input"></input>
                  </FormGroup>
                </Grid>

                <Grid height="auto" margin="0 0 24px 0">
                  <LoginBtn>Login</LoginBtn>
                </Grid>
                <Grid margin="32px 0 0 0" height="auto" align="center">
                  <Question>Don't you have an account?&nbsp;</Question>
                  {/* history push('/join') */}
                  <JoinLink>Join</JoinLink>
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
`

const LoginLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
  vertical-align: middle;
  box-sizing: border-box;
`

const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 8px 0;
  line-height: 1.6;
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

const FindPassword = styled.a`
  color: #767676;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  cursor: pointer;
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
  font-size: 15px;
  line-height: 1.6;
  border-radius: 4px;
  touch-action: manipulation;
  cursor: pointer;
`

const Question = styled.p`
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #111111;
  margin: 0;
`

const JoinLink = styled.a`
  color: #767676;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`
export default Login
