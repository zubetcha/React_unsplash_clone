import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { actionCreators as cardActions } from '../redux/modules/card'

// elements & components
import Header from '../components/Header'
import Masonry from '../components/Masonry'
import CardTest from '../components/CardTest'
import { Grid, Image, Text } from '../elements'

// react-icons
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { RiPencilFill } from 'react-icons/ri'
import { MdPhoto } from 'react-icons/md'
import { HiHeart } from 'react-icons/hi'
import { VscFileSubmodule } from 'react-icons/vsc'
import { BsFillBarChartFill } from 'react-icons/bs'

const Mypage = (props) => {
  const dispatch = useDispatch()

  const nickname = localStorage.getItem('nickname')

  const test = () => {
    dispatch(cardActions.userCardDB())
  }

  return (
    <>
      <Header Mypage />
      <Grid height="100%" padding="62px 0 0">
        <Grid maxWidth="1320px" padding="60px 12px 72px" margin="0 auto">
          <Grid flex="flex" alignItems="center">
            <Grid width="34%" flex="flex" justifyContent="right" margin="0 32px 0 auto">
              <Image shape="circle" size="150px" src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"></Image>
            </Grid>
            <Grid width="66%" flex="flex" flexDirection="column" alignItems="center">
              <Grid flex="flex" flexDirection="row" alignItems="center" justifyContent="left" padding="0 0 16px 16px">
                <Username>{nickname}</Username>
                <Grid width="auto" padding="0 0 0 24px">
                  <EditProfile>
                    <RiPencilFill className="edit-profile-icon" />
                    Edit profile
                  </EditProfile>
                </Grid>
              </Grid>
              <Grid padding="0 0 16px 16px">
                <Text margin="0" color="#111" size="15px">
                  Download free, beautiful high-quality photos curated by {nickname}.
                </Text>
              </Grid>
              <Grid flex="flex" alignItems="center" padding="0 0 16px 16px">
                <Text margin="0" size="15px" color="#007fff">
                  Available for hire
                </Text>
                <IoCheckmarkCircleSharp style={{ color: '#007fff', fontSize: '16px', marginLeft: '8px' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid height="56px" margin="0 0 56px 0" borderBottom="1px solid #d1d1d1">
          <Grid flex="flex" height="100%" alignItems="center" justifyContent="left" width="auto">
            <Grid flex="flex" width="auto" height="100%">
              <MyList>
                <ListItem>
                  <ListBtn className="current-list-btn">
                    <MdPhoto className="current-list-icon" />
                    Photos
                  </ListBtn>
                </ListItem>
                <ListItem>
                  <ListBtn>
                    <HiHeart className="list-icon" />
                    Likes
                  </ListBtn>
                </ListItem>
                <ListItem>
                  <ListBtn>
                    <VscFileSubmodule className="list-icon" />
                    Collections
                  </ListBtn>
                </ListItem>
                <ListItem>
                  <ListBtn>
                    <BsFillBarChartFill className="list-icon" />
                    Stats
                  </ListBtn>
                </ListItem>
                <ListItem>
                  <ListBtn onClick={test}>Card 확인</ListBtn>
                </ListItem>
              </MyList>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <div style={styles.card_container}>
            <CardTest src="https://picsum.photos/200/300?image=279" size="small"></CardTest>
            <CardTest src="https://picsum.photos/400/400?image=400" size="medium"></CardTest>
            <CardTest src="https://picsum.photos/600/400?image=501" size="large"></CardTest>
            <CardTest src="https://picsum.photos/200/200?image=998" size="large"></CardTest>
            <CardTest src="https://picsum.photos/500/400?image=287" size="medium"></CardTest>
            <CardTest src="https://picsum.photos/400/600?image=957" size="small"></CardTest>
            <CardTest src="https://picsum.photos/200/300?image=916" size="small"></CardTest>
            <CardTest src="https://picsum.photos/200/300?image=279" size="medium"></CardTest>
            <CardTest src="https://picsum.photos/400/400?image=400" size="large"></CardTest>
            <CardTest src="https://picsum.photos/600/400?image=501" size="small"></CardTest>
            <CardTest src="https://picsum.photos/200/200?image=998" size="medium"></CardTest>
            <CardTest src="https://picsum.photos/500/400?image=287" size="large"></CardTest>
            <CardTest src="https://picsum.photos/400/600?image=957" size="small"></CardTest>
            <CardTest src="https://picsum.photos/200/300?image=916" size="medium"></CardTest>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

const styles = {
  card_container: {
    margin: '30px 0px 0px 0px',
    padding: 0,
    width: '80vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 400px)',
    gridAutoRows: '10px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
}

const Username = styled.p`
  width: auto;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`

const EditProfile = styled.button`
  width: auto;
  height: 32px;
  line-height: 30px;
  padding: 0 11px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #767676;
  text-align: center;
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    border: 1px solid #111;
    color: #111;
  }

  .edit-profile-icon {
    margin-right: 7px;
  }
`

const MyList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  width: auto;
`

const ListItem = styled.li`
  width: auto;
  height: 100%;
  line-height: 56px;
  padding-left: 32px;

  .current-list-btn {
    border-bottom: 3px solid #111;
    color: #111;
    .current-list-icon {
      color: #111;
      font-size: 18px;
      margin-right: 8px;
    }
  }
`

const ListBtn = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  color: #8c8c8c;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #111;
  }

  .list-icon {
    font-size: 18px;
    margin-right: 8px;
  }
`

export default Mypage
