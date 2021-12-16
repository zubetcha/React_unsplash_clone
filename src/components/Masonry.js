import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const Masonry = (props) => {
    const card_list = useSelector((state)=>state.card.card_list)
    console.log(card_list)
    return (
        <div style={styles.card_container}>
            {card_list.map((c,idx) => {
                return  <Card key={c.boardId} id={c.boardId} src={c.img} size={c.size}></Card>
            })}
           
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