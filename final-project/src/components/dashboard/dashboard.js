import React from 'react';
import SideBar from './sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
   
  useEffect(() => {
    axios
      .get('https://dev-example.sanbercloud.com/api/job-vacancy')
      .then((response) => {
        console.log(response)
        setData(response.data.data); 
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


    function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
    }

    const handleDelete = (event) => {

        let idData = parseInt(event.target.value)

        const confirmDelete = window.confirm("Are you sure you want to delete this data?")
        if (confirmDelete){
            axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
            .then((res) => {
            console.log( "Response from DELETE" ,res )
            setData((prevData) => prevData.filter((item) => item.id !== idData));
            })
            .catch((error) => {
                console.error("ERROR deleting data" , error)
            })
        }
    }
   

    const handleEdit = (event) => {
    let idData = parseInt(event.target.value);

    const token = Cookies.get('token');
    

    if (token) {
        axios
            .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                let data = res.data.data;
                navigate(`/dashboard/update-data/${idData}`, { state: { data } });
            })
            .catch((error) => {
                console.error("ERROR fetching data", error);
            });
    } else {
        
    }
};

  return(
    <>
  <SideBar/>
  <div className='md:-ml-12 sm:-ml-12'>
  <div className="-ml-20 -pl-20 sm:ml-44 ">
    <div className="ml-20">
    <table class="overflow-auto w-auto text-sm text-left text-gray-500 ">
<thead class="text-xs uppercase bg-gray-900 text-gray-400 hover:bg-gray-800 ">
    <tr>
        <th scope="col" class="px-6 py-3">
            No
        </th>
        <th scope="col" class="px-6 py-3">
            Title
        </th>
        <th scope="col" class="px-6 py-3">
            Description
        </th>
        <th scope="col" class="px-6 py-3">
            Qualification
        </th>
        <th scope="col" class="px-6 py-3">
            Type
        </th>
        <th scope="col" class="px-6 py-3">
            Tenure
        </th>
        <th scope="col" class="px-6 py-3">
            Status
        </th>
        <th scope="col" class="px-6 py-3">
            Company Name
        </th>
        <th scope="col" class="px-6 py-3">
            Image Company
        </th>
        <th scope="col" class="px-6 py-3">
            Company City
        </th>
        <th scope="col" class="px-6 py-3">
            Salary
        </th>
        <th scope="col" class="px-6 py-3">
            Action
        </th>
    </tr>
</thead>

{data !== null && data.map((res,index) => {
  return(
    <tbody>
                    <tr class=" border-b bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <td class="px-6 py-4 font-medium  whitespace-nowrap text-white ">
                           {index + 1}
                        </td>
                        <td class="px-6 py-4">
                            {res.title}
                        </td>
                        <td class="px-6 py-4">
                            {truncateText(res.job_description,20)}
                        </td>
                        <td class="px-6 py-4">
                            {truncateText(res.job_qualification, 20)}
                        </td>
                        <td class="px-6 py-4">
                            {res.job_type}
                        </td>
                        <td class="px-6 py-4">
                            {res.job_tenure}
                        </td>
                        <td class="px-6 py-4">
                            {res.job_status}
                        </td>
                        <td class="px-6 py-4">
                            {res.company_name}
                        </td>
                        <td class="px-6 py-4">
                            <img src={res.company_image_url} alt="" />
                        </td>
                        <td class="px-6 py-4">
                            {res.company_city}
                        </td>
                        <td class="px-6 py-4">
                            {res.salary_min} - {res.salary_max}
                        </td>
                        <td class="px-6 py-4">
                            <button onClick={handleEdit} value={res.id} className="inline bg-green-400 hover:bg-green-600 text-white rounded-md p-2 mx-1">Edit</button>
                            <button onClick={handleDelete} value={res.id} className="inline bg-red-500 hover:bg-red-700 text-white rounded-md p-2 mx-1">Delete</button>
                        </td>
                    </tr>
           
                </tbody>
  )
})}

</table>
</div>
</div>
</div>
</>

  )
}

export default Dashboard;

