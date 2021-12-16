import React from 'react'
import Header from '../components/Header'
import { Grid, Image, Text, Input, Button } from '../elements'
import SearchIcon from '@material-ui/icons/Search'
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak'
import Scroll from '../components/Scroll'
import Masonry from '../components/Masonry'
import mainback from '../static/MainBackground.jpg'
import { useDispatch } from 'react-redux'
import { actionCreators as cardActions } from '../redux/modules/card'

const Main = (props) => {
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch(cardActions.getCardDB())
    }, []);

            <Grid flex="flex; align-items:center" width="auto">
              <Button height="40px" width="50px" bg="#eee" color="#767676" text={<SearchIcon />}></Button>
              <Input search_box placeholder="Search free high-resolution photos" width="700px"></Input>
              <Button height="40px" width="50px" bg="#eee" color="#767676" text={<CenterFocusWeakIcon />}></Button>
            </Grid>
            <Text color="#fff">Trending: flower, wallpapers, backgrounds, happy, love</Text>
          </Grid>
        </Grid>
        <Grid>
        <Masonry></Masonry>
      </Grid>
    </>
  )
}

export default Main
