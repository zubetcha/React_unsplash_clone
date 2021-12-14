import React from "react";
import styled from "styled-components";

const Grid = (props) => {

    const {position, children, flex, align, width, padding, margin, _onClick, bg, height} =props;
    const styles = {
        flex:flex,
        position: position,
        width:width,
        height:height,
        padding: padding,
        margin: margin,
        align:align,
        bg:bg

    }

    return (
        <GridBox {...styles} onClick={_onClick}>
            {children}
        </GridBox>
    );
};

Grid.defaultProps = {
    position:false,
    children:null,
    flex:false,
    width:"100%",
    height:false,
    padding:false,
    margin:false,
    align:false,
    bg:false,
    _onClick:()=>{}
}

const GridBox = styled.div`
    position: ${(props) => props.position ? `${props.position}`: ""};
    width: ${(props) => props.width};
    height:${(props) => props.height};
    box-sizing: border-box;
    padding:${(props)=> props.padding ? `${props.padding}`: ""};
    margin:${(props)=> props.margin ? `${props.margin}`: ""};
    display:${(props)=> props.flex ? `${props.flex}`: ""};
    text-align:${(props) => props.align};
    background:${(props) => props.bg};

`

export default Grid;