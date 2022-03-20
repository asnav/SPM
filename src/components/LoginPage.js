import React from "react";
import '../css/LoginPage.css'
function LoginPage(){
    function handleSubmit(e) {
        e.preventDefault();
        alert('You clicked submit.');
    }    
    return(
    <footer className="loginPage">
    <h1>FCN-Site</h1>   
    <div>
        <label>Username:</label>
        <input type = "text" />
    </div>
    <div>
        <label>Password:</label>
        <input type = "password" />
    </div>
    <div>
        <button type="submit" onSubmit={alert("test")}>Log In</button>
    </div>
    
    </footer>
    );
}
export default LoginPage;