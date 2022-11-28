import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { SideBar } from "./components/sideBar/component.sideBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <SideBar />
        </div>
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
