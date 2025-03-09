import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from react;
import "./App.css";
import BlogFooter from "./Components/BlogFooter";
import BlogNavbar from "./Components/BlogNavbar";
import BlogSection from "./Components/BlogSsection";
import CreateBlog from "./Components/CreateBlog";
import Login from "./Components/Login";
import Register from "./Components/Register";
import React from 'react'



function App() {

  return (
    <>
      <Router>
        <BlogNavbar/>
        <Routes>

          <Route path="/" element={<> 
              <BlogSection />
            </>} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/login" element = {<Login/>} />
          <Route path='/register' element = {<Register/>} />
          
        </Routes>
        <BlogFooter/>
      </Router>
    </>
  );
}

export default App;