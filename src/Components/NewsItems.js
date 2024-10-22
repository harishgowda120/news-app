import React from 'react'

const NewsItems =(props)=>{
 
    let {title,description,imgUrl,NewsUrl}=props;
    return (
      <div>
        <div className="card my-3 shadow-sm hover-effect">
          <img src={!imgUrl?"https://www.statnews.com/wp-content/uploads/2024/10/photo-illo-cardio1-1024x576.jpg":imgUrl} alt="..." height={200}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={NewsUrl} className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }


export default NewsItems