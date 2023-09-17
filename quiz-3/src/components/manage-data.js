import React ,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Manage = () => {
    const [data, setData] = useState(null)
    const [fetchStatus , setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)
    const navigate = useNavigate()
    useEffect ( () => {
        if (fetchStatus === true){
            axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
        .then((res) => {
            setData([...res.data])
        })
        .catch((error) => {
        })

        setFetchStatus(false)
        }

    },[fetchStatus,setFetchStatus])
    console.log(data)

    const [input, setInput] = useState(
        {
            name : "",
            category : "",
            description : "",
            price : "",
            rating : "",
            release_year : "",
            size : "",
            is_android_app : "",
            is_ios_app : "",
            image_url : ""
        }
    )

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "name") {
            setInput( {...input, name : value} )
        } else if(name === "category"){
            setInput({...input, category : value})
        }else if(name === "description") {
            setInput({...input, description : value})
        }else if(name === "price") {
            setInput({...input, price : value})
        }else if(name === "rating") {
            setInput({...input, rating : value})
        }else if(name === "release_year") {
            setInput({...input, release_year : value})
        }else if(name === "size") {
            setInput({...input, size : value})
        }else if(name === "is_android_app") {
            setInput({...input, is_android_app : value})
        }else if(name === "is_ios_app") {
            setInput({...input, is_ios_app : value})
        }else if(name === "image_url") {
            setInput({...input, image_url : value})
        }
    }   

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app,
            image_url
        } = input
        if (currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', { 
            name,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app,
            image_url } )
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
            alert("Data berhasil ditambahkan!");
            navigate("/")
        })
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, { 
            name,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app,
            image_url })
            .then((res) => {
                setFetchStatus(true)
                alert("Data berhasil diupdate!");
                navigate("/")
            })
        }

        setCurrentId(-1)
        setInput(
            {
            name : "",
            category : "",
            description : "",
            price : "",
            rating : "",
            release_year : "",
            size : "",
            is_android_app : "",
            is_ios_app : "",
            image_url : ""
            }
        )
    }

    const handleDelete = (event) => {

        let idData = parseInt(event.target.value)

        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?")
        if (confirmDelete){
            axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
            .then((res) => {
            setFetchStatus(true)
        })
        }
    }
    const handleEdit = (event) => {
       let idData = parseInt(event.target.value)
       setCurrentId(idData)
       axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
       .then((res) => {
        
        let data = res.data

        setInput(
            {
            name : data.name,
            description : data.description,
            category : data.category,
            price : data.price,
            rating : data.rating,
            release_year : data.release_year,
            size : data.size,
            is_android_app : data.is_android_app,
            is_ios_app : data.is_ios_app,
            image_url : data.image_url

            }
        )
       })
    }

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    return(
        <>
<div class="relative overflow-x-auto mx-32 my-24 rounded-lg shadow-xl">
    <table class="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-purple-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-purple-700 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No
                </th>
                <th scope="col" class="px-6 py-3">
                    Nama
                </th>
                <th scope="col" class="px-6 py-3">
                    Kategori
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Rating
                </th>
                <th scope="col" class="px-6 py-3">
                    Release Year
                </th>
                <th scope="col" class="px-6 py-3">
                    Size
                </th>
                <th scope="col" class="px-6 py-3">
                    Is_Android_App
                </th>
                <th scope="col" class="px-6 py-3">
                    is_IOS_App
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        {data !== null && data.map((res,index) => {
            return(
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                           {index + 1}
                        </td>
                        <td class="px-6 py-4">
                            {res.name}
                        </td>
                        <td class="px-6 py-4">
                            {res.category}
                        </td>
                        <td class="px-6 py-4">
                            {truncateText(res.description, 20)}
                        </td>
                        <td class="px-6 py-4">
                            {res.price}
                        </td>
                        <td class="px-6 py-4">
                            {res.rating}
                        </td>
                        <td class="px-6 py-4">
                            {res.release_year}
                        </td>
                        <td class="px-6 py-4">
                            {res.size}
                        </td>
                        <td class="px-6 py-4">
                            {res.is_android_app}
                        </td>
                        <td class="px-6 py-4">
                            {res.is_ios_app}
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
    

    <div className="shadow-2xl mx-48 my-24 p-5 rounded-xl">
        <form onSubmit={handleSubmit}>
            <p className="border-b-2 border-inherit my-5 ">Gambar & Data Game</p>
            <div>
                <label >Nama : </label>
                <input required onChange={handleInput} value={input.name} name="name" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" />
            </div>
            <div>
                <label>Image : </label>
                <input required onChange={handleInput} value={input.image_url} name="image_url" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"autoComplete="off" />
            </div>
            <div>
                <label >Kategori : </label>
                <input required onChange={handleInput} value={input.category} name="category" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off"/>
            </div>

            <div>
                <label>Description : </label>
                <textarea required onChange={handleInput} value={input.description} name="description" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"autoComplete="off" />
            </div>
            <div>
                <label>Price : </label>
                <input required onChange={handleInput} value={input.price} name="price" type="number" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"autoComplete="off" />
            </div>
            <div>
                <label>Rating : </label>
                <input required onChange={handleInput} value={input.rating} name="rating" type="number" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={1} max={5} autoComplete="off" />
            </div>
            <div>
                <label>Release Year : </label>
                <input required onChange={handleInput} value={input.release_year} name="release_year" type="number" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={2009} min={2009} placeholder="minimal tahun 2009" max={2023} autoComplete="off"/>
            </div>
            <div>
                <label>Size : </label>
                <input required onChange={handleInput} value={input.size} name="size" type="number" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" />
            </div>
            <p className="border-b-2 border-inherit my-5 ">Jenis Perangkat ?</p>
            <div>
                <label>Android? : </label>
                <input required onChange={handleInput} value={input.is_android_app} name="is_android_app" type="number" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" />
            </div>
            <div>
                <label>IOS? : </label>
                <input required onChange={handleInput} value={input.is_ios_app} name="is_ios_app" type="number" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" />
            </div>
           
            

            <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3" />
        </form>
        
    </div>
       </> 
    )
}

export default Manage