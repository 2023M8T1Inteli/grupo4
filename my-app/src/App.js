import "./App.css";
import Navbar from "./Navbar/Navbar";
import SearchAndAdd from "./SearchAndAdd/SearchAndAdd";
import ChildrenList from "./ChildrenList/ChildrenList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchAndAdd/>
      <ChildrenList/>
    </div>
  );
}

export default App;