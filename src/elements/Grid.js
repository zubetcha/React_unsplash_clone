import React from "react";
import styled from "styled-components";

const Grid = (props) => {

    const {position, children, flex, align, width, padding, margin, _onClick} =props;
    const styles = {
        flex:flex,
        position: position,
        width:width,
        padding: padding,
        margin: margin,
        align:align,

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
    padding:false,
    margin:false,
    align:false,
    _onClick:()=>{}
}

const GridBox = styled.div`
    position: ${(props) => props.position ? `${props.position}`: ""};
    width: ${(props) => props.width};
    height:100%;
    box-sizing: border-box;
    padding:${(props)=> props.padding ? `${props.padding}`: ""};
    margin:${(props)=> props.margin ? `${props.margin}`: ""};
    display:${(props)=> props.flex ? `${props.flex}`: ""};
    text-align:${(props) => props.align};

`

export default Grid;