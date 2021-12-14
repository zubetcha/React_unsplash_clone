import React from "react";
import {Grid ,Text, Button, Image, Input} from "../elements";
import SearchIcon from '@material-ui/icons/Search';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import Scroll from "../components/Scroll"
import Scrollone from "../components/Scrollone"
import styled from "styled-components";

const Header = (props) => {

    return (
    <Head>
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
        <Grid height="55px" flex="flex; align-items:center; justify-content:space-around">
            <Scrollone/>
            <Grid width="1px" bg="#d1d1d1" height="32px"/>
            <Scroll/>
        </Grid>
    </Head>
    );
};

const Head = styled.div`
    /* position: fixed;
    top: 0; */
    
`;
export default Header;