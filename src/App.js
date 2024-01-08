import "./App.scss";

//importing components
import Header from "./components/Header";
import RecipeLists from "./components/RecipeLists";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists />
    </div>
  );
}

export default App;
