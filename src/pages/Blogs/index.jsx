import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getBlogs } from "../../api/getBlogs";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBlogs()
      .then((response) => {
        setLoading(true);
        const additionalInfo = {
          imageUrl: `https://picsum.photos/400/300`,
          url: window.location.href,
        };
        const mergedResponse = response.map((item) => {
          return { ...item, ...additionalInfo };
        });
        setBlogsData(mergedResponse);
      })
      .catch((err) => {
        console.log("Error fetching blogs:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <React.Fragment>
      <h1>Our Blogs</h1>

      <div className="blogs-listing">
        {blogsData &&
          blogsData.length > 0 &&
          blogsData.map((val, i) => <Card data={val} key={i} />)}
      </div>
    </React.Fragment>
  );
};

export default Blogs;
