import React from 'react';
import '../styles/style';
import CommentsContainer from '../components/CommentsContainer'; // Ensure this path is correct

class MainPost extends React.Component {
    render() {
        return (
            <div>
                <div className="user-profile">
                    <img src="images/profile-pic.png" alt="User Profile" />
                    <div>
                        <p>Title</p>
                        <span>Username</span>
                    </div>
                </div>
                <p className="caption">
                    Found this lost Husky in front of my house. Whoever owns this adorable furball message me ASAP!!! Owner you better reply to me soon OR ELSE I will really end up keeping him I think I'll name him Snow.
                </p>
                <img src="images/post-image.jpg" className="post-img" alt="Lost Husky" />
                <div className="reacts-container">
                    <div className="like-button">
                        <div className="heart-icon"></div>
                    </div>
                    <button className="view-comments">
                        <img src="images/comment-dots.png" alt="View Comments" />
                    </button>
                </div>
                <div className="like-button">
                    <div className="likes-amount">7</div>
                    <div className="likes-text">likes</div>
                </div>
                <CommentsContainer />
            </div>
        );
    }
}

export default MainPost;
