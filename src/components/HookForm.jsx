import React, { useState } from 'react';

const HookForm = () => {
    // FIrst Name
    let [firstname, setfirstName] = useState("")
    
    //Last Name
    let [lastname, setlastName] = useState("")

    // email
    let [email, setEmail] = useState("")

    // Password
    let [password, setPassword] = useState("")

    // Confirm Password
    let [confirmpassword, setConfirmPassword] = useState("")



    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e) => setfirstName(e.target.value)} />
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e) => setlastName(e.target.value)} />
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" className="form-control" onChange = {(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" className="form-control" onChange = {(e) => setPassword(e.target.value)} />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="" id="" className="form-control" onChange = {(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
        </>
    )
}


export default HookForm;