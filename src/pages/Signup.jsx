import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Topnav } from "../component/Topnav";
import { Signuppost } from "../Redux/AuthReducer/Action";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [isName, setisName] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [post, SetPost] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    if (post.email !== "" && post.name !== "" && post.password !== "") {
      setLoading(true);
      dispatch(Signuppost(post))
        .then((res) => {
          setLoading(false);
          if (
            res.type === "SIGNUPUSERSUCESS" &&
            res.payload.data !== "user is already present"
          ) {
            toast({
              position: "top",
              colorScheme: "green",
              status: "success",
              title: "User account created successfully",
              duration: 3000,
            });
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      if (post.email === "") setisEmail(true);
      if (post.password === "") setisPassword(true);
      if (post.name === "") setisName(true);
    }
  };

  return (
    <>
      <Topnav />
      <div className="shadow-lg mt-[-10px]">
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg">
          <h1 className="text-center font-semibold mb-5 text-[#00a884] text-2xl">
            SIGNUP
          </h1>
          <div className="space-y-5">
            <div
              className={`form-control ${
                isName ? "text-red-500" : "text-gray-700"
              }`}
            >
              <label
                className={`block mb-2 text-base font-medium ${
                  isName ? "text-red-500" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-[#e0e0de] rounded-full p-3"
                onChange={handleChange}
              />
              {isName && (
                <p className="text-red-500 text-sm">Name is required.</p>
              )}
            </div>

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
              {loading ? "Loading..." : "Signup"}
            </button>
          </div>

          <div className="w-4/5 mx-auto mt-4 text-center">
            <p className="font-semibold">
              Already have an account?
              <Link to="/login">
                <span className="text-[#00a884]"> SIGN IN</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
