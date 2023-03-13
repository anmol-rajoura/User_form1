import React, {useState} from 'react';
import "./userform.css";
import axios from 'axios';
// import { useHistory } from "react-router-dom"



const Userform = () => {
    // const history = useHistory()

    const [ user, setUser] = useState({
        name:"",
        Dob:"",
        Phoneno:"",
        email:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = async (e) => {
        e.preventDefault()
        const {name, Dob, Phoneno, email} = user
        console.log(name, Dob, Phoneno, email)
        if(name && Dob && Phoneno && email) {
            const resp = await axios.post("http://localhost:9002/userform/", user)
            // console.log(resp.status())
            window.location.href = '/submit';
        }else {
            alert("invalid input")
        }
        
    }


    // const onSubmit = async (e) => {
    //     e.preventDefault()
    //     const post = { userName: userName }
    //     try {
    //       const res = await axios.post('http://localhost:3001/users', post)
    //       console.log(res.data)
    //     } catch (e) {
    //       alert(e)
    //     }
    //   }
    return (
        <div className='main'>
        <div className='user'>
            <h1>UserForm</h1>
            <input type="text" placeholder='Enter Your Name' name='name' value={user.name} onChange={handleChange}/>
            <input type="date" placeholder='Enter Your Dob' name='Dob' value={user.Dob} onChange={handleChange}/>
            <input type="text" placeholder='Enter Your Number' name='Phoneno' value={user.Phoneno} onChange={handleChange}/>
            <input type="email" placeholder='Enter Your Email'  name='email' value={user.email} onChange={handleChange}/>
            <div className='button' onClick={submit}>Submit</div>
            {/* <div className="button" onClick={() => history.push("/submit")}>Submit</div> */}
    
        </div>
        </div>

    





    )
}

export default Userform;