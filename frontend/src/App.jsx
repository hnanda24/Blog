import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from react;
import "./App.css";
import BlogFooter from "./Components/BlogFooter";
import BlogNavbar from "./Components/BlogNavbar";
import BlogSection from "./Components/BlogSsection";
// import CreateBlog from "./Components/CreateBlog";
import Login from "./Components/Login";
import Register from "./Components/Register";
import React from 'react'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<> 
            <BlogNavbar/>
            <BlogSection />
            <BlogFooter/> 
          </>} />
          {/* <Route path="/create" element={<CreateBlog />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;