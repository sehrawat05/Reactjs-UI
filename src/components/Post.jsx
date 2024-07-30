import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
const Post = ({data,bgColor,color}) => {
  return (
    <>
      <div className="post_container" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={data.pImg} 
              alt="" />
            </div>

            <div className="text">
                <h3>{data.userName}</h3>
                <p>{data.title}</p>
            </div>
          </div>
          <div className="dot"><HiDotsVertical /></div>
        </div>
        <p>
          {data.description}
        </p>
        <div className="post_img">
            <img src={data.mImg} alt="" />
        </div>
        <div className="like_comments">
           <div className="likes"><FaHeart className="items"/>{data.like}{" "}k
           </div>
           <div className="comments"><FaComments className="items"/>{data.comment}{" "}k</div>
           <div className="share"><FaShare className="items"/>{data.share}{" "}k</div>
        </div>
      </div>
    </>
  );
};

export default Post;
