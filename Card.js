import { useEffect,useState } from 'react';
import '../App.css'
import Field from './Field';

export default function Card(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    var check_page="";
    const login_array = [
        ["text", "username", "Username", setName],
        ["password","password","Password",setPassword]
    ]
    const Signup_array = [
        ["text", "username", "Username", setName],
        ["password","password","Password",setPassword]
    ]

    function handleclick(event) {
        console.log("Email");
    }

    useEffect(() => {
        console.log(name)
        console.log(password)
    });
    
    return (
        
        <div className="wrapper">
            
            <div className="logo"> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" /> </div>
            <div className="text-center mt-4 name">{check_page=props.title}</div>
            <form className="p-3 mt-3">
            {
                check_page==="Login"?
                login_array.map((login_arr, i)=>(
                   <Field key={i} type={login_arr[0]} name={login_arr[1]} id={login_arr[1]} placeholder={login_arr[2]} onChange={(event)=>login_arr[3](event.target.value)}/>   
                ))
                 :     Signup_array.map((Signup_arr, i)=>(
                        <Field key={i} type={Signup_arr[0]} name={Signup_arr[1]} id={Signup_arr[1]} placeholder={Signup_arr[2]} onChange={(event)=>Signup_arr[3](event.target.value)}/>   
                     ))
                
            }
                <button className="btn mt-3" onClick={handleclick}>Login</button>
            </form>
            <div className="text-center fs-6"> <a>Forget password?</a> or <a>Sign up</a> </div>
        </div>
    );
}