import React from "react";
import { Helmet } from "react-helmet";
import ShareComponent from "../ShareComponent";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/helper";
const Card = ({ data }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.body} />
        <meta property="og:image" content={data.imageUrl} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <div className="card">
        <Link to={`blog/${slugify(data.title)}`}>
          <div className="card-image-wrapper">
            <img src={data.imageUrl} alt={data.title} />
          </div>
          <div className="card-body">
            <h2 className="tittle">{data.title}</h2>
            <p>{data.body}</p>
            <div className="card-footer">
              <h4>Share on:</h4>
              <ShareComponent
                url={window.location.href}
                title={data.title}
                description={data.body}
                imageUrl={data.imageUrl}
              />
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Card;
