import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../pages/Login'
import Join from '../pages/Join'
// import Detail from '../pages/Detail'
import Edit from '../pages/Edit'
import Main from '../pages/Main'
import Sub from '../pages/Sub'
import Upload from '../pages/Upload'
import Mypage from '../pages/Mypage'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/configureStore'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Route path="/" exact component={Main} />
        <Route path="/sub/:tag" exact component={Sub} />
        <Route path="/login" exact component={Login} />
        <Route path="/join" exact component={Join} />
        {/* <Route path="/detail" exact component={Detail} /> */}
        <Route path="/edit" exact component={Edit} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/mypage/:nickname" exact component={Mypage} />
      </ConnectedRouter>
    </>
  )
}

export default App
