import React from 'react'
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
  const { Mypage } = props
  const [search, setSearch] = React.useState("");

  const change_text = (e) => {
    setSearch(e.target.value)
  }

  const nickname = localStorage.getItem('nickname')

  if (Mypage) {
    return (
      <Head>
        <Grid height="62px" flex="flex; justify-content:space-around;align-items:center">
          <Grid width="50px" margin="0 12px">
            <Image
              _onClick={() => {
                history.push('/')
              }}
              shape="logo"
              src={Logo}
            ></Image>
          </Grid>
          <Grid flex="flex; align-items:center" maxWidth="1300px">
            <Button height="40px" width="50px" borderRadius="20px 0px 0px 20px" bg="#eee" color="#767676" text={<SearchIcon />}></Button>
            <Input value={search} _onChange={change_text}  placeholder="Search free high-resolution photos" width="1000px"></Input>
            <Button _onClick={()=>{history.push(`/sub/${search}`)}} height="40px" width="50px" borderRadius="0px 20px 20px 0px" bg="#eee" color="#767676" text={<CenterFocusWeakIcon />}></Button>
          </Grid>
          <Grid flex="flex; align-items:center; justify-content:space-between" width="230px">
            <NavMenu>Explore</NavMenu>
            <NavMenu>Advertise</NavMenu>
            <NavMenu>Blog</NavMenu>
          </Grid>
          <Grid width="1px" bg="#d1d1d1" height="32px" />
          {/* <Grid width="auto"> */}
          <NavMenu
            onClick={() => {
              history.push('/login')
            }}
          >
            Log&nbsp;in
          </NavMenu>
          {/* </Grid> */}
          <SubmitBtn
            onClick={() => {
              history.push('/upload')
            }}
          >
            Submit&nbsp;a&nbsp;photo
          </SubmitBtn>
          <NavIcon>
            <IoNotifications className="header-icon" size="24px"></IoNotifications>
          </NavIcon>
          <NavIcon>
            <Image
              _onClick={() => {
                history.push(`/mypage/${nickname}`)
              }}
              cursor="pointer"
              shape="circle"
              size="40px"
              src="https://image.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"
            ></Image>
          </NavIcon>
          <NavIcon>
            <IoReorderThreeOutline className="header-icon" size="30px"></IoReorderThreeOutline>
          </NavIcon>
        </Grid>
      </Head>
    )
  }

  return (
    <Head>
      <Grid height="62px" flex="flex; justify-content:space-around;align-items:center">
        <Grid width="50px" margin="0 12px">
          <Image
            _onClick={() => {
              history.push('/')
            }}
            shape="logo"
            src={Logo}
          ></Image>
        </Grid>
        <Grid flex="flex; align-items:center" maxWidth="1300px">
          <Button height="40px" width="50px" borderRadius="20px 0px 0px 20px" bg="#eee" color="#767676" text={<SearchIcon />}></Button>
          <Input value={search} _onChange={change_text} search_box placeholder="Search free high-resolution photos" width="1000px"></Input>
          <Button _onClick={()=>{history.push(`/sub/${search}`)}} height="40px" width="50px" borderRadius="0px 20px 20px 0px" bg="#eee" color="#767676" text={<CenterFocusWeakIcon />}></Button>
        </Grid>
        <Grid flex="flex; align-items:center; justify-content:space-between" width="230px">
          <NavMenu>Explore</NavMenu>
          <NavMenu>Advertise</NavMenu>
          <NavMenu>Blog</NavMenu>
        </Grid>
        <Grid width="1px" bg="#d1d1d1" height="32px" />
        <NavMenu
          onClick={() => {
            history.push('/login')
          }}
        >
          Log&nbsp;in
        </NavMenu>
        <SubmitBtn
          onClick={() => {
            history.push('/upload')
          }}
        >
          Submit&nbsp;a&nbsp;photo
        </SubmitBtn>
        <NavIcon>
          <IoNotifications className="header-icon" size="24px"></IoNotifications>
        </NavIcon>
        <NavIcon>
          <Image
            _onClick={() => {
              history.push(`/mypage/${nickname}`)
            }}
            cursor="pointer"
            shape="circle"
            size="40px"
            src="https://image.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"
          ></Image>
        </NavIcon>
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
  padding: 0 11px;
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
