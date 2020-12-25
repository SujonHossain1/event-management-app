import React from 'react';
import { Link } from 'react-router-dom';
import commentImg from '../../assets/images/icons/comment.png';
const BlogItem = ({ blog }) => {
    const { title, image, by, date, description, _id } = blog;

    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 pb-5">
            <div className="blog-item ">
                <Link to={`/blogs/${_id}`}>
                    <div className="blog-img">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                    <div className="blog-txt">
                        <p className="admin"> {date} {by}   <img className="ml-2" src={commentImg} alt="" /> <span> 0 </span> </p>
                        <h4> {title.substr(0, 80)} </h4>
                        <p> {description?.substr(0, 150) + "..."} </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BlogItem;