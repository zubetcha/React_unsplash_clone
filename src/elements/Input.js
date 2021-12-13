import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  const { label, placeholder, type, value, margin, padding, boxSizing, _onChange, height, condition, conditionInfo } = props
  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
  }

  // 유효성 검사에 부합하지 않으면 label, inputbox 컬러 변함
  if (condition) {
    return (
      <>
        <FormGroup>
          <label className="form-label">{label}</label>
          <span className="form-condition">{conditionInfo}</span>
          <input className="form-input" {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange}></input>
        </FormGroup>
      </>
    )
  }

  return (
    <>
      <FormGroup>
        <label className="form-label">{label}</label>
        <input className="form-input" {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange}></input>
      </FormGroup>
    </>
  )
}

Input.defaultProps = {
  label: '',
  conditionInfo: '',
  placeholder: 'text',
  type: 'text',
  value: '',
  margin: '0',
  padding: '6px 12px',
  boxSizing: 'border-box',
  _onChange: () => {},
  height: '40px',
}

const FormGroup = styled.div`
  margin-bottom: 24px;
  box-sizing: ${(props) => props.boxSizing};

  font-size: 15px;
  line-height: 1.6;
  color: #111111;

  .form-label {
    box-sizing: border-box;
    display: inline-flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    max-width: 100%;
    margin-bottom: 6 px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-weight: 400;
  }

  .form-input {
    display: block;
    width: 100%;
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    font-size: 15px;
    line-height: 1.6;
    color: #111111;
    background-color: transparent;
    background-image: none;
    box-sizing: ${(props) => props.boxSizing};
    border: 1 px solid #767676;
    border-radius: 4 px;
    -webkit-transition: border-color ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s;
    cursor: text;

    &:focus {
      border: 1px solid #111111;
    }
  }
`

const Condition = styled.span``

export default Input
