import React, { useEffect, useState } from 'react';
import { getBlogs } from './api/getBlogs';
import Card from './components/Card';

function App() {
  const [blogsData, setBlogsData] = useState(null);

  useEffect(() => {
    getBlogs()
      .then((response) => {
        const additionalInfo = {
          imageUrl: 'https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=1024x1024&w=is&k=20&c=ZKAEiIpjE9z6pmpZFVvnG_ymfsrZD7wFVPoB0LpLDYA=',
          url: window.location.href
      };
      const mergedResponse = response.map(item => {
        return { ...item, ...additionalInfo };
    });
        setBlogsData(mergedResponse);
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
