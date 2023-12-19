import "./home.css";
import Header from '../../components/header/header'
import SearchAndAdd from "../../components/SearchAndAdd/SearchAndAdd";
import ChildrenList from "../../components/ChildrenList/ChildrenList";
import React from "react";

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