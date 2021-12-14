import React from "react";
import styled from "styled-components";

const Masonry = (props) => {
    const {columnCount, padding} = props;
    const styles ={
        columns:columnCount, padding:padding
    }
    const imageUrls = [
        "https://picsum.photos/200/300?image=279",
        "https://picsum.photos/200/600?image=117",
        "https://picsum.photos/300/300?image=999",
        "https://picsum.photos/200/200?image=1000",
        "https://picsum.photos/200/240?image=1011",
        "https://picsum.photos/200/370?image=1022",
        "https://picsum.photos/200/370?image=1022",
        "https://picsum.photos/200/370?image=1022",
        "https://picsum.photos/200/370?image=1022",
        "https://picsum.photos/200/370?image=1022",
        
    ]
    
    return (
        <Mason {...styles}>
            {imageUrls.map((img,i) =>
            <img src={img} key={i} padding="2px"></img>
            )}
            
        </Mason>
    );
};
Masonry.defaultProps = {
    columns: false,
    padding: false,
};

const Mason = styled.div`
    columns: ${(props) => props.columnCount};
    padding: ${(props) => props.padding};
`;
export default Masonry;