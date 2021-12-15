import React from 'react';
import styled from 'styled-components';
import './Edit.css';
import EditScroll from "../components/EditScroll";
import Button from '@material-ui/core/Button';
import { Grid, Input } from '../elements';

const Edit = (props) => {
  return (
    <>
      <ModalBody>
        <ModalOverlay>
          <ModalContent className="modal-content">
            <DetailContainer>
              <ModalImage>
                <div>
                  <img src="https://images.unsplash.com/photo-1639470068221-ec4dd26f643f?ixlib=rb-1.2.1&q=60&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&auto=format&h=560"></img>
                </div>
              </ModalImage>
              <div>
                <EditScroll/>
                <Grid padding="0px 0px 0px 20px">
                  
                  <Input placeholder="A good description makes a photo more discoverable." label="Description" textarea></Input>
                  <Input placeholder="Add a place or a city" label="Location" nomal></Input>
              </Grid>
              <Grid align="right" margin="60px 0px 0px 0px" >
                <Button style={{margin:"0px 10px 0px 0px"}} variant="outlined">Cancel</Button>
                <Button variant="contained">Update info</Button>
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
