import React from 'react'
import React, { useRef } from 'react'
const ConnectToBacknd = () => {
    const nameRef = useRef()
    const handleSubmit = () => {
        let special = axios.post("http.//localhost:5500/new-user", { user: nameRef.current.value }).then(data => { console.log(data); })
        console.log(special);
    }
    return (
        <>
            <div className="conatiner mx-auto my-5">
                <div className="mx-2 my-4">
                    <input type="text" ref={nameRef} className="form-control bg-transparent my-2 text-light" />
                    <button className='btn btn-secondary px-4 my-2 form-control' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default ConnectToBacknd