

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../RegisterPage/Register.css"
import API from "../../api/apiClient";

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.password) {
            alert("Please fill all the fields.");
            return;
        }
        try {
            const response = await API.post("/user/user-register", user)

            alert(response.data.message);

            navigate("/")
        } catch (error) {
            alert(error.response.data.message);
        }

        console.log(user);

    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={submitHandler}>
                <h2>Register</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={changeHandler}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={changeHandler}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={changeHandler}
                    required
                />

                <button type="submit">Register</button>
                <p className="login-text">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/")}>Login</span>
                </p>
            </form>
        </div>
    );
};

export default Register;