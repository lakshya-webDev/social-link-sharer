import React from "react";
import ShareComponent from "../ShareComponent";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/helper";
import { Helmet } from "react-helmet";

const Card = ({ data }) => {
  const shareUrl = `${window.location.origin}/blog/${slugify(data.title)}`;

  return (
    <React.Fragment>
      <Helmet>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.body} />
        <meta property="og:image" content={data.imageUrl} />
        <meta property="og:url" content={shareUrl} />
        {/* <!-- Primary Meta Tags --> */}
        <title>{data.title}</title>
        <meta name="title" content={data.title} />
        <meta name="description" content={data.body} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.body} />
        <meta property="og:image" content={data.imageUrl} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={data.body} />
        <meta property="twitter:image" content={data.imageUrl} />
      </Helmet>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <div className="card-body">
          <h2 className="tittle">{data.title}</h2>
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
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
