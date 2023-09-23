import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  let navigate = useNavigate()
  const [input, setInput] = useState({
    email : "",
    password : ""
  })
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (event) => {
    let value = event.target.value
    let name = event.target.name

    setInput({...input, [name] : value})
  }

  const handleLogin = (event) => {
    event.preventDefault()

    let {email, password} = input
    console.log(input)

    axios.post("https://dev-example.sanbercloud.com/api/login", {email, password})
    .then((res) => {
      console.log(res)
      let data = res.data
      let { token, user} = data
      Cookies.set('token', token, {expires : 1})
      Cookies.set('user',JSON.stringify(user),{expires: 1})
      navigate("/")
    })
    .catch((error) => {
      alert(error.massage)
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return(
        <>
<div className="relative ">
  <path
    className="absolute inset-0 object-cover w-full h-full bg-gray-900 "
    alt=""
  />
  <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
    <svg
      className="absolute inset-x-0 bottom-0 text-white"
      viewBox="0 0 1160 163"
    >
      <path
        fill="currentColor"
        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
      />
    </svg>
    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Discover Your Tomorrow with <span className="text-blue-700">MyFuture </span><br className="hidden md:block" />
            Where Dreams Take Flight!
          </h2>
          <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
           We believe in the power of dreams and the potential within each individual to create their own path towards success. With MyFuture, you have a partner in your journey to discover, aspire, and achieve. 
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 bg-blue-700 rounded-md p-2 text-white"
          >
            Go To Home Without Login
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl ">
              Sign In
            </h3>
            <form onSubmit={handleLogin}>
              <div className="mb-1 sm:mb-2">
                <label
                  className="inline-block mb-1 font-medium"
                >
                  Email
                </label>
                <input
                  value={input.email}
                  onChange={handleInput}
                  placeholder="Email"
                  required
                  name="email"
                  type="email"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  className="inline-block mb-1 font-medium"
                >
                  Password
                </label>
                <input
            value={input.password}
            onChange={handleInput}
            required
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          /> <br/><br/>
      <div className="mb-2 sm:mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-deep-purple-accent-400 hover:cursor-pointer"
            onChange={togglePasswordVisibility}
            checked={showPassword}
          />
          <span className="ml-2 text-sm text-gray-600">Tampilkan Kata Sandi</span>
        </label>
      </div>
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-700"
                >
                  Login
                </button>
              </div>
              <p className="text-xs text-gray-600 sm:text-sm">
                We respect your privacy. Don't have an account? 
                <Link to="/sign-up" className="text-blue-700 font-bold hover:cursor-pointer"> Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Login