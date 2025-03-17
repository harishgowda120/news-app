import React from 'react';

const NewsItems = (props) => {
  let { title, description, imgUrl, NewsUrl } = props;

  return (
    <div>
      {/* Inline CSS for Hover Effects */}
      <style>
        {`
          .btn-custom {
            background-color: #009688 !important; /* Teal */
            border: none;
            color: white;
            transition: background-color 0.3s ease-in-out, transform 0.2s;
          }

          .btn-custom:hover {
            background-color: #00796B !important; /* Darker Green */
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="card my-3 shadow-sm hover-effect" style={{ backgroundColor: "#f4f9ff", borderRadius: "10px" }}>
        <img
          src={!imgUrl ? "https://www.statnews.com/wp-content/uploads/2024/10/photo-illo-cardio1-1024x576.jpg" : imgUrl}
          alt="News Thumbnail"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-dark">{title}</h5>
          <p className="card-text text-secondary">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a href={NewsUrl} className="btn btn-custom">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
