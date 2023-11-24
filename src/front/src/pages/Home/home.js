import "./home.css";
import Header from '../../components/Header/header'
import SearchAndAdd from "../../components/SearchAndAdd/SearchAndAdd";
import ChildrenList from "../../components/ChildrenList/ChildrenList";

function Home() {
  return (
    <div className="App">
      <Header/>
      <SearchAndAdd/>
      <ChildrenList/>
    </div>
  );
}

export default Home;