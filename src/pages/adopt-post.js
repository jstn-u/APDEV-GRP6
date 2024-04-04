import React from 'react';
import '../styles/style';


class AdoptPost extends React.Component {
    render(){
        return (
            <div>
                
                <div class="post-top">                                            
                    <div class="pet-profile">
                        <img src="images/cow.jpg" class="pet-profile-img"/>
                        <div class="pet-info">
                            <div class="name">
                                <small>Name: </small> <div class="pet-name">CoWoo</div>
                            </div>                        
                            <span><hr/></span>
                            <div class="birth">
                                <small>Date of Birth: </small> <div class="birthdate">12/28/2003</div>
                            </div>
                            <div class="breed"> 
                                <small>Species/Breed: </small> <div class="pet-type">cow</div>
                            </div>
                            <div class="loc"> 
                                <small>Location: </small> <div class="location">omooshu</div>
                            </div>
                            <div class="date-posted">
                                <small>Date Posted: </small> <div class="date">09/03/2024</div>
                            </div>
                        </div>                
                    </div>
                    <div class="captions-col">                
                        <div class="user-profile">
                            <img src="images/profile-pic.png"/>
                            <div>
                                <p>title</p>
                                <span>username</span> 
                            </div>  
                            <hr/>                  
                        </div>
                        <div class="captions">
                            Meet [Cow's Name], a gentle and loving bovine friend ready to find a forever pasture! With a heart as big as their moo, [Cow's Name] is a [age]-year-old [breed] cow with a unique personality that shines brighter than the morning sun on a dewy meadow. This adorable cow enjoys leisurely grazing, peaceful afternoons under the shade of a big oak tree, and the occasional scratch behind the ears. [Cow's Name] is not just a cow, but a companion who appreciates the simple joys of farm life. Whether you're a seasoned farmer or someone with a sizable piece of land looking for a gentle giant to add to your family, [Cow's Name] could be the perfect match. They are up-to-date on all vaccinations, health checks, and come with a health guarantee to ensure they're ready to seamlessly join their new home. Adopting a cow is a rewarding experience that brings a lot of joy and a bit of fun moo-sic into your life. If you're ready to welcome [Cow's Name] into your heart and home, please contact us for more information on how you can adopt this lovable cow. Let's give [Cow's Name] the loving forever home they deserve!
                        </div>
                        <div class="reacts-container">                                         
                            <div class="like-button">                        
                                <div class="heart-icon"></div>
                                <div class="likes-amount">7</div>
                            <div class="likes-text">likes</div>
                            </div>
                            <button  class="view-comments">
                                <img src="images/comment-dots.png"/>
                            </button>                    
                        </div>
                        <div>
                            <input type="text" placeholder="Add a comment..." class="add-comment"/>                
                            <button class="post-comment-btn">Post</button>
        
                        </div>
                        <div class="comment-section">
                                <div class="user-profile-comments">
                                    <img src="images/profile-pic.png"/>                            
                                    <p>username</p>     
                                </div>
                                <div class="comment">
                                    <small>Wow handsome and pretty 😍</small>
                                </div>
                                <div class="comments-actions">
                                    <div class="like-comment-btn">
                                        <div class="like-comment-icon"><img src="images/heart.png" class="heart-comment-icon"/></div>
                                        <div class="likes-comment-amount">0</div>
                                        <div class="likes-comment-text">likes</div>
                                    </div>
                                    
                                    <button class="reply-btn">reply</button>
                                    <button class="edit-btn">edit</button>
                                    <button class="delete-btn">delete</button>
                                </div>
                                <div class="reply-comment">
                                    <input type="text" placeholder="Add a reply..." class="add-comment"/>                
                                    <button class="post-reply-btn">Post</button>
                                </div>                                   
                        </div>       
                    </div>
                    
                </div> 
            </div>
        );
    }
} export default AdoptPost;