import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ShareComponent from "../ShareComponent";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/helper";

const Card = ({ data }) => {
  const shareUrl = `${window.location.origin}/blog/${slugify(data.title)}`;
  const [sharingData, setSharingData] = useState(null);

  const handleShareClick = (sharingData) => {
    console.log(sharingData, "sharingData");
    setSharingData(sharingData);
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
    return helmet;
  };
  return (
    <React.Fragment>
      {sharingData && updateMetaTags(sharingData)}

      <div className="card">
        <div className="card-image-wrapper">
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <div className="card-body">
          <h2 className="title">{data.title}</h2>
          <p>{data.body}</p>
          <Link to={`blog/${slugify(data.title)}`} className="read-more">
            Read More..
          </Link>
          <div className="card-footer">
            <h3>Share on:</h3>
            <ShareComponent
              url={shareUrl}
              title={data.title}
              description={data.body}
              imageUrl={data.imageUrl}
              onClick={() => handleShareClick(data)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
