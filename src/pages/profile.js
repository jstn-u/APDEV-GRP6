import React from 'react';
import '../styles/style.css';
import NavBarProfile from './nav-profile';
import MainPostInput from './main-post-input';
import MainPost from './main-post';


class Profile extends React.Component {
    render(){
        return (
            <div>
            <NavBarProfile />     
            <div class="profile-top"> 
                <div class="profile-container1">
                    <div>
                        <img src="images/banner.png" class="cover-img"/>
                        <img src="images/edit.png" class="edit-cover-img-btn"/>
                    </div>        
                    

                    <div class="profile-details">
                        <div class="pd-left">
                            <div class="pd-row">
                                <div>
                                    <img src="images/profile-pic.png" class="pd-image"/>
                                    <img src="images/edit.png" class="edit-profile-pic-btn"/>
                                </div>                         

                                <div>
                                    <h3>username</h3>
                                    <p>"Digital Nomad & Espresso Enthusiast 🌍✈️ | Tech Innovator 💡| Aspiring Polyglot 📚| Part-time Poet 🖋️| Full-time Dreamer 💭| Lover of the stars and everything in between 🌌| Seeking the magic in the mundane | Let's make the impossible, possible together 🚀"</p>
                                </div>
                            </div>
                        </div>
                        <div class="pd-right">
                            <button class="edit-bio-btn"><img src="images/pencil.png"/> Edit Bio</button>
                        </div>
                    </div>
                </div> 
            </div>  
                <div class="profile-container2">   
                            <div class="main-content">            
                                <MainPostInput />
                                <div class="write-post-container">
                                    <form action="#">
                                        <div class="user-profile">
                                            <img src="images/profile-pic.png" class="user-img"/>
                                            <div>
                                                <p>User Name</p> 
                                                <div class="visibility-container">
                                                    <select class="visibility">
                                                    <option value="public">Lost and Found</option>
                                                    <option value="friends">For Adoption</option>                                  
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-container">
                                            <div class="input-text">
                                                Title: <input type="text" class="textarea"/> 
                                            </div>
                                            <div class="input-text">
                                                Captions: <input type="text" class="textarea"/> 
                                            </div>
                                            <div class="input-text">
                                                Pet Name: <input type="text" class="textarea"/>
                                            </div>
                                            <div class="input-text">
                                                Species / Breed: <input type="text" class="textarea"/> 
                                            </div>
                                            <div class="input-text">
                                                Location: <input type="text" class="textarea"/>                        
                                            </div>
                                            
                                            <div class="add-post-links">
                                                <div class="input-text">
                                                    Date of Birth: <input type="date"/>
                                                </div> 
                                                <label for="photo-upload" class="custom-file-upload">
                                                    <img src="images/add-image.png" alt="Upload photo"/> Upload Photo</label>
                                                <input id="photo-upload" type="file" class="input-btn"/>  
                                                                        
                                            </div>
                                            <button type="submit" class="post-btn"> post </button>
                                        </div>
                                    </form>                
                                </div>
                                
                                <div class="post-container">
                                    <MainPost />
                                </div>
                                
                                <div class="adopt-post-container">
                                    <div class="post-top">                                            
                                        <div class="adopt-pet-profile">
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
                                                <img src="images/profile-pic.png" class="user-img"/>
                                                <div>
                                                    <p>title</p>
                                                    <span>username</span> 
                                                    <div class="button-container2">
                                                        <button class="edit-post-btn2"><img src="images/edit-post.png"/></button>
                                                        <button class="delete-post-btn2"><img src="images/trash-post.png"/></button>     
                                                    </div>
                                                </div>  
                                                <hr/>                  
                                            </div>
                                            
                                            <div class="captions2">
                                                Meet [Cow's Name], a gentle and loving bovine friend ready to find a forever pasture! With a heart as big as their moo, [Cow's Name] is a [age]-year-old [breed] cow with a unique personality that shines brighter than the morning sun on a dewy meadow. This adorable cow enjoys leisurely grazing, peaceful afternoons under the shade of a big oak tree, and the occasional scratch behind the ears. [Cow's Name] is not just a cow, but a companion who appreciates the simple joys of farm life. Whether you're a seasoned farmer or someone with a sizable piece of land looking for a gentle giant to add to your family, [Cow's Name] could be the perfect match. They are up-to-date on all vaccinations, health checks, and come with a health guarantee to ensure they're ready to seamlessly join their new home. Adopting a cow is a rewarding experience that brings a lot of joy and a bit of fun moo-sic into your life. If you're ready to welcome [Cow's Name] into your heart and home, please contact us for more information on how you can adopt this lovable cow. Let's give [Cow's Name] the loving forever home they deserve!
                                            </div>
                                            <div class="reacts-container2">                                         
                                                <div class="like-button2">                        
                                                    <div class="heart-icon2"></div>
                                                    <div class="likes-amount2">0</div>
                                                <div class="likes-text2">likes</div>
                                                </div>
                                                <button  class="view-comments2">
                                                    <img src="images/comment-dots.png"/>
                                                </button>                    
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Add a comment..." class="add-comment"/>                
                                                <button class="post-comment-btn">Post</button>
                            
                                            </div>
                                            <div class="comment-section2">
                                                    <div class="user-profile-comments">
                                                        <img src="images/profile-pic.png"/>                            
                                                        <p>username</p>     
                                                    </div>
                                                    <div class="comment2">
                                                        <small>Wow handsome and pretty 😍</small>
                                                    </div>
                                                    <div class="comments-actions2">
                                                        <div class="like-comment-btn2">
                                                            <div class="like-comment-icon2"><img src="images/heart.png" class="heart-comment-icon"/></div>
                                                            <div class="likes-comment-amount2">0</div>
                                                            <div class="likes-comment-text2">likes</div>
                                                        </div>
                                                        
                                                        <button class="reply-btn2">reply</button>
                                                        <button class="edit-btn2">edit</button>
                                                        <button class="delete-btn2">delete</button>
                                                    </div>
                                                    <div class="reply-comment2">
                                                        <input type="text" placeholder="Add a reply..." class="add-comment"/>                
                                                        <button class="post-reply-btn2">Post</button>
                                                    </div>                                   
                                            </div>       
                                        </div>
                                        
                                    </div>  
                                    
                                </div>   
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;