import React from "react";
import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <hr />
        <footer>
          <h7>
            <a href="https://github.com/jielianglin/weatherapp_reactjs">
              Open-source code
            </a>{" "}
            by Jie Liang Lin
          </h7>
        </footer>
      </div>
    </div>
  );
}
