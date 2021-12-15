import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {history} from "../redux/configureStore";


const Scrollone = (props) => {
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
          <Tab label="Details" />
          <Tab label="Tags" />
          <Tab label="Exif"/>
        </Tabs>
    </div>
  );
};

export default Scrollone;

