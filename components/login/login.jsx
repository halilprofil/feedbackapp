"use client"
import "./login.css"
export default function Login(){
    return(
        <> 
        <dialog className="modal" open="false">
            <h2>Join Medium.</h2>
            <form className="login-form">
                <label htmlFor="userName">User Name</label>
                <input id="userName" name="userName" type="text" required />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required />
                <button>Log in</button>
                <div className="signUp">
                    <p>Already have an account?</p>
                    <button>Sign up</button>
                </div>
            </form>
            <button
            className="closeModal"
            
            >
            x
            </button>
      </dialog></>
    )
}