import React from 'react';
import axios from 'axios';
import "./submit.css";

const Submit = () => {

    (async function getData (){
        const response = await axios.get("http://localhost:9002/userform/");
        console.log(response.data)
    })();
    return (
        <div className='main'>
        <div className='submit'>
            <h1>Hello Submitter</h1>
            {/* <div className='button'>Send Email</div> */}
        </div>
        </div>

    )
}

export default Submit;