import React from 'react'
import styled from 'styled-components'
import { Grid, Text } from '.'

const Input = (props) => {
  const { label, textarea, textarea2, nomal, placeholder, search_box, type, value, margin, padding, boxSizing, _onChange, width, height, condition, conditionInfo, maxWidth } = props
  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
    width: width,
    maxWidth: maxWidth,
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

  if (search_box) {
    return (
      <>
        <SearchBox {...styles}>
          <input className="form-input" {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange}></input>
        </SearchBox>
      </>
    )
  }

  if (textarea) {
    return (
      <Grid>
        <Text size="16px" align="left">
          {label}
        </Text>
        <Textarea rows="7" {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange}></Textarea>
      </Grid>
    )
  }

  if (textarea2) {
    return <Textarea rows="3" {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange}></Textarea>
  }

  if (nomal) {
    return (
      <Grid>
        <Text size="16px" align="left">
          {label}
        </Text>
        <InputBox {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange}></InputBox>
      </Grid>
    )
  }

  return (
    <>
      <FormGroup {...styles}>
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
  width: ${(props) => props.width};
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
    height: ${(props) => props.height};
    width: 100%;
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
const SearchBox = styled.div`
  box-sizing: ${(props) => props.boxSizing};
  width: 100%;
  font-size: 15px;
  line-height: 1.6;
  color: #111111;

  .form-input {
    display: block;
    height: ${(props) => props.height};
    width: 100%;
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    font-size: 15px;
    line-height: 1.6;
    color: #111111;
    background: #eee;
    box-sizing: ${(props) => props.boxSizing};
    border: none;
    border-radius: 1 px;
    -webkit-transition: border-color ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s;
    cursor: text;

    &:focus {
      border: 1px solid #111111;
    }
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px 0px;
  font-family: 'Noto Sans KR';
  border: 1px solid black;
`

const InputBox = styled.input`
  display: block;
  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  box-sizing: ${(props) => props.boxSizing};
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  color: #c4c4c4;
  font-size: 13px;
  margin: 15px 0;
  font-family: 'Noto Sans KR';
  border: 1px solid black;
`


export default Input
