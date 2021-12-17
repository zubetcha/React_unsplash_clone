import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const Masonry = (props) => {
    const search_list = useSelector((state)=>state.card.search_list.photoboards)
    console.log(search_list)
    return (
        <div style={styles.card_container}>
            {search_list?search_list.map((c,idx) => {
                return  <Card key={c.boardId} src={c.img} size={c.size}></Card>
            }):<></>}
        </div>
    );

};

const styles = {
    card_container: {
    margin: "30px 0px 0px 0px",
    padding: 0,
    width: '80vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 400px)',
    gridAutoRows: '10px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
    backgroundColor: 'white',

    }
   };

export default Masonry;