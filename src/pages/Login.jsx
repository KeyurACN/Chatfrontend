import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Topnav } from "../component/Topnav";
import { useDispatch } from "react-redux";
import { Loginpost } from "../Redux/AuthReducer/Action";

export default function Login() {
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [post, SetPost] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    if (post.email !== "" && post.password !== "") {
      setLoading(true);

      dispatch(Loginpost(post))
        .then((res) => {
          if (res.type === "LOGINUSERSUCESS") {
            if (res.payload.msg !== "login Sucessfully") {
              setLoading(false);
            } else {
              localStorage.setItem(
                "usertoken",
                JSON.stringify(res.payload.token)
              );
              localStorage.setItem(
                "loggeduser",
                JSON.stringify(res.payload.data)
              );
              navigate("/");
              setLoading(false);
            }
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    if (post.email === "") {
      setisEmail(true);
    }
    if (post.password === "") {
      setisPassword(true);
    }
  };

  return (
    <>
      <Topnav />
      <div className="mb-10 mt-[-10px]">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
          <div className="h-[60vh] p-6">
            <h1 className="text-center font-semibold mb-5 text-[#00a884] text-2xl">
              LOGIN
            </h1>
            <div className="max-w-2xl mx-auto space-y-5">
              <div
                className={`form-control ${
                  isEmail ? "text-red-500" : "text-gray-700"
                }`}
              >
                <label
                  className={`block mb-2 text-base font-medium ${
                    isEmail ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-[#e0e0de] rounded-full p-3"
                  onChange={handleChange}
                />
                {isEmail && (
                  <p className="text-red-500 text-sm">Email is required.</p>
                )}
              </div>
              <div
                className={`form-control ${
                  isPassword ? "text-red-500" : "text-gray-700"
                }`}
              >
                <label
                  className={`block mb-2 text-base font-medium ${
                    isPassword ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="w-full bg-[#e0e0de] rounded-full p-3"
                  onChange={handleChange}
                />
                {isPassword && (
                  <p className="text-red-500 text-sm">Password is required.</p>
                )}
              </div>
              <button
                className={`w-full py-3 bg-[#00a884] text-white rounded-full text-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <p className="mt-5 text-center text-[#00a884] font-semibold">
              Forgot password?
            </p>
            <div className="w-4/5 mx-auto mt-4 text-center">
              <p className="font-semibold">
                Don't have an account?
                <Link to="/sign">
                  <span className="text-[#00a884]"> SIGNUP HERE</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
