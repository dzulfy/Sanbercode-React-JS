import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Table } from "flowbite-react";

const Tugas11 = () => {
    const [data, setData] = useState(null)
    const [fetchStatus , setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)
    useEffect ( () => {
        if (fetchStatus === true){
            axios.get("https://backendexample.sanbercloud.com/api/student-scores")
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
            course : "",
            score : ""
        }
    )

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "name") {
            setInput( {...input, name : value} )
        } else if(name === "course"){
            setInput({...input, course : value})
        }else if(name === "score") {
            setInput({...input, score : value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name,
            course,
            score
        } = input
        if (currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course, score } )
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
        })
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, { name, course, score })
            .then((res) => {
                setFetchStatus(true)
            })
        }

        setCurrentId(-1)
        setInput(
            {
                name : "",
                course : "",
                score : ""

            }
        )
    }

    const handleDelete = (event) => {

        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
            setFetchStatus(true)
        })
    }
    const handleEdit = (event) => {
       let idData = parseInt(event.target.value)
       setCurrentId(idData)
       axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
       .then((res) => {
        
        let data = res.data

        setInput(
            {
                name : data.name,
                course : data.course,
                score : data.score

            }
        )
       })
    }

    return(
    <>
    <div className="mx-48 my-24 shadow-xl">    
      <Table hoverable >
        <Table.Head className >
          <Table.HeadCell className="w-0 text-center bg-purple-500">
            No
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-500">
            Nama
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-500">
            Mata Kuliah
          </Table.HeadCell>
          <Table.HeadCell className="text-center bg-purple-500">
            Nilai
          </Table.HeadCell>
          <Table.HeadCell className="text-center bg-purple-500">
            Index Nilai
          </Table.HeadCell>
          <Table.HeadCell className="text-center bg-purple-500">
            Action
          </Table.HeadCell>
        </Table.Head>
        {data !== null && data.map((res,index) =>{
            const nilai = handleIndexScore(res.score);
            function handleIndexScore(score){
                if( score >= 80 ){
                    return "A";
                }else if( score >= 70 ) {
                    return "B";   
                }else if( score >= 60 ){
                    return "C"
                }else if (score >= 50) {
                    return "D";
                } else {
                    return "E";
                }
            }
            return (
                <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
            {index + 1}
            </Table.Cell>
            <Table.Cell>
            {res.name}
            </Table.Cell>
            <Table.Cell>
            {res.course}
            </Table.Cell>
            <Table.Cell className="text-center">
            {res.score}
            </Table.Cell>
            <Table.Cell className="text-center">
            {nilai}
            </Table.Cell>
            <Table.Cell className="text-center">
            <button onClick={handleEdit} value={res.id} className=" bg-green-400 hover:bg-green-600 text-white rounded-md p-2 mx-1">Edit</button>
            <button onClick={handleDelete} value={res.id} className=" bg-red-500 hover:bg-red-700 text-white rounded-md p-2 mx-1">Delete</button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
            )
        })}
      </Table>
    </div>

    <div className="shadow-2xl mx-48 my-24 p-5 rounded-xl">
        <form onSubmit={handleSubmit}>
            <div>
                <label >Nama : </label>
                <input required onChange={handleInput} value={input.name} name="name" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div>
                <label >Mata Kuliah : </label>
                <input required onChange={handleInput} value={input.course} name="course" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div>
                <label>Nilai : </label>
                <input required onChange={handleInput} value={input.score} name="score" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3" />
        </form>
        
    </div>
    </>
    )
}


export default Tugas11