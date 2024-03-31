import React from 'react';
import ShareComponent from '../ShareComponent';
import { Helmet } from 'react-helmet';
const Card = ({ data }) => {
    return (
        <div className="card">
            <Helmet>
                <title>{data.title}</title>
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.body} />
                <meta property="og:image" content={data.imageUrl} />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <img src={data.imageUrl} alt={data.title} />
            <div className='card-body'>
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
        </div>
    );
};
export default Card;
