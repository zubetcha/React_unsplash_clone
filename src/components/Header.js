import React from "react";
import {Grid ,Text, Button, Image, Input} from "../elements";
import SearchIcon from '@material-ui/icons/Search';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import Scroll from "../components/Scroll"

const Header = (props) => {

    return (
        <>
        <Grid height="62px" flex="flex; justify-content:space-around;align-items:center">
            <Grid width="50px">
                <Image shape="logo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"></Image>
            </Grid>
            <Grid flex="flex; align-items:center" width="auto">
                <Button height="40px" width="50px" borderRadius="20px 0px 0px 20px" bg="#eee" color="#767676" text={<SearchIcon/>}></Button>
                <Input search_box placeholder="Search free high-resolution photos" width="1000px"></Input>
                <Button height="40px" width="50px" borderRadius="0px 20px 20px 0px" bg="#eee" color="#767676" text={<CenterFocusWeakIcon/>}></Button>
            </Grid>
            <Grid flex="flex; align-items:center; justify-content:space-between"  width="230px">
                <Text>Explore</Text>
                <Text>Advertise</Text>
                <Text>Blog</Text>
            </Grid>
            <Grid width="1px" bg="#d1d1d1" height="32px"/>
            <Grid width="auto">
                <Text>Login</Text>
            </Grid>
            <Button text="Submit a photo" width="130px" bg="#fff" color="black" border="1px solid black" height="32px"></Button>
            
            <Image shape="circle" size="40px" src="https://image.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"></Image> 
        </Grid>
        <Grid padding="0px 0px 0px 10px" height="55px" flex="flex; align-items:center; justify-content:space-around">
            <Text>Editorial</Text>
            <Scroll/>
            {/* <Text>Holidays</Text>
            <Text>Blockchain</Text>
            <Text>Wallpapaers</Text>
            <Text>3D Renders</Text>
            <Text>Textures & Patterns</Text>
            <Text>Architecture</Text>
            <Text>Experimental</Text>
            <Text>Nature</Text>
            <Text>Business & Work</Text>
            <Text>Fashion</Text>
            <Text>Food & Drink</Text>
            <Text>Health & Wellness</Text>
            <Text>Current Events</Text> */}
        </Grid>

        </>
    );
};

export default Header;