
import React, {useState} from "react";

function UserData(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messege, setMessage] = useState("");
    const [error, setError] = useState("");

    function handleNameChange(e){
        setFullName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleMessageChange(e){
        setMessage(e.target.value);
    }

    function submitForm(){
        if(!fullName || !email || password || messege){
            setError("All Fields are Required!")
        }else if(!email.includes("@")){
            setError("EMail is invalid!")
        }else if(password.length < 8){
            setError("Minimum Length is 8");
        }else{
            setError("");
        }
    }
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <input type="text" onChange={handleNameChange} value={fullName} placeholder="Full Name"/>
            <input type="email" onChange={handleEmailChange} value={email} placehoder="Enter Email"/>
            <input type="password" onChange={handlePasswordChange} value={password} placeholder="Password"/>
            <textarea onChange={handleMessageChange} placeholder="messege" value={messege}></textarea>
            <error><div style={{color:"Red"}}></div></error>
            <button onClick={submitForm}>Submit</button>
        </div>
    )

}

export default UserData;