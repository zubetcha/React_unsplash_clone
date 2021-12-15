import React from 'react'
import styled from 'styled-components'

// ** elements
import Card from './Card'

// ** react-icons
import { IoLocationSharp } from 'react-icons/io5'

const Uploadform = (props) => {
  const { size } = props

  if (size === 'small') {
    return (
      <div>
        <Card
          src="https://images.unsplash.com/photo-1639364617761-c01ba617a2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          size="small"
        />
        <FormBox>
          <input className="add-tag" type="text" placeholder="Add a tag" />
          <textarea className="add-desc" rows="3" placeholder="Add a description (optional)" maxLength="600" />
        </FormBox>
      </div>
    )
  }

  if (size === 'medium') {
    return (
      <div>
        <Card
          src="https://images.unsplash.com/photo-1639364617761-c01ba617a2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          size="medium"
        />
        <FormBox>
          <input className="add-tag" type="text" placeholder="Add a tag" />
          <textarea className="add-desc" rows="3" placeholder="Add a description (optional)" maxLength="600" />
        </FormBox>
      </div>
    )
  }

  if (size === 'large') {
    return (
      <div>
        <Card
          src="https://images.unsplash.com/photo-1639364617761-c01ba617a2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          size="large"
        />
        <FormBox>
          <input className="add-tag" type="text" placeholder="Add a tag" />
          <textarea className="add-desc" rows="3" placeholder="Add a description (optional)" maxLength="600" />
        </FormBox>
      </div>
    )
  }

  return (
    <>
      <div>
        <Card
          src="https://images.unsplash.com/photo-1639364617761-c01ba617a2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          size="medium"
        />
        <FormBox>
          <input className="add-tag" type="text" placeholder="Add a tag" />
          <textarea className="add-desc" rows="3" placeholder="Add a description (optional)" maxLength="600" />
        </FormBox>
      </div>
    </>
  )
}

const FormBox = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  .add-tag,
  .add-desc {
    box-sizing: border-box;
    outline: none;
    border: 1px solid #d1d1d1;
    padding: 8px 12px;
    resize: none;
    line-height: 1.6;
    transition: border-color 0.1s ease-in-out;
    &:focus {
      border-color: #111;
    }
  }
`

export default Uploadform
