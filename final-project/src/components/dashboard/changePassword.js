import React from "react";
import SideBar from "./sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleChangePassword = (e) => {
        e.preventDefault();
    
        const token = Cookies.get("token");
        const data = {
          current_password: currentPassword,
          new_password: newPassword,
          new_confirm_password: confirmPassword,
        };
  
      axios
        .post("https://dev-example.sanbercloud.com/api/change-password", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
        console.log(response)
        alert("Password berhasil diubah");
        Cookies.remove('token')
        navigate("/login");
        })
        .catch((error) => {
          alert("Terjadi kesalahan: " + error.message);
        });
    };
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    return(
        <>
        <SideBar/>
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
        <div className="w-full max-w-xl xl:px-8 xl:w-5/12 md:ml-96">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl ">
              Change Password
            </h3>
            <form
             onSubmit={handleChangePassword}
            >
              <div className="mb-1 sm:mb-2">
                <label
                  className="inline-block mb-1 font-medium"
                >
                  Current Password
                </label>
                <input
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current Password"
                  required
                  name="currentPassword"
                  type={showPassword ? "text" : "password"}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  className="inline-block mb-1 font-medium"
                >
                  New Password
                </label>
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  placeholder="New Password"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  className="inline-block mb-1 font-medium"
                >
                  confirm New Password
                </label>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  name="confrimPassword"
                  type={showPassword ? "text" : "password"}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                />
              </div>
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
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-700"
                >
                  Confirm
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
export default ChangePassword