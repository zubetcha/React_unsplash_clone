import React from 'react';
import styled from 'styled-components';
import './Edit.css';
import EditScroll from "../components/EditScroll";
import Button from '@material-ui/core/Button';
import { Grid, Input } from '../elements';
import {useDispatch ,useSelector } from "react-redux";
import { actionCreators as cardActions } from '../redux/modules/card';

const Edit = (props) => {
  const card_list = useSelector((state) => state.card.card_list);
  const card_id = props.match.params.id;
  const is_edit = card_id? true: false;
  console.log(card_list, card_id)
  let _card = is_edit? card_list.find((c) => c.boardId == card_id) : null;

  const dispatch = useDispatch();
  

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
    dispatch(cardActions.editCardDB(card_id, option_list[tag], location, textarea))
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
                <EditScroll/>
                <Grid padding="0px 0px 0px 20px">
                  
                  <Input value={textarea} _onChange={change_text} placeholder="A good description makes a photo more discoverable." label="Description" textarea></Input>
                  <Input value={location} _onChange={change_location} placeholder="Add a place or a city" label="Location" nomal></Input>
                  <select onChange={handleClick} style={{ width: '380px', border: '1px solid black' }} class="dropdown">
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
              <Grid align="right" margin="40px 0px 0px 0px" >
                <Button style={{margin:"0px 10px 0px 0px"}} variant="outlined">Cancel</Button>
                <Button onClick={() =>{edit_card()}} variant="contained">Update info</Button>
              </Grid>
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
  backface-visibility: hidden;
  overflow: auto;
  background-color: #0009;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const ModalContent = styled.div`
  min-height: 80%;
  display: flex;
  flex-direction: column;
`;

const DetailContainer = styled.div`
  box-sizing: border-box;
  height: 500px;
  width: 860px;
  cursor: auto;
  display: flex;
  outline: none;
  background-color: #fff;
  border-radius: 5px;

`;
const ModalImage = styled.div`
  
 img {
    width:285px;
    height:500px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px 0px 0px 5px;
  }
`;


export default Edit;
