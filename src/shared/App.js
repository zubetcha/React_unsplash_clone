import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Main from "../pages/Main";
import Upload from "../pages/Upload";

function App() {
  return (
    <>
    <Header></Header>
    <Route path="/" exact  component={Main}/>
    <Route path="/login" exact component={Login} />
    <Route path="/Join" exact component={Join} />
    <Route path="/detail" exact component={Detail} />
    <Route path="/Edit" exact component={Edit} />
    <Route path="/Upload" exact component={Upload} />
    </>
  );
}

export default App;
