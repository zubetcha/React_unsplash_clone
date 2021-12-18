import React from 'react'
import Header from '../components/Header'
import SubTitle from '../components/SubTitle'
import { Grid, Image, Text, Input, Button } from '../elements'
import MasonSub from '../components/MasonSub'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as cardActions } from '../redux/modules/card'

const Sub = (props) => {
  const param = props.match.params.tag
  const search_list = useSelector((state) => state.card.search_list)
  console.log(search_list)

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (search_list.photoboards == null) {
      dispatch(cardActions.searchCardDB(param))
    }
  }, [])

  return (
    <>
      <Header></Header>
      <Grid margin="117px 0px 0px 0px" position="relative">
        <Grid flex="flex; align-items:center" margin="0px auto" height="400px" width="1175px" position="relative">
          <SubTitle name={param}></SubTitle>
          <Grid width="700px">
            <div style={{ border: '1px solid lightgray', padding: '20px', marginBottom: '20px' }}>
              <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                <dt>Status</dt>
                <dd>
                  <div>Open</div>
                </dd>
              </dl>
              <hr />
              <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                <dt>Curator</dt>
                <dd>
                  <div>Window</div>
                </dd>
              </dl>
              <hr />
              <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                <dt>Contributions</dt>
                <dd>
                  <div>289</div>
                </dd>
              </dl>
              <hr />
              <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                <dt>Top contributors</dt>
                <dd>
                  <div>jun</div>
                </dd>
              </dl>
            </div>
            <Button margin="10px 0px 0px 0px" height="40px" text={`Submit to ${param}`}></Button>
          </Grid>
        </Grid>
        <Grid>
          <MasonSub param={param}></MasonSub>
        </Grid>
      </Grid>
    </>
  )
}

export default Sub
