import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {history} from "../redux/configureStore";


const Scroll = (props) => {
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
          <Tab onClick={()=>{history.push(`/sub/${'Holidays'}`)}} label="Holidays"/>
          <Tab onClick={()=>{history.push(`/sub/${'Blockchain'}`)}} label="Blockchain"  />
          <Tab onClick={()=>{history.push(`/sub/${'Wallpapers'}`)}} label="Wallpapers"  />
          <Tab onClick={()=>{history.push(`/sub/${'3DRenders'}`)}} label="3D Renders" />
          <Tab onClick={()=>{history.push(`/sub/${'Textures&Patterns'}`)}} label="Textures & Patterns"  />
          <Tab onClick={()=>{history.push(`/sub/${'Architecture'}`)}} label="Architecture"  />
          <Tab onClick={()=>{history.push(`/sub/${'Experimental'}`)}} label="Experimental"  />
          <Tab onClick={()=>{history.push(`/sub/${'Nature'}`)}} label="Nature"  />
          <Tab onClick={()=>{history.push(`/sub/${'Business&Work'}`)}} label="Business & Work"  />
          <Tab onClick={()=>{history.push(`/sub/${'Fashion'}`)}} label="Fashion"  />
          <Tab onClick={()=>{history.push(`/sub/${'Food&Drink'}`)}} label="Food & Drink"  />
          <Tab onClick={()=>{history.push(`/sub/${'Health&Wellness'}`)}} label="Health & Wellness"  />
          <Tab onClick={()=>{history.push(`/sub/${'CurrentEvents'}`)}} label="Current Events" />
          <Tab onClick={()=>{history.push(`/sub/${'People'}`)}} label="People" />
          <Tab onClick={()=>{history.push(`/sub/${'Interiors'}`)}} label="Interiors" />
        </Tabs>
    </div>
  );
};

export default Scroll;