import "./login.scss";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import illustration from "../../assets/images/illustration.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    toast.loading("Logging you in...");

    setTimeout(() => {
      toast.dismiss();

      toast.success("Login successful!");

      navigate("/users");
    }, 1500);
  };

  return (
    <div className="login">
      {/* LEFT SIDE */}
      <div className="login__left">
        <img src={logo} alt="logo" className="login__logo" />

        <div className="login__illustration-wrapper">
          <img
            src={illustration}
            alt="illustration"
            className="login__illustration"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login__right">
        <img
          src={logo}
          alt="logo"
          className="login__logo login__logo--mobile"
        />
        <div className="login__form">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <input type="email" placeholder="Email" />

          <div className="login__password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>

          <a href="#">FORGOT PASSWORD?</a>

          <button onClick={handleLogin}>LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
