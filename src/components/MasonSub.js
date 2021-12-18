import React from "react";
import Card from "./Card";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card"; 

const Masonry = (props) => {
    const search_list = useSelector((state)=>state.card.search_list.photoboards)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(cardActions.searchCardDB(props.param))
      }, [])
    return (
        <div style={styles.card_container}>
            {search_list?search_list.map((c,idx) => {
                return  <Card key={c.boardId} id={c.boardId} name={c.nickname} src={c.img} size={c.size}></Card>
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