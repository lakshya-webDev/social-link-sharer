import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getBlogs } from "../../api/getBlogs";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState(null);

  useEffect(() => {
    getBlogs()
      .then((response) => {
        const additionalInfo = {
          imageUrl:
            "https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=1024x1024&w=is&k=20&c=ZKAEiIpjE9z6pmpZFVvnG_ymfsrZD7wFVPoB0LpLDYA=",
          url: window.location.href,
        };
        const mergedResponse = response.map((item) => {
          return { ...item, ...additionalInfo };
        });
        setBlogsData(mergedResponse);
      })
      .catch((err) => {
        console.log("Error fetching blogs:", err);
      });
  }, []);
  return (
    <div className="blogs-listing">
      <Helmet>
        <title>Demo | Our Blogs</title>
        <meta property="og:title" content="Blogs" />
        <meta
          property="og:description"
          content="Check out our latest blog posts."
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      {blogsData &&
        blogsData.length > 0 &&
        blogsData.map((val, i) => <Card data={val} key={i} />)}
    </div>
  );
};

export default Blogs;
