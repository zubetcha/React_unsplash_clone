import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Text } from '../elements';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position:"relative",
    flexGrow: 0.6,
    width: '95%',
  },
}));

export default function ScrollableTabsButtonAuto() {
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
          <Tab label="Holidays" {...a11yProps(0)} />
          <Tab label="Blockchain" {...a11yProps(1)} />
          <Tab label="Wallpapaers" {...a11yProps(2)} />
          <Tab label="3D Renders" {...a11yProps(3)} />
          <Tab label="Textures & Patterns" {...a11yProps(4)} />
          <Tab label="Architecture" {...a11yProps(5)} />
          <Tab label="Experimental" {...a11yProps(6)} />
          <Tab label="Nature" {...a11yProps(7)} />
          <Tab label="Business & Work" {...a11yProps(8)} />
          <Tab label="Fashion" {...a11yProps(9)} />
          <Tab label="Food & Drink" {...a11yProps(10)} />
          <Tab label="Health & Wellness" {...a11yProps(11)} />
          <Tab label="Current Events" {...a11yProps(12)} />
          <Tab label="People" {...a11yProps(13)} />
          <Tab label="Interiors" {...a11yProps(14)} />
        </Tabs>
      
    </div>
  );
}