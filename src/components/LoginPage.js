import React from "react";
import '../css/LoginPage.css'
function LoginPage(){
    function handleSubmit(e) {
        e.preventDefault();
        alert('You clicked button.');
    }
    return(
    <form className="loginPage" onSubmit={handleSubmit}>
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
        <button >Log In</button>
    </div>
    </form>    
    );
}
export default LoginPage;