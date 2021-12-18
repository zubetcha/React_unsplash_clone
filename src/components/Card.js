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

  const [show, setShow] = React.useState(false)

  return (
    <div
      style={{
        ...styles.card,
        ...styles[props.size],
      }}
    >
      <CardImage
        onClick={() => {
          history.push(`/detail/${props.id}`)
        }}
        width="100%"
        height="100%"
        src={props.src}
        onMouseOver={() => {
          setShow(true)
        }}
        onMouseLeave={() => {
          setShow(false)
        }}
      ></CardImage>
      <Container>
        {token && nickname == props.name && (
          <>
            <button
              onClick={() => {
                history.push(`/edit/${props.id}`)
              }}
              className={`btn icon-btn ${show ? 'show' : 'none'}`}
              onMouseOver={() => {
                setShow(true)
              }}
              onMouseLeave={() => {
                setShow(false)
              }}
            >
              &nbsp;Edit
            </button>
            <button
              onClick={() => {
                dispatch(cardActions.deleteCardDB(props.id))
              }}
              className={`btn icon-btn2 ${show ? 'show' : 'none'}`}
              onMouseOver={() => {
                setShow(true)
              }}
              onMouseLeave={() => {
                setShow(false)
              }}
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

const CardImage = styled.img`
  cursor: zoom-in;
`

const Container = styled.div`
  .btn {
    position: absolute;
    top: 10px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    border-radius: 50px;
    height: 32px;
    line-height: 30px;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: #949494;
    }
  }

  .none {
    background-color: transparent;
    border: 0.5px solid transparent;
    color: transparent;
  }

  .show {
    background-color: #636161;
    opacity: 0.8;
    border: 0.5px solid transparent;
    color: #fff;
  }

  .icon-btn {
    left: 10px;
  }
  .icon-btn2 {
    right: 10px;
  }
`

export default Card
