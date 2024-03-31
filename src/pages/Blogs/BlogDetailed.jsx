import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDetailedPost, getBlogs } from "../../api/getBlogs";
import { slugify } from "../../utils/helper";
import ShareComponent from "../../components/ShareComponent";
import { Helmet } from "react-helmet";

const BlogDetailed = () => {
  const location = useLocation();
  let title = "";
  if (location) {
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    title = slugify(lastSegment);
  }
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getBlogs();
        const foundPost = response.find(
          (post) => slugify(post.title) === title
        );
        const response2 = await fetchDetailedPost(foundPost.id);
        const additionalInfo = {
          imageUrl: `/blogImage.png`,
          url: window.location.href,
        };
        const mergedResponse = {
          ...response2,
          ...additionalInfo,
        };
        setPostsData(mergedResponse);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  if (loading) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="blog-detailed">
      <Helmet>
        <title>{postsData?.title}</title>
        <meta property="og:title" content={postsData?.title} />
        <meta property="og:description" content={postsData?.body} />
        <meta property="og:image" content={postsData?.imageUrl} />
        <meta property="og:url" content={window.location.href} />
        {/* <!-- Primary Meta Tags --> */}
        <title>{postsData?.title}</title>
        <meta name="title" content={postsData?.title} />
        <meta name="description" content={postsData?.body} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={postsData?.title} />
        <meta property="og:description" content={postsData?.body} />
        <meta property="og:image" content={postsData?.imageUrl} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={postsData?.title} />
        <meta property="twitter:description" content={postsData?.body} />
        <meta property="twitter:image" content={postsData?.imageUrl} />
      </Helmet>
      <div className="header-image">
        <img src={postsData?.imageUrl} alt={postsData?.title} />
      </div>
      <div className="blog-description">
        <h2>{postsData?.title}</h2>
        <p>{postsData?.body}</p>
        <ShareComponent
          url={window.location.href}
          title={postsData?.title}
          description={postsData?.body}
          imageUrl={postsData?.imageUrl}
        />
      </div>
    </div>
  );
};

export default BlogDetailed;
