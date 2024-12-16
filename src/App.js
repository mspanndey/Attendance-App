import { Outlet, BrowserRouter as Router } from "react-router-dom";
import BottomBar from "./component/bottomBar.js";
import Header from "./component/header";
import Homepage from "./screens/homepage.jsx";

function App() {
  return (
    <>
      <Outlet />
      <BottomBar></BottomBar>
    </>
  );
}

export default App;
