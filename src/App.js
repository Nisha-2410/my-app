
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  pageSize=10;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
         <Router>
         <LoadingBar
         height={3}
        color="#f11946"
        progress={this.state.progress}
        
      />
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="business" country="us" category="business" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science" country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports"  country="us" category="sports" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general"  country="us" category="general" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country="us" category="technology" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize}key="health"  country="us" category="health" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize}key="entertainment"  country="us" category="entertainment" />} />
            <Route exact path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
         </div>
    )
  }
}



