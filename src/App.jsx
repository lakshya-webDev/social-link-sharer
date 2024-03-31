import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import BlogDetailed from "./pages/Blogs/BlogDetailed";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<h2 className="text-center">Loading...</h2>}>
        <Router>
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetailed />} />
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
