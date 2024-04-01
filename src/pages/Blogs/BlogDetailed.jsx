import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDetailedPost, getBlogs } from "../../api/getBlogs";
import { slugify } from "../../utils/helper";
import ShareComponent from "../../components/ShareComponent";
import MetaTags from "../../components/MetaTags";

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

  if (loading || !postsData) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="blog-detailed">
      <MetaTags
        title={postsData.title}
        description={postsData.description || ""}
        ogUrl={window.location.href}
        ogType="website"
        ogImage={postsData.imageUrl || ""}
        twitterCard="summary_large_image"
        twitterDomain={window.location.hostname}
        twitterUrl={window.location.href}
        twitterImage={postsData.imageUrl || ""}
      />
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
        />
      </div>
    </div>
  );
};

export default BlogDetailed;
