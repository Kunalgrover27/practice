import React from 'react'
import axios, { useNavigate } from 'react-router-dom'
function input() {
    const[name,setName]=useState[null];
    const[password,setPassword]=useState[null];

    const handlesubmit=(e)=>{
        e.preventDefault();

        try {
            axios.post('localhost8000/register',{name,password})
            .then(res=>{
                if(res.data == "already exists"){
                    useNavigate("/home");
                }
            })
        } catch (error) {
            alert("wrong Details")
            console.log(error)
        }

    }
    
  return (
    <div>
        <input type="email" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default input