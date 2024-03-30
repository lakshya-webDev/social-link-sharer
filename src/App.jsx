import React, { useEffect, useState } from 'react';
import { getBlogs } from './api/getBlogs';
import Card from './components/Card';

function App() {
  const [blogsData, setBlogsData] = useState(null);

  useEffect(() => {
    getBlogs()
      .then((response) => {
        console.log('API Response:', response);
        setBlogsData(response);
      })
      .catch((err) => {
        console.log('Error fetching blogs:', err);
      });
  }, []);

  return (
    <React.Fragment>
      <h3>Different Forms</h3>
      <div className="blogs-listing">
        {blogsData &&
          blogsData.length > 0 && // Corrected the condition
          blogsData.map((val, i) => <Card data={val} key={i} />)}
      </div>
    
    </React.Fragment>
  );
}

export default App;
