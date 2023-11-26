import React from "react";
import SideBar from './sidebar';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const CreateData = () => {
    const [data, setData] = useState([])
    const [fetchStatus , setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)
    const navigate = useNavigate()
    const [input, setInput] = useState(
        {
            title : "",
            job_description : "",
            job_qualification : "",
            job_type : "",
            job_tenure : "",
            job_status : "",
            company_name : "",
            company_image_url : "",
            company_city : "",
            salary_min : "",
            salary_max : ""

        }
    )
    
    useEffect ( () => {
        

        if (fetchStatus === true){
            axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            setData(res.data.data)
        })
        .catch((error) => {
        })

        setFetchStatus(false)
        }

        if (currentId !== -1) {
            const editingData = data.find((item) => item.id === currentId);
        
            if (editingData) {
              setInput({
                title: editingData.title,
                job_description: editingData.job_description,
                job_qualification: editingData.job_qualification,
                job_type: editingData.job_type,
                job_tenure: editingData.job_tenure,
                job_status: editingData.job_status,
                company_name: editingData.company_name,
                company_image_url: editingData.company_image_url,
                company_city: editingData.company_city,
                salary_max: editingData.salary_max,
                salary_min: editingData.salary_min
              });
            }
          }
        }, [fetchStatus, setFetchStatus, currentId, data]);
    console.log(data)

    

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "title") {
            setInput( {...input, title : value} )
        } else if(name === "job_description"){
            setInput({...input, job_description : value})
        }else if(name === "job_qualification") {
            setInput({...input, job_qualification : value})
        }else if(name === "job_type") {
            setInput({...input, job_type : value})
        }else if(name === "job_tenure") {
            setInput({...input, job_tenure : value})
        }else if(name === "job_status") {
            setInput({...input, job_status : value})
        }else if(name === "company_name") {
            setInput({...input, company_name : value})
        }else if(name === "company_image_url") {
            setInput({...input, company_image_url : value})
        }else if(name === "company_city") {
            setInput({...input, company_city : value})
        }else if(name === "salary_min") {
            setInput({...input, salary_min : value})
        }else if(name === "salary_max") {
            setInput({...input, salary_max : value})
        }
    }   

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        } = input
        if (currentId === -1){
            axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, { 
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max }, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}} )
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
            alert("Data berhasil ditambahkan!");
            navigate("/dashboard/admin")
        })
        }else{
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, { 
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max }, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
            .then((res) => {
                setFetchStatus(true)
                alert("Data berhasil diupdate!");
                navigate("/dashboard/admin")
            })
        }

        setCurrentId(-1)
        setInput(
            {
                title : "",
                job_description : "",
                job_qualification : "",
                job_type : "",
                job_tenure : "",
                job_status : "",
                company_name : "",
                company_image_url : "",
                company_city : "",
                salary_min : "",
                salary_max : ""
            }
        )
    }

    return(
<>
<SideBar/>
<div className="lg:ml-60 md:ml-64 my-4">
<h1 className="text-center font-bold lg:ml-96 mx-24 text-5xl bg-gray-900 text-white p-2 inline-block rounded-lg ">Create Data</h1>
</div>
<form onSubmit={handleSubmit} className=" md:ml-56 ml-4 mr-4 mt-8 mb-8 ">
  
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
      <input type="text" onChange={handleInput} value={input.title} name="title" className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Front end.." required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Company Name</label>
      <input type="text" onChange={handleInput} value={input.company_name} name="company_name" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="PT..."  required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Job Type</label>
      <input type="text" onChange={handleInput} value={input.job_type} name="job_type" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="remote..."  required />
    </div>  
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Company City</label>
      <input type="text" onChange={handleInput} value={input.company_city} name="company_city" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="new york"  required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Job Qualification</label>
      <input type="text" onChange={handleInput} value={input.job_qualification} name="job_qualification" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Job Qualification" required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">Company Image URL</label>
      <input type="text" onChange={handleInput} value={input.company_image_url} name="company_image_url" className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="url" required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Job Tenure</label>
      <input type="text" onChange={handleInput} value={input.job_tenure} name="job_tenure" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Kontrak" required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Salary Min</label>
      <input type="number" onChange={handleInput} value={input.salary_min} name="salary_min" className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="500000" required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Job Status</label>
      <input type="number" onChange={handleInput} value={input.job_status} name="job_status" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="1 for active 0 for off" required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">Salary Max</label>
      <input type="number" onChange={handleInput} value={input.salary_max} name="salary_max" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="90000000"  />
    </div>  
  </div>
  
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 ">Job Description</label>
    <textarea type="text" onChange={handleInput} value={input.job_description} name="job_description" className=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Job Description"  required />
  </div> 
  <div className="flex items-start mb-6">
  </div>
  <button type="submit" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
</form>
</>
    )
}

export default CreateData