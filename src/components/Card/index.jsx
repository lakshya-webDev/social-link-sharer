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

  return (
    <React.Fragment>
      <Helmet>
        <title>{sharingData?.title}</title>
        <meta name="title" content={sharingData?.title} />
        <meta name="description" content={sharingData?.body} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={sharingData?.title} />
        <meta property="og:description" content={sharingData?.body} />
        <meta property="og:image" content={sharingData?.imageUrl} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={sharingData?.title} />
        <meta name="twitter:description" content={sharingData?.body} />
        <meta name="twitter:image" content={sharingData?.imageUrl} />
        {/* Add other necessary Twitter meta tags as needed */}
      </Helmet>

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
