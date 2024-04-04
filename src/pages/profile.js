import React from 'react';
import '../styles/style.css';
import NavBarProfile from './nav-profile';
import MainPostInput from './main-post-input';
import MainPost from './main-post';
import AdoptPost from './adopt-post';
import AdoptPostInput from './adopt-post-input';


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
                            <button class="edit-bio-btn"><img src="images/pencil.png"/> Edit Profile</button>
                        </div>
                    </div>
                </div> 
            </div>  
                <div class="profile-container2">   
                            <div class="main-content">            
                                <MainPostInput />
                                <AdoptPostInput />
                                
                                <div class="post-container">
                                    <MainPost />
                                    
                                </div>
                                <AdoptPost />
                             
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;