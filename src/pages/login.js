import React from 'react';
import '../styles/style'; // Adjust the path according to your project structure

class login extends React.Component {
   
    componentDidMount() {
        const eyeIcon = document.getElementById("eyeicon");
        const password = document.getElementById("password");

        eyeIcon.onclick = () => {
            if(password.type === "password") {
                password.type = "text";
            } else {
                password.type = "password";
            }
        };
    }

    render(){
        return (
            <div>
                <div className="wrapper" />
                    <h1>Log In</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <img src="images/user.png" className="user-icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required id="password" />
                        <img src="images/eye.png" id="eyeicon" className="show-icon" />
                    </div>
                    <div className="register-link">
                        <p>Don't have an account? <a href="register.html">Register</a></p>
                    </div>
            </div>
        );
    }
}

export default login;
