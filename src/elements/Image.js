import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const {shape, src} = props;

    const styles = {
        src: src,
    }
    
    if(shape === "small"){
        return (
            <ImageSmall {...styles}></ImageSmall>
        );
    };

    if(shape === "medium"){
        return (
            <ImageMedium {...styles}></ImageMedium>
        );
    };

    if(shape === "big"){
        return (
            <ImageBig {...styles}></ImageBig>
        );
    };

    if(shape === "full"){
        return (
            <ImageFull {...styles}></ImageFull>
        );
    };
    if(shape === "logo"){
        return (
            <ImageLogo {...styles}></ImageLogo>
        );
    };
};

Image.defaultProps = {
    shape: "medium",
    src: "https://github.com/Leejunmyung/image/blob/master/unsplash_logo.png?raw=true",
    width: "100%",
    height: "170px",
};

const ImageSmall = styled.div`
    width: 32px;
    height: 32px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position:center;
`
const ImageMedium = styled.div`
    width: 400px;
    height: 600px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position:center;
`
const ImageBig = styled.div`
    width: 530px;
    height: 800px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const ImageFull = styled.div`
    width: 100%;
    height:480px; 
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position:center;
`
const ImageLogo = styled.div`
    width: 60px;
    height: 60px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin:10px 0; 
`



export default Image;