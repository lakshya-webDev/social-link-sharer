import React from 'react';
import ShareComponent from '../ShareComponent';
const Card = ({ data }) => {
  return (
    <div className="card">
      <h2 className="tittle">{data.title}</h2>
      <p>{data.body}</p>
      <div className="card-footer">
        <h4>Share on:</h4>
        <ShareComponent
          url={window.location.href}
          title={data.title}
          description={data.body}
          imageUrl="https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=1024x1024&w=is&k=20&c=ZKAEiIpjE9z6pmpZFVvnG_ymfsrZD7wFVPoB0LpLDYA="
        />
      </div>
    </div>
  );
};
export default Card;
