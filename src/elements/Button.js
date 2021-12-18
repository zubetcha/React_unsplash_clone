import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const { boxSizing, textAlign, borderRadius, border, outline, width, height, bg, color, cursor, text, _onClick, _disabled, loginJoin, submit } = props
  const styles = {
    boxSizing: boxSizing,
    textAlign: textAlign,
    borderRadius: borderRadius,
    border: border,
    outline: outline,
    width: width,
    height: height,
    bg: bg,
    color: color,
    cursor: cursor,
  }

  if (submit) {
    return (
      <>
        <SubmitBtn {...styles} onClick={_onClick} disabled={_disabled}>
          {text}
        </SubmitBtn>
      </>
    )
  }

  if (loginJoin) {
    return (
      <>
        <UserBtn {...styles} onClick={_onClick} disabled={_disabled}>
          {text}
        </UserBtn>
      </>
    )
  }

  return (
    <>
      <Btn onClick={_onClick} {...styles}>{text}</Btn>
    </>
  )
}

Button.defaultProps = {
  boxSizing: 'border-box',
  text: '',
  textAlign: 'center',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  width: '100%',
  height: '',
  bg: '#111',
  color: '#FFF',
  cursor: 'pointer',
  _onClick: () => {},
  _disabled: () => {},
}

const SubmitBtn = styled.button`
  box-sizing: ${(props) => props.boxSizing};
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};

  font-size: 14px;
  height: 32px;
  line-height: 30px;
  padding: 0 11px;
`

const UserBtn = styled.button`
  box-sizing: ${(props) => props.boxSizing};
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};

  height: 44px;
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  text-decoration: none;
  box-shadow: 0 1px 4px rgb(0 0 0 / 2%), 0 1px 1px rgb(0 0 0 / 6%);
  padding: 10px 19px;
  font-size: 15px;
  line-height: 1.6;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out;
`
const Btn = styled.button`
  box-sizing: ${(props) => props.boxSizing};
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`
export default Button
