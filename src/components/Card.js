import React from 'react'
import styled from 'styled-components'
import { history } from '../redux/configureStore'
import { useDispatch } from 'react-redux'
import { actionCreators as cardActions } from '../redux/modules/card'
import { getCookie } from '../shared/Cookie'

const Card = (props) => {
  const dispatch = useDispatch()
  const token = getCookie('token')
  const nickname = localStorage.getItem('nickname')
  return (
    <div
      style={{
        ...styles.card,
        ...styles[props.size],
      }}
    >
      <img
        onClick={() => {
          history.push(`/detail/${props.id}`)
        }}
        width="100%"
        height="100%"
        src={props.src}
      ></img>
      <Container>
        {token && nickname == props.name && (
          <>
            <button
              onClick={() => {
                history.push(`/edit/${props.id}`)
              }}
              className="icon-btn"
            >
              &nbsp;Edit
            </button>
            <button
              onClick={() => {
                dispatch(cardActions.deleteCardDB(props.id))
              }}
              className="icon-btn2"
            >
              &nbsp;Delete
            </button>
          </>
        )}
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
    gridRowEnd: 'span 25',
  },
  medium: {
    gridRowEnd: 'span 40',
  },
  large: {
    gridRowEnd: 'span 55',
  },
}

const Container = styled.div`
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
    font-weight: 500;
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
  .icon-btn2 {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0.5px solid transparent;
    padding: 0 12px;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    height: 32px;
    line-height: 30px;
    color: transparent;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #111;
      border: 0.5px solid #111;
    }
  }
`

export default Card
