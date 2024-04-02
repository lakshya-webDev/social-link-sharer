import React, { useState } from "react";
import ShareComponent from "../ShareComponent";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/helper";
import MetaTags from "../MetaTags";

const Card = ({ data }) => {
  const shareUrl = `${window.location.origin}/blog/${slugify(data.title)}`;
  const [sharingData, setSharingData] = useState(null);

  const handleShareClick = (sharingData) => {
    console.log(sharingData, "sharingData");
    setSharingData(sharingData);
  };

  return (
    <React.Fragment>
      {sharingData && (
        <MetaTags
          title={sharingData.title}
          description={sharingData.body}
          ogUrl={`${window.location.href}blog/${slugify(sharingData.title)}`}
          ogType="website"
          ogImage={sharingData.imageUrl}
        />
      )}

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
