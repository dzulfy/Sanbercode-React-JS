import React from "react";
import SideBar from "./sidebar";
import Cookies from "js-cookie";

const UserProfile = () => {
  const user = JSON.parse(Cookies.get("user"))
  console.log(user);
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
          <div className="flex items-center h-screen w-full justify-center">
  <div className="bg-white shadow-xl rounded-lg py-10 px-20 md:mr-32 lg:mr-0">
    <div className="photo-wrapper p-2">
      <img
        className="w-52 h-52 rounded-full mx-auto"
        src={user.image_url}
        alt="John Doe"
      />
    </div>
    <div className="p-2">
      <h3 className="text-center text-4xl text-gray-900 font-medium leading-8 capitalize">
        {user.name}
      </h3><br/>
      <div className="text-center text-gray-400 text-lg font-semibold">
        <p>Web Developer</p>
      </div>
      <table className="text-xs my-3">
        <tbody>
          <tr>
            <td className="px-2 py-2 text-base text-gray-500 font-semibold">
              Address
            </td>
            <td className="px-2 py-2 text-base">{user.email}</td>
          </tr>
          <tr>
            <td className="px-2 py-2 text-gray-500 text-base font-semibold">Created At</td>
            <td className="px-2 py-2 text-base">{user.created_at}</td>
          </tr>
          <tr>
            <td className="px-2 py-2 text-gray-500 font-semibold text-base">Updated At</td>
            <td className="px-2 py-2 text-base">{user.updated_at}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center my-3">
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</div>



        </>
    )
}

export default UserProfile