import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

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
    } else if (!accepted) {
      setRegisterError("Please Accept Our Terms And Conditions");
      return;
    }

    //   create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Your Registration Was Successfully");
        // (Swal.fire({
        //     icon: "success",
        //     title: "Wooohooo",
        //     text: "Your Registration Was Successfully",
        //     showConfirmButton: false,
        //     timer: 1500
        //   }))
        e.target.reset();
        // update Profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => console.log("Profile Updated"))
          .catch();

        // send verification email:
        sendEmailVerification(result.user).then(() => {
          alert("Please Check Your Email And Verify Your Account");
        });
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <h2 className="text-3xl mt-14 font-semibold text-center">
              Please Register
            </h2>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {/*   <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <div className="mb-2">
              <input type="checkbox" name="terms" id="" />
              <label className="ml-2" htmlFor="terms">
                Accept Our Terms <a href="">And Conditions</a>
              </label>
            </div>
            {registerError && (
              <p className="text-red-700 text-center">{registerError}</p>
            )}
            {success && <p className="text-green-600">{success}</p>}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        <p className="text-center mt-4">
          Already Have An Account?
          <Link className="text-blue-600 font-bold" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
