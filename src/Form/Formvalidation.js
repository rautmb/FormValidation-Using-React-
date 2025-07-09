import React, { useState } from "react";

const Formvalidation = () => {

    const data = { uname: '', mobileno: '', email: '', password: '', cpassword: '' };

    const [inputdata, setInputdata] = useState(data);

    const [error, setError] = useState({});

    const [submitteddata, setSubmitteddata] = useState(null);

    const handelchange = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: '' });
    }

    const Submitdata = (e) => {
        e.preventDefault();

        if (Validation()) {
            alert('Form submitted successfully!!');
            setSubmitteddata(inputdata);
            setInputdata(data);
        }
    }

    const Validation = () => {

        const newerror = {};

        if (inputdata.uname.trim() === '') {
            newerror.uname = "Username is required";
        }

        if (inputdata.mobileno.trim() === '') {
            newerror.mobileno = "Mobile no is required";
        }
        else if (inputdata.mobileno.length != 10) {
            newerror.mobileno = "Please enter valid mobile no";
        }

        if (inputdata.email.trim() === '') {
            newerror.email = "Email is required";
        }
        else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!emailRegex.test(inputdata.email)) {
                newerror.email = "Enter a valid email (e.g., user@example.com)";
            }
        }

        if (inputdata.password.trim() === '') {
            newerror.password = "Password is required";
        }

        if (inputdata.cpassword != inputdata.password) {
            newerror.cpassword = "Password does not match";
        }

        setError(newerror);

        return Object.keys(newerror).length === 0;
    }

    return (
        <>
            <div style={{ margin: '40px' }}>
                <h2>Form Validation</h2>
                <br />
                <form onSubmit={Submitdata}>
                    <div>
                        <label>Username</label><br />
                        <input type="text" name="uname" value={inputdata.uname} onChange={handelchange} />
                        <p style={{ color: 'red', marginTop: '-1px' }}>{error.uname}</p>
                    </div>
                    <br />
                    <div>
                        <label>Mobile No.</label><br />
                        <input type="text" name="mobileno" value={inputdata.mobileno} onChange={handelchange} />
                        <p style={{ color: 'red', marginTop: '-1px' }}>{error.mobileno}</p>
                    </div>
                    <br />
                    <div>
                        <label>Email</label><br />
                        <input type="text" name="email" value={inputdata.email} onChange={handelchange} />
                        <p style={{ color: 'red', marginTop: '-1px' }}>{error.email}</p>
                    </div>
                    <br />
                    <div>
                        <label>Password</label><br />
                        <input type="text" name="password" value={inputdata.password} onChange={handelchange} />
                        <p style={{ color: 'red', marginTop: '-1px' }}>{error.password}</p>
                    </div>
                    <br />
                    <div>
                        <label>Confirm Password</label><br />
                        <input type="text" name="cpassword" value={inputdata.cpassword} onChange={handelchange} />
                        <p style={{ color: 'red', marginTop: '-1px' }}>{error.cpassword}</p>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>

                {submitteddata &&
                    (
                        <div>
                            <p>Username: {submitteddata.uname}</p>
                            <p>mobileno: {submitteddata.mobileno}</p>
                            <p>Email: {submitteddata.email}</p>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Formvalidation;