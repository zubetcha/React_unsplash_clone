import React from 'react';
import styled from 'styled-components';
import {history} from '../redux/configureStore';

const Card = (props) => {
  return (
    <div
      style={{
        ...styles.card,
        ...styles[props.size],
      }} onClick={()=>{history.push(`/detail/${props.id}`)}}
    >
      <img width="100%" height="100%" src={props.src}></img>
    </div>
  )
}

const styles = {
  card: {
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

export default Card
