import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Main from "../pages/Main";
import Sub from "../pages/Sub";
import Upload from "../pages/Upload";

function App() {
  return (
    <>
    <Route path="/" exact  component={Main}/>
    <Route path="/sub/:tag" exact  component={Sub}/>
    <Route path="/login" exact component={Login} />
    <Route path="/Join" exact component={Join} />
    <Route path="/detail" exact component={Detail} />
    <Route path="/Edit" exact component={Edit} />
    <Route path="/Upload" exact component={Upload} />
    </>
  )
}

export default App
