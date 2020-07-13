import React from "react";
import MouseParticles from "react-mouse-particles";
import { BrowserRouter, Route } from "react-router-dom";
import In from "./component/In.jsx";
import Up from "./component/Up.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={In}></Route>
        <Route path="/up" component={Up}></Route>
      </div>
      <MouseParticles
        num={6}
        life={1}
        g={1}
        color="#38d39f"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      />
    </BrowserRouter>
  );
}

export default App;
