import React from 'react'
import styled from 'styled-components'
import './Detail.css'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../redux/configureStore'
import { actionCreators as cardActions } from '../redux/modules/card'
import { apis } from '../shared/api'

// react-icons
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { HiHeart } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
import { IoArrowRedoSharp } from 'react-icons/io5'
import { IoLocationSharp } from 'react-icons/io5'
import { MdInfo } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'
import { MdOutlineDescription } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'

const Detail = (props) => {
  const dispatch = useDispatch()

  const clickClose = () => {
    history.goBack()
  }

  const clickNotPrepared = () => {
    window.alert('준비중입니다.')
  }

  const card_id = props.match.params.id
  const userId = Number(localStorage.getItem('userId'))
  const card = useSelector((state) => state.card.one_card)

  const [action, setAction] = React.useState(null)

  const clickLike = () => {
    if (action === null) {
      apis
        .clickLike(card_id)
        .then((res) => {
          setAction('liked')
        })
        .catch((err) => {
          window.alert('좋아요 클릭에 문제가 발생했습니다.', err.response)
        })
    } else if (action === 'liked') {
      apis
        .clickLike(card_id)
        .then((res) => {
          console.log(res)
          setAction(null)
        })
        .catch((err) => {
          window.alert('좋아요 취소에 문제가 발생했습니다.', err.response)
        })
    }
  }

  React.useEffect(() => {
    apis
      .getLikeUser(card_id)
      .then((res) => {
        const user_list = res.data.userIds
        if (user_list.length > 0) {
          user_list.map((user) => {
            if (user === userId) {
              setAction('liked')
            } else {
              setAction(null)
            }
          })
        } else if (user_list.length === 0) {
          setAction(null)
        }
      })
      .catch((err) => {
        window.alert('유저 정보를 불러오는 데 실패했습니다.', err.response)
      })
  }, [])

  React.useEffect(() => {
    dispatch(cardActions.getOneCardDB(card_id))
  }, [])

  return (
    <>
      <ModalBody>
        <ModalOverlay>
          <div>
            <button className="close-detail-btn" onClick={clickClose}>
              <IoCloseSharp className="close-detail-icon" />
            </button>
          </div>
          <ModalContent className="detail-modal-content">
            <DetailContainer>
              <ModalHeader>
                <UserBox>
                  <UserProfile>
                    <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"></img>
                  </UserProfile>
                  <UserInfo>
                    <p className="username">{card.nickname}</p>
                    <div className="user-status-flex">
                      <p className="user-status">Available for hire</p>
                      <IoCheckmarkCircleSharp />
                    </div>
                  </UserInfo>
                </UserBox>
                <Toggle>
                  <div className="icon-box">
                    <button onClick={clickLike} className={`${action === 'liked' ? 'icon-btn like' : 'icon-btn'}`}>
                      <HiHeart />
                    </button>
                  </div>
                  <div className="icon-box">
                    <button className="icon-btn" onClick={clickNotPrepared}>
                      <GoPlus />
                    </button>
                  </div>
                  <DownloadToggle>
                    <div>
                      <button className="download-btn btn" onClick={clickNotPrepared}>
                        Download free
                      </button>
                    </div>
                    <div>
                      <button className="size-btn btn" onClick={clickNotPrepared}>
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </DownloadToggle>
                </Toggle>
              </ModalHeader>
              <ModalImage>
                <div>
                  <div className="image-wrap">
                    <div className="image-container">
                      <img src={card.img}></img>
                    </div>
                  </div>
                </div>
              </ModalImage>
              <ModalInfo>
                <div className="image-info">
                  <div>
                    <h3 className="image-info-title">Views</h3>
                    <span className="image-info-content">{card.view}</span>
                  </div>
                  <div>
                    <h3 className="image-info-title">Likes</h3>
                    <span className="image-info-content">{card.likeCnt}</span>
                  </div>
                  <div>
                    <h3 className="image-info-title">Featured in</h3>
                    <span className="image-info-content">
                      <a>{card.tagname}</a>
                    </span>
                  </div>
                </div>
                <div className="image-toggle">
                  <div className="icon-box">
                    <button className="icon-btn" onClick={clickNotPrepared}>
                      <IoArrowRedoSharp />
                      &nbsp;Shared
                    </button>
                  </div>
                  <div className="icon-box">
                    <button className="icon-btn" onClick={clickNotPrepared}>
                      <MdInfo />
                      &nbsp;Info
                    </button>
                  </div>
                  <div className="icon-box">
                    <button className="icon-btn" onClick={clickNotPrepared}>
                      <BsThreeDots />
                    </button>
                  </div>
                </div>
              </ModalInfo>
              <ModalDesc>
                <div className="image-desc">
                  <span className="image-desc-icon">
                    <IoLocationSharp />
                  </span>
                  <p className="image-desc-text">{card.location}</p>
                </div>
                <div className="image-desc">
                  <span className="image-desc-icon">
                    <FiCalendar />
                  </span>
                  <p className="image-desc-text">{card.modifiedAt}</p>
                </div>
                <div className="image-desc">
                  <span className="image-desc-icon">
                    <MdOutlineDescription />
                  </span>
                  <p className="image-desc-text">{card.description}</p>
                </div>
              </ModalDesc>
            </DetailContainer>
          </ModalContent>
        </ModalOverlay>
      </ModalBody>
    </>
  )
}

