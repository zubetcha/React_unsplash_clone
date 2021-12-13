import React from 'react'
import styled from 'styled-components'

const Grid = (props) => {
  const { position, children, flex, align, width, height, maxWidth, padding, margin, bg, overflowY, verticalAlign, alignItems, _onClick } = props
  const styles = {
    flex: flex,
    position: position,
    width: width,
    height: height,
    maxWidth: maxWidth,
    padding: padding,
    margin: margin,
    align: align,
    bg: bg,
    overflowY: overflowY,
    verticalAlign: verticalAlign,
    alignItems: alignItems,
  }

  return (
    <GridBox {...styles} onClick={_onClick}>
      {children}
    </GridBox>
  )
}

Grid.defaultProps = {
  position: false,
  children: null,
  flex: false,
  width: '100%',
  height: '100%',
  maxWidth: '',
  padding: false,
  margin: false,
  align: false,
  bg: '#FFF',
  overflowY: false,
  verticalAlign: false,
  textAlign: false,
  alignItems: false,
  _onClick: () => {},
}

const GridBox = styled.div`
  position: ${(props) => (props.position ? `${props.position}` : '')};
  width: ${(props) => props.width};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth};` : '')};
  height: ${(props) => (props.height ? `${props.height};` : '')};
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? `${props.padding}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  display: ${(props) => (props.flex ? `${props.flex}` : '')};
  text-align: ${(props) => (props.align ? `${props.align};` : '')};
  background-color: ${(props) => (props.bg ? `${props.bg};` : '')};

  overflow-y: ${(props) => props.overflowY};
  vertical-align: ${(props) => (props.verticalAlign ? `${props.verticalAlign};` : '')};
  align-items: ${(props) => (props.alignItems ? `${props.alignItems};` : '')}; ;
`

export default Grid
