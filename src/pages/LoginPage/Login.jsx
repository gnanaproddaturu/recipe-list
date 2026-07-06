




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPage/Login.css"
import API from "../../api/apiClient";


const Login = () => {

    const navigate = useNavigate();

    const buttonHandle =()=>{
        navigate("/register")
    }

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const loginHandler = async (e) => {
        e.preventDefault();

        try {

            const response = await API.post(
                "/user/user-login",
                loginData
            );

            localStorage.setItem("token", response.data.token);
            console.log(response.data);

            alert(response.data.message);

            navigate("/recipe");

        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
  <div className="login-container">
    <form className="login-form" onSubmit={loginHandler}>
      <h2>🥗 Tasty Recipes</h2>
      <p>Welcome Back 👋</p>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={loginData.email}
        onChange={changeHandler}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={loginData.password}
        onChange={changeHandler}
        required
      />

      <button type="submit" className="login-btn">
        Login
      </button>

      <div className="register-link">
        Don't have an account?{" "}
        <span onClick={buttonHandle}>Register</span>
      </div>
    </form>
  </div>
);
};

export default Login;