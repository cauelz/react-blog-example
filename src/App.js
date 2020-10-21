import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Banner />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
