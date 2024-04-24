import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Footer from "./containers/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
