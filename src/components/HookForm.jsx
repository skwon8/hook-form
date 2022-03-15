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
                    {firstname.length < 2 ? "First name must be at least 2 characters": ""}

                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e) => setlastName(e.target.value)} />
                    {lastname.length < 2 ? "Last name must be at least 2 characters": ""}

                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" className="form-control" onChange = {(e) => setEmail(e.target.value)} />
                    {email.length < 5 ? "Email must be at least 5 characters": ""}

                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" className="form-control" onChange = {(e) => setPassword(e.target.value)} />
                    {password.length < 8 ? "Password must be at least 8 characters": ""}

                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="" id="" className="form-control" onChange = {(e) => setConfirmPassword(e.target.value)}/>
                    {confirmpassword.length < 8 ? "Confirm Password must be at least 8 characters": ""}

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