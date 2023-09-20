import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Signup.css'
const Signup = () => {
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: "", password: "", role: "", latitude: "", longitude: "" });
    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };
    const handleRoleChange = (event) => {
        const selectedRole = event.target.value;
        setCredentials({ ...credentials, role: selectedRole });
    };
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCredentials({
                        ...credentials,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported in your browser');
        }
    }, []);
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(credentials.email, credentials.password, credentials.role, credentials.latitude, credentials.longitude)
        const response = await fetch("http://localhost:6100/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credentials.email, password: credentials.password, role: credentials.role, latitude: credentials.latitude, longitude: credentials.longitude }),
        });

        const json = await response.json();

        if (json.success) {
            localStorage.setItem("Token", json.authToken);
            navigate("/dashboard");
        }

        if (json.error) {
            console.log("error")
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        /* console.log(credentials.email, credentials.password, credentials.role)
        const response = await fetch("http://localhost:6100/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credentials.email, password: credentials.password, role: credentials.role }),
        });

        const json = await response.json();

        if (json.success) {
            console.log("success")
            localStorage.setItem("Token", json.authToken);
            navigate("/dashboard");
        }

        if (json.error) {
            console.log("error")
        } */
        navigate("/dashboard")
    };
    return (
        <div>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-card-image">
                        <h2 className="auth-card-heading">
                            Login
                        </h2>
                    </div>
                    <form className="auth-card-form">
                        <div className="auth-input">
                            <input type="text" className="auth-input-field" value={credentials.email} name="email" onChange={handleChange} required />
                            <label className="auth-input-label">Email</label>
                        </div>
                        <div className="auth-input">
                            <input type="password" className="auth-input-field" value={credentials.password} name="password" onChange={handleChange} required />
                            <label className="auth-input-label">Password</label>
                        </div>
                        <div className="auth-input">
                            <select
                                name="role"
                                value={credentials.role}
                                onChange={handleRoleChange}
                                className="auth-select"
                            >
                                <option value="" disabled hidden>
                                    Select Role
                                </option>
                                <option value="BSF">BSF</option>
                                <option value="Intelligence Agency">Intelligence Agency</option>
                                <option value="Ministry of Defence">Ministry of Defence</option>
                            </select>
                            {/* <label className="auth-input-label">Role</label> */}
                        </div>
                        {/* <div className="auth-action">
                            <button className="auth-action-button" onClick={handleSignup}>Signup</button>
                        </div> */}
                        <div className="auth-action">
                            <button className="auth-action-button" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup