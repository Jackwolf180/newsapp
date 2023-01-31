import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state={q:""};
  pageSize = 12;
  apiKey = process.env.REACT_APP_APIKEY;
  
  render() {
    return (
      <>
        <Router>
          <NavBar setState={this.state}/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
              // {console.log(...q)}
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  q={this.state.q} apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
