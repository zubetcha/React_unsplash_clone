import React from "react";
import Header from "../components/Header";
import {Grid, Image, Text, Input,Button} from "../elements";
import Masonry from "../components/Masonry";


const Sub = (props) => {


    return (
        <>
        <Header></Header>
        <Grid margin="117px 0px 0px 0px" position="relative">
            <Grid flex="flex; align-items:center" margin="0px auto" height="400px" width="1175px" position="relative">
                <Grid padding="0px 150px 0px 0px">
                    <Text size="45px" color="#e" bold>Holidays</Text>
                    <Text size="18px" color="#e">Stay connected this holiday season. Show us how you are spending your holidays,
                     and the role tech plays on your favorite traditions. Submit images of your family movie night watching Christmas classics,
                      online Hanukkah gift shopping from the couch, to sharing Kwanzaa dinner over video chat with friends.<br/>
                      Curated by Surface. Learn more about this topic takeover here.</Text>
                </Grid>
                <Grid width="700px" >
                    <div style={{border:"1px solid lightgray", padding:"20px", marginBottom:"20px"}}>
                        <dl style={{display:"flex", justifyContent:"space-between"}}>
                            <dt >
                                Status
                            </dt>
                            <dd >
                                <div>
                                    Open
                                </div>
                            </dd>
                        </dl>
                        <hr/>
                        <dl style={{display:"flex", justifyContent:"space-between"}}>
                            <dt >
                                Curator
                            </dt>
                            <dd >
                                <div>
                                   Window
                                </div>
                            </dd>
                        </dl>
                        <hr/>
                        <dl style={{display:"flex", justifyContent:"space-between"}}>
                            <dt >
                                Contributions
                            </dt>
                            <dd >
                                <div>
                                    289
                                </div>
                            </dd>
                        </dl>
                        <hr/>
                        <dl style={{display:"flex", justifyContent:"space-between"}}>
                            <dt >
                                Top contributors
                            </dt>
                            <dd >
                                <div>
                                    jun
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <Button margin="10px 0px 0px 0px" height="40px" text="Submit to Holidays"></Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid>
        <Masonry></Masonry>
        </Grid>
        
            
        
        
        </>
    );
};

export default Sub;
