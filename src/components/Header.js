import React from 'react'
import { actionCreators as userActions } from '../redux/modules/user'
import { actionCreators as cardActions } from '../redux/modules/card'
import { useDispatch, useSelector } from 'react-redux'

import { Grid, Text, Button, Image, Input } from '../elements'

import SearchIcon from '@material-ui/icons/Search'
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak'
import Scroll from '../components/Scroll'
import Scrollone from '../components/Scrollone'
import styled from 'styled-components'
import Logo from '../static/MainLogo.png'
import { IoNotifications } from 'react-icons/io5'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { history } from '../redux/configureStore'

const Header = (props) => {
  const dispatch = useDispatch()

  const { Mypage } = props
  const [search, setSearch] = React.useState('')

  const user_id = localStorage.getItem('userId')
  const nickname = localStorage.getItem('nickname')
  const is_login = user_id !== null ? true : false

  const change_text = (e) => {
    setSearch(e.target.value)
  }

  const logOut = () => {
    dispatch(userActions.logOutDB())
  }

  const clickSubmit = () => {
    if (!is_login) {
      window.alert('로그인 후 이용하실 수 있습니다.')
      history.push('/login')
    } else {
      history.push('/upload')
    }
  }

  const clickMypage = () => {
    if (!is_login) {
      window.alert('로그인 후 이용하실 수 있습니다.')
      history.push('/login')
    } else {
      history.push(`/mypage/${nickname}`)
    }
  }

  const clickSearch = (e) => {
    dispatch(cardActions.searchCardDB(search))
    history.push(`/sub/${search}`)
    setSearch('')
  }

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      clickSearch(e)
    }
  }

  if (Mypage) {
    return (
      <Head>
        <Grid padding="0 10px" height="62px" flex="flex; justify-content:space-around;align-items:center">
          <Grid width="50px">
            <Image
              _onClick={() => {
                history.push('/')
              }}
              shape="logo"
              src={Logo}
            ></Image>
          </Grid>
          <Grid flex="flex; align-items:center" maxWidth="2400px">
            <Button height="40px" width="50px" borderRadius="20px 0px 0px 20px" bg="#eee" color="#767676" text={<SearchIcon />}></Button>
            <Input value={search} _onChange={change_text} _onKeyPress={pressEnter} search_box placeholder="Search free high-resolution photos" width="1000px"></Input>
            <Button _onClick={clickSearch} height="40px" width="50px" borderRadius="0px 20px 20px 0px" bg="#eee" color="#767676" text={<CenterFocusWeakIcon />}></Button>
          </Grid>
          <Grid flex="flex; align-items:center; justify-content:center" width="auto" padding="0 6px">
            {!is_login ? <NavMenu>Explore</NavMenu> : null}
            <NavMenu>Advertise</NavMenu>
            <NavMenu>Blog</NavMenu>
          </Grid>
          <Grid width="1px" bg="#d1d1d1" height="32px" />
          <Grid width="auto" padding="0 6px">
            {is_login ? (
              <NavMenu onClick={logOut}>Log&nbsp;Out</NavMenu>
            ) : (
              <NavMenu
                onClick={() => {
                  history.push('/login')
                }}
              >
                Log&nbsp;in
              </NavMenu>
            )}
          </Grid>
          <SubmitBtn onClick={clickSubmit}>Submit&nbsp;a&nbsp;photo</SubmitBtn>
          <NavIcon>
            <IoNotifications className="header-icon" size="24px"></IoNotifications>
          </NavIcon>
          <NavProfile>
            <Image
              _onClick={clickMypage}
              cursor="pointer"
              shape="circle"
              size="40px"
              src="https://image.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"
            ></Image>
          </NavProfile>
          <NavIcon>
            <IoReorderThreeOutline className="header-icon" size="30px"></IoReorderThreeOutline>
          </NavIcon>
        </Grid>
      </Head>
    )
  }

  return (
    <Head>
      <Grid padding="0 10px" height="62px" flex="flex; justify-content:space-around;align-items:center">
        <Grid width="50px">
          <Image
            _onClick={() => {
              history.push('/')
            }}
            shape="logo"
            src={Logo}
          ></Image>
        </Grid>
        <Grid flex="flex; align-items:center" maxWidth="2400px">
          <Button height="40px" width="50px" borderRadius="20px 0px 0px 20px" bg="#eee" color="#767676" text={<SearchIcon />}></Button>
          <Input value={search} _onChange={change_text} _onKeyPress={pressEnter} search_box placeholder="Search free high-resolution photos" width="1000px"></Input>
          <Button _onClick={clickSearch} height="40px" width="50px" borderRadius="0px 20px 20px 0px" bg="#eee" color="#767676" text={<CenterFocusWeakIcon />}></Button>
        </Grid>
        <Grid flex="flex; align-items:center; justify-content:center" width="auto" padding="0 6px">
          {!is_login ? <NavMenu>Explore</NavMenu> : null}
          <NavMenu>Advertise</NavMenu>
          <NavMenu>Blog</NavMenu>
        </Grid>
        <Grid width="1px" bg="#d1d1d1" height="32px" />
        <Grid width="auto" padding="0 6px">
          {is_login ? (
            <NavMenu onClick={logOut}>Log&nbsp;Out</NavMenu>
          ) : (
            <NavMenu
              onClick={() => {
                history.push('/login')
              }}
            >
              Log&nbsp;in
            </NavMenu>
          )}
        </Grid>
        <SubmitBtn onClick={clickSubmit}>Submit&nbsp;a&nbsp;photo</SubmitBtn>
        <NavIcon>
          <IoNotifications className="header-icon" size="24px"></IoNotifications>
        </NavIcon>
        <NavProfile>
          <Image _onClick={clickMypage} cursor="pointer" shape="circle" size="40px" src="https://image.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"></Image>
        </NavProfile>
        <NavIcon>
          <IoReorderThreeOutline className="header-icon" size="30px"></IoReorderThreeOutline>
        </NavIcon>
      </Grid>
      <Grid height="55px" flex="flex; align-items:center; justify-content:space-around">
        <Scrollone />
        <Grid width="1px" bg="#d1d1d1" height="32px" />
        <Scroll />
      </Grid>
    </Head>
  )
}

const Head = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  top: 0;
  z-index: 5;
`

const NavMenu = styled.a`
  width: auto;
  padding: 20px 6px;
  font-size: 14px;
  font-weight: 600;
  color: #767676;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: #111;
  }
`

const NavIcon = styled.button`
  height: 100%;
  padding: 3px 12px;
  .header-icon {
    width: auto;
    cursor: pointer;
    margin: 0;
    color: #767676;
    transition: color 0.1s ease-in-out;
    &:hover {
      color: #111;
    }
  }
`

const NavProfile = styled.div`
  height: 100%;
  padding: 3px 0;
`

const SubmitBtn = styled.button`
  height: 32px;
  padding: 0 11px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  color: #767676;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #111;
    border: 1px solid #111;
  }
`
export default Header
