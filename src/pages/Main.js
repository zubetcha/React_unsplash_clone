import React from "react";
import Header from "../components/Header";
import {Grid, Image, Text, Input,Button} from "../elements";
import SearchIcon from '@material-ui/icons/Search';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import Scroll from "../components/Scroll"
import Masonry from "../components/Masonry";


const Main = (props) => {

    return (
        <>
        <Header></Header>
        <Grid position="relative">
            <Grid margin="0px auto" width="900px" position="relative">
                <Grid position="absolute; top:40px">
                    <Text size="45px" color="#fff" bold>Unsplash</Text>
                    <Text size="25px" color="#fff" bold>The internet's source of freely-usable images. 
                    <br/>Powered by creators everywhere.</Text>
                    
                    <Grid flex="flex; align-items:center" width="auto">
                        <Button height="40px" width="50px"  bg="#eee" color="#767676" text={<SearchIcon/>}></Button>
                        <Input search_box placeholder="Search free high-resolution photos" width="700px"></Input>
                        <Button height="40px" width="50px"  bg="#eee" color="#767676" text={<CenterFocusWeakIcon/>}></Button>
                    </Grid>
                    <Text color="#fff">Trending: flower, wallpapers, backgrounds, happy, love</Text>
                </Grid>
            </Grid>
            <Image shape="full" src="https://images.unsplash.com/photo-1637935142056-03d421b2b13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"></Image>
        </Grid>
        <Grid>
            <Masonry columnCount="2" padding="0px"></Masonry>
        </Grid>
        </>
    );
};

export default Main;