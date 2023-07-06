import './App.css';
// import React, { Component ,  useState } from 'react'
import React, { state, useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App=() => {
  const pageSize = 8;
  const apiKey = "b72b14a218754cd88fd690ee91a5da90";
  
  const [progress,setProgress] = useState(0);

  // constructor(props) {
  //   super(props);
  //   NewsElement = React.createRef();
  //   this.NevData = React.createRef();
  //   this.state = {
  //     mode: 'light',
  //   };
  // }

  
    // const toggleMode = () => {
    //   const [newsElement,setNewsElement] = toggleMode(current);
    //   // const newsElement = NewsElement.current;
    //   // const navElement = NevData.current;
    //   const [navElement,setNavElement] = toggleMode(current);
    //   if (this.state.mode === 'light') {
    //     document.body.style.background = 'blue';
    //     this.state.mode = 'dark'
    //     // this.setState.mode= 'dark'
    //   }
    //   else {
    //     document.body.style.background = 'white';
    //     this.state.mode = 'light'
    //   }
    //   newsElement.changeMode(this.state.mode);
    //   navElement.changeMode(this.state.mode);
    // }
    return (
      <>
        <div>
          <Router>
            <NavBar/>
            <LoadingBar color="red" height={4} progress={progress}/>
            <Routes>

              <Route exact path="/" element={<News setProgress = {setProgress} apiKey ={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
              <Route exact path="/business" element={<News setProgress = {setProgress} apiKey ={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey ={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
              <Route exact path="/general" element={<News setProgress = {setProgress} apiKey ={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
              <Route exact path="/health" element={<News setProgress = {setProgress} apiKey ={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
              <Route exact path="/science" element={<News setProgress = {setProgress} apiKey ={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
              <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey ={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey ={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />

            </Routes>
          </Router>
        </div>


      </>
    )
}

export default App;