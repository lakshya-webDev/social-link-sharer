import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDetailedPost, getBlogs } from "../../api/getBlogs";
import { slugify } from "../../utils/helper";
import ShareComponent from "../../components/ShareComponent";
import { Helmet } from "react-helmet";

const BlogDetailed = () => {
  const location = useLocation();
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getBlogs();
        const pathSegments = location.pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        const title = slugify(lastSegment);
        const foundPost = response.find(
          (post) => slugify(post.title) === title
        );
        if (foundPost) {
          const response2 = await fetchDetailedPost(foundPost.id);
          const additionalInfo = {
            imageUrl: `https://picsum.photos/300/300`,
            url: window.location.href,
          };
          const mergedResponse = { ...response2, ...additionalInfo };
          setPostsData(mergedResponse);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.pathname]);

  const handleShareClick = (sharingData) => {
    setPostsData(sharingData);
    updateMetaTags(sharingData); // Call a function to update meta tags
  };

  const updateMetaTags = (data) => {
    const { title, description, imageUrl } = data;
    // Update meta tags using Helmet
    const helmet = (
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description || ""} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description || ""} />
        <meta property="og:image" content={imageUrl || ""} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={window.location.hostname} />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description || ""} />
        <meta property="twitter:image" content={imageUrl || ""} />
        {/* Add other meta tags as needed */}
      </Helmet>
    );

    // Render the Helmet component to update meta tags
    return helmet;
  };

  if (loading || !postsData) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="blog-detailed">
      {/* Render updated meta tags */}
      {updateMetaTags(postsData)}
      <div className="header-image">
        <img src={postsData.imageUrl} alt={postsData.title} />
      </div>
      <div className="blog-description">
        <h2>{postsData.title}</h2>
        <p>{postsData.body}</p>
        <ShareComponent
          url={window.location.href}
          title={postsData.title}
          description={postsData.description || ""}
          imageUrl={postsData.imageUrl || ""}
          onClick={() => handleShareClick(postsData)}
        />
      </div>
    </div>
  );
};

export default BlogDetailed;
