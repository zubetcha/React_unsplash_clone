import React from 'react';
import styled from 'styled-components';
import {history} from '../redux/configureStore';

const Card = (props) => {
  
  return (
    
    <div
      style={{
        ...styles.card,
        ...styles[props.size],
      }} 
    >
      <img onClick={()=>{history.push(`/detail/${props.id}`)}} width="100%" height="100%" src={props.src}></img>
      <Container>
      <button onClick={()=>{history.push(`/edit/${props.id}`)}} className="icon-btn">
          &nbsp;Edit
      </button>
    </Container>
    </div>
    
    
  )
}

const styles = {
  card: {
    position: 'relative',
    margin: '15px 10px',
    padding: 0,
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
}

const Container= styled.div`

  .icon-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 0.5px solid #d1d1d1;
    padding: 0 12px;
    margin: 0;
    font-size: 14px;
    font-weight: 600;
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
`;

  


export default Card
