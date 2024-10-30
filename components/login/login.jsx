"use client"
import { loginUser } from "@/utils/fetch";
import "./login.css"
import { Loginuser } from "@/app/api/action";
export default function Login(){

//    async function handleLogin(e){
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const formObj = Object.fromEntries(formData);
//         const response = await loginUser(formObj);
//         console.log(response);
        
//     }
    return(
        <> 
        <dialog className="modal" open={false}>
            <h2>Join Medium.</h2>
            <form action={Loginuser}  className="login-form">
                <label htmlFor="userName">User Name</label>
                <input id="userName" name="userName" type="text"  />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email"  />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password"  />
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