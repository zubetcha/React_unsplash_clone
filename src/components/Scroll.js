import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {history} from "../redux/configureStore";
import { useDispatch } from 'react-redux';
import { actionCreators as cardActions } from '../redux/modules/card';


const Scroll = (props) => {
  const dispatch = useDispatch()
  const useStyles = makeStyles((theme) => ({
    root: {
      position:"relative",
      flexGrow: 0.6,
      width: '90%',
    },
  }));
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Holidays'))
            history.push(`/sub/${'Holidays'}`)}} label="Holidays"/>
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Blockchain'))
            history.push(`/sub/${'Blockchain'}`)}} label="Blockchain"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Wallpapers'))
            history.push(`/sub/${'Wallpapers'}`)}} label="Wallpapers"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('3DRenders'))
            history.push(`/sub/${'3DRenders'}`)}} label="3D Renders" />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Textures&Patterns'))
            history.push(`/sub/${'Textures&Patterns'}`)}} label="Textures & Patterns"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Architecture'))
            history.push(`/sub/${'Architecture'}`)}} label="Architecture"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Experimental'))
            history.push(`/sub/${'Experimental'}`)}} label="Experimental"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Nature'))
            history.push(`/sub/${'Nature'}`)}} label="Nature"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Business&Work'))
            history.push(`/sub/${'Business&Work'}`)}} label="Business & Work"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Fashion'))
            history.push(`/sub/${'Fashion'}`)}} label="Fashion"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Food&Drink'))
            history.push(`/sub/${'Food&Drink'}`)}} label="Food & Drink"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Health&Wellness'))
            history.push(`/sub/${'Health&Wellness'}`)}} label="Health & Wellness"  />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('CurrentEvents'))
            history.push(`/sub/${'CurrentEvents'}`)}} label="Current Events" />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('People'))
            history.push(`/sub/${'People'}`)}} label="People" />
          <Tab onClick={()=>{
            dispatch(cardActions.searchCardDB('Interiors'))
            history.push(`/sub/${'Interiors'}`)}} label="Interiors" />
        </Tabs>
    </div>
  );
};

export default Scroll;