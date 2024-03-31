import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getBlogs } from "../../api/getBlogs";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState(null);
  console.log(window.location.href);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBlogs()
      .then((response) => {
        setLoading(true);
        const additionalInfo = {
          imageUrl: `${window.location.href}blogImage.png`,
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
      <Helmet>
        <title>Demo | Our Blogs</title>
        <meta property="og:title" content="Blogs" />
        <meta
          property="og:description"
          content="Check out our latest blog posts."
        />
        <meta
          property="og:image"
          content={`${window.location.href} blogImage.png`}
        />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
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
