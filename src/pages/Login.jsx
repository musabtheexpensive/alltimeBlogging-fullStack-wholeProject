import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
// import axios from "axios";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const auth = getAuth(app);
  const { googleSign, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password Should Be At Least 6 Characters Or Longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        // const user = { email };
        if (result.user.emailVerified) {
          setSuccess("Logged in SuccessFully");
        } else {
          alert("Please Verify Your Email Address");
        }
        e.target.reset();
        // navigate after login
        navigate(location?.state ? location.state : "/");

        // // get access token
        // axios.post("http://localhost:5000/jwt", user,{withCredentials:true})
        // .then((res) => {
        //   console.log(res.data);
        //   if(res.data.success){
        //     navigate(location?.state ? location.state : "/");
        //   }
        // });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  // forget pass work start here
  const handleForgetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please Provide An Email", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("Please write A Valid Email");
      return;
    }
    // send validation email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please Check Your Email");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <h2 className="text-3xl mt-20 font-bold text-center">
              Please Login
            </h2>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              ref={emailRef}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
               type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
                <span
              className="absolute top-14 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            <label className="label">
              <a
                onClick={handleForgetPass}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
            {registerError && (
              <p className="text-red-700 text-center">{registerError}</p>
            )}
            {success && <p className="text-green-600">{success}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/register">
            Please Register
          </Link>
        </p>

        <h3 className="3xl text-center font-bold">Or Register With</h3>
        <div className="flex justify-center gap-2">
          <div>
            <button onClick={googleSign} className="mt-2 text-3xl">
              <FcGoogle />
            </button>
          </div>
          <div className="mt-2 text-3xl">
            <button className="">
              <FaFacebookSquare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
