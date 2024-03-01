'use client'
import React,{useState} from "react";
export default function LoginComp(){
    const [email,setEmail] = useState(""); 
    return(
        <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            
        </div>
    );
}