const ModalBody = styled.div`
  width: 99vw;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  /* opacity: 0; */
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: hidden;
`

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: auto;
  background-color: #0009;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  .close-detail-btn {
    position: fixed;
    top: 0;
    left: 10px;
    margin: 8px 0 0 8px;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;

    .close-detail-icon {
      font-size: 24px;
      color: #fff;
    }
  }
`

const ModalContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const DetailContainer = styled.div`
  min-height: 100%;
  cursor: auto;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  background-color: #999;

  .icon-box {
    padding: 4px;

    .icon-btn {
      display: flex;
      align-items: center;
      background-color: #fff;
      border: 1px solid #d1d1d1;
      padding: 0 10px;
      margin: 0;
      font-size: 14px;
      font-weight: 400;
      border-radius: 4px;
      height: 32px;
      line-height: 30px;
      color: #767676;
      transition: all 0.1s ease-in-out;

      &:hover {
        color: #111;
        border: 1px solid #111;
      }

      svg {
        font-size: 20px;
      }
    }

    .like {
      padding: 0 10px;
      border: 1px solid #f15151;
      background-color: #f15151;
      color: #fff;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        border: 1px solid #df5151;
        background-color: #df5151;
        color: #fff;
      }
    }
  }
`

const ModalHeader = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  width: auto;
  padding: 6px 12px;
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
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  .username {
    line-height: 1.35;
    font-weight: 600;
    margin: 0;
    text-align: left;
  }

  .user-status-flex {
    display: flex;
    align-items: center;
    color: #007fff;

    .user-status {
      font-size: 12px;
      line-height: 1.35;
      margin: 0;
      text-align: left;
    }

    svg {
      font-size: 14px;
      margin-left: 3px;
    }
  }
`

const Toggle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const DownloadToggle = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;

  div {
    .btn {
      display: inline-flex;
      background-color: #3cb46e;
      padding: 0 11px;
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      border-radius: 4px;
      height: 32px;
      line-height: 30px;
      color: #fff;
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: #36a966;
      }
    }

    .download-btn {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: 0.7px;
    }

    .size-btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      svg {
        color: #fff;
        font-size: 19px;
        line-height: 30px;
        padding-top: 5px;
      }
    }
  }
`
const ModalImage = styled.div`
  .image-wrap {
    padding: 10px 16px;
    background-color: #fff;

    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 680px;
        min-width: min(100%, 572px);
        max-width: calc((100vh - 175px) * 1.50316);
        /* height: 100%; */
        margin: 0 auto;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
`

const ModalInfo = styled.div`
  padding: 14px 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  .image-info {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 200px));
    align-items: start;

    .image-info-title {
      margin: 0;
      color: #767676;
      font-size: 14px;
      width: fit-content;
      font-weight: inherit;
    }

    .image-info-content {
      font-weight: 500;
    }
  }

  .image-toggle {
    display: flex;
    justify-content: right;
  }
`

const ModalDesc = styled.div`
  padding: 14px 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  .image-desc {
    display: flex;
    align-items: center;
    color: #767676;
    font-size: 14px;

    .image-desc-icon {
      width: 18px;
      margin: 0 7px 0 0;

      svg {
        font-size: 20px;
        padding-top: 5px;
      }
    }

    .image-desc-text {
      margin: 0;
    }
  }
`

export default Detail
