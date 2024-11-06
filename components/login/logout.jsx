"use client"
import "./login.css"
import { useFormState } from "react-dom"
import { loginUser, logoutUser } from "@/app/api/action";

export default function Logout() {
    

    return (
        <>
        <form action={logoutUser}><button>logout</button></form>
           
        </>
    );
}
