import { useState } from "react";
import "./App.scss";

//importing components
import Header from "./components/Header";
import RecipeLists from "./components/RecipeLists";
import Tabs from "./components/Tabs";

function App() {
  const [loader, setLoader] = useState(true);
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists setLoader={setLoader} />
      {loader && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;
