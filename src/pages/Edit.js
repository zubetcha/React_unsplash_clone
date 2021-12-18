import React from 'react'
import styled from 'styled-components'
import './Edit.css'
import EditScroll from '../components/EditScroll'
import Button from '@material-ui/core/Button'
import { Grid, Input } from '../elements'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as cardActions } from '../redux/modules/card'
import { history } from '../redux/configureStore'

const Edit = (props) => {
  const card_list = useSelector((state) => state.card.card_list)
  const card_id = props.match.params.id
  const is_edit = card_id ? true : false
  let _card = is_edit ? card_list.find((c) => c.boardId == card_id) : null

  const dispatch = useDispatch()

  const option_list = [
    'Holidays',
    'Blockchain',
    'Wallpapers',
    '3DRenders',
    'Textures&Patterns',
    'Architecture',
    'Experimental',
    'Nature',
    'Business&Work',
    'Fashion',
    'Food&Drink',
    'Health&Wellness',
    'CurrentEvents',
    'People',
    'Interiors',
  ]
  const [tag, setTags] = React.useState(0)
  const [location, setLocations] = React.useState('')
  const [textarea, setTexts] = React.useState('')

  const change_text = (e) => {
    setTexts(e.target.value)
  }

  const change_location = (e) => {
    setLocations(e.target.value)
  }

  const handleClick = (e) => {
    setTags(e.target.value)
  }

  const edit_card = () => {
    // console.log(card_id, option_list[tag], location, textarea)
    if (location == '' || textarea == '') {
      window.alert('게시물을 모두 작성해주세요')
      return
    } else {
      dispatch(cardActions.editCardDB(card_id, option_list[tag], location, textarea))
    }
  }
  return (
    <>
      <ModalBody>
        <ModalOverlay>
          <ModalContent className="modal-content">
            <DetailContainer>
              <ModalImage>
                <div>
                  <img src={_card.img}></img>
                </div>
              </ModalImage>
              <div>
                <EditScroll />
                <Grid padding="20px 0px 0px 20px">
                  <Input value={textarea} _onChange={change_text} placeholder="A good description makes a photo more discoverable." label="Description" textarea></Input>
                  <Input value={location} _onChange={change_location} placeholder="Add a place or a city" label="Location" nomal></Input>
                  <p style={{ margin: '16px 0 0' }}>Tagname</p>
                  <select onChange={handleClick} className="dropdown">
                    <option value="0">Holidays</option>
                    <option value="1">Blockchain</option>
                    <option value="2">Wallpapers</option>
                    <option value="3">3DRenders</option>
                    <option value="4">Textures&Patterns</option>
                    <option value="5">Architecture</option>
                    <option value="6">Experimental</option>
                    <option value="7">Nature</option>
                    <option value="8">Business&Work</option>
                    <option value="9">Fashion</option>
                    <option value="10">Food&Drink</option>
                    <option value="11">Health&Wellness</option>
                    <option value="12">CurrentEvents</option>
                    <option value="13">People</option>
                    <option value="14">Interiors</option>
                  </select>
                </Grid>
                <FooterBtn>
                  <button
                    onClick={() => {
                      history.replace('/')
                    }}
                    variant="outlined"
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      edit_card()
                    }}
                    variant="contained"
                    className="submit-btn"
                  >
                    Update info
                  </button>
                </FooterBtn>
              </div>
            </DetailContainer>
          </ModalContent>
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
  overflow-y: hidden;
`

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  background-color: #0009;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
`

const ModalContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const DetailContainer = styled.div`
  height: 500px;
  width: 860px;
  cursor: auto;
  display: flex;
  outline: none;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .dropdown {
    width: 100%;
    padding: 10px 7px;
    margin: 12px 0 6px;
    font-size: 13px;
    border-radius: 4px;
    border: 1px solid #d1d1d1;
    &:focus {
      outline: none;
    }
  }
`
const ModalImage = styled.div`
  img {
    width: 285px;
    height: 500px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px 0px 0px 5px;
  }
`

const FooterBtn = styled.div`
  padding: 0 0 0 20px;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 8px;
  .cancel-btn,
  .submit-btn {
    background-color: #fff;
    border: 0.5px solid #d1d1d1;
    padding: 0 9px;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    height: 32px;
    line-height: 30px;
    color: #767676;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: #111;
      border: 0.5px solid #111;
    }
  }
`

export default Edit
