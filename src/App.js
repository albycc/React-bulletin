import { Fragment } from "react";
import Bulletinboard from "./components/BulletinBoard/BulletinBoard";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <div className="header-row">
        <h1>React Bulletin FAQ</h1>
        <img src={require('./img/logo192.png')} className="react-icon" alt=""/>
      </div>
      <Bulletinboard />
    </Fragment>
  );
}

export default App;
