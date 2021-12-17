import React, { useState } from 'react'
import './Detail.css'
import { history } from '../redux/configureStore'

const CardTest = (props) => {
  const boardId = props.boardId

  const [showDetail, setShowDetail] = React.useState(false)

  const openDetail = () => {
    setShowDetail(true)
  }

  const closeDetail = () => {
    setShowDetail(false)
  }

  window.addEventListener('keyup', (e) => {
    if (showDetail && e.key === 'Escape') {
      setShowDetail(false)
    }
  })

  return (
    <>
      <div
        style={{
          ...styles.card,
          ...styles[props.size],
        }}
      >
        <img width="100%" height="100%" src={props.img} onClick={() => history.push(`/detail/${boardId}`)}></img>
      </div>
    </>
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

export default CardTest
