import React from "react";
import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <footer>
          <h4>
            <a href="https://github.com/jielianglin/weatherapp_reactjs">
              Open-source code
            </a>{" "}
            by Jie Liang Lin
          </h4>
        </footer>
      </div>
    </div>
  );
}
