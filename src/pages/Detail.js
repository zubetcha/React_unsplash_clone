import React from 'react'
import styled from 'styled-components'

// elements
import { Grid } from '../elements'

const Detail = (props) => {
  return (
    <>
      <ModalBody>
        <ModalOverlay>
          <LeftPanel></LeftPanel>
          <DetailContainer>
            <ModalHeader>
              <UserBox>
                <UserProfile>
                  <img></img>
                </UserProfile>
                <UserInfo>
                  <p className="username">ZUBETCHA</p>
                  <p className="user-status">Available for hire</p>
                </UserInfo>
              </UserBox>
              <Toggle>
                <div className="icon-box">
                  <button className="icon-btn">하트</button>
                </div>
                <div className="icon-box">
                  <button className="icon-btn">+</button>
                </div>
                <DownloadToggle>
                  <div>
                    <button className="download-btn btn">Download free</button>
                  </div>
                  <div>
                    <button className="size-btn btn">dd</button>
                  </div>
                </DownloadToggle>
              </Toggle>
            </ModalHeader>
            <ModalImage>
              <div>
                <div></div>
              </div>
            </ModalImage>
            <ModalInfo></ModalInfo>
          </DetailContainer>
          <RightPanel></RightPanel>
        </ModalOverlay>
      </ModalBody>
    </>
  )
}

const ModalBody = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  /* opacity: 0; */
  box-sizing: border-box;
  z-index: 0;
`

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  backface-visibility: hidden;
  overflow: auto;
  background-color: #0009;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: row;
`

const LeftPanel = styled.div`
  width: 70px;
  min-height: 100%;
  background-color: #0009;
`

const RightPanel = styled.div`
  width: 70px;
  min-height: 100%;
  background-color: #0009;
`

const DetailContainer = styled.div`
  box-sizing: border-box;
  margin: 16px 0 100px;
  width: calc(100% - 140px);
  min-height: 100%;
  cursor: auto;
  display: flex;
  flex-direction: column;
  outline: none;
  pointer-events: none;
  background-color: #999;
`

const ModalHeader = styled.div`
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  width: auto;
  padding: 9px 12px;
  pointer-events: auto;
  cursor: auto;
  background-color: #fff;
`

const UserBox = styled.div`
  flex-basis: 200px;
  flex-grow: 1;
  height: 40px;
  margin-right: auto;
  padding: 4px;
  display: flex;
  align-items: center;
`

const UserProfile = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;

  img {
    box-sizing: border-box;
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-image: url(https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  .username {
    font-size: 15px;
    line-height: 1.35;
    font-weight: 600;
    color: #111;
    margin: 0;
    text-align: left;
  }

  .user-status {
    font-size: 12px;
    line-height: 1.35;
    color: #007fff;
    margin: 0;
    text-align: left;
  }
`

const Toggle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  .icon-box {
    padding: 4px;

    .icon-btn {
      outline: none;
      display: inline-flex;
      background-color: #fff;
      border: 0.5px solid #d1d1d1;
      padding: 0 11px;
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      border-radius: 4px;
      height: 32px;
      line-height: 30px;
      color: #767676;
      cursor: pointer;

      svg {
        color: #767676;
      }
    }
  }
`

const DownloadToggle = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;

  div {
    .btn {
      outline: none;
      display: inline-flex;
      background-color: #3cb46e;
      border: 0;
      padding: 0 11px;
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      border-radius: 4px;
      height: 32px;
      line-height: 30px;
      color: #fff;
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: #36a966;
      }
    }

    .download-btn {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: 0.5px;
    }

    .size-btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      svg {
        color: #fff;
      }
    }
  }
`
const ModalImage = styled.div``

const ModalInfo = styled.div``

export default Detail